import { UserModel } from "../model/user.model.js";
import bcryct from "bcrypt";

export const getUserByField = async (req, res) => {
  //Login-d shiglana
  const { email, password } = req.body;
  try {
    const data = await UserModel.find({ email: toUpperCaseLetter(email) });
    if (data.length == 0) {
      res.send({ message: "Бүртгэлгүй хэрэглэгч байна" });
    } else {
      const isValid = await bcryct.compare(password, data[0].password);
      if (isValid) {
        console.log(data, "data");
        res.send({
          token: data[0]._id,
          role: data[0].role,
          success: true,
        });
      } else {
        res.send({
          message: "Нууц үг буруу байна",
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
export const getUserById = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await UserModel.findById(id);

    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (req, res) => {
  //signup -d ashiglana
  const { name, email, password, phoneNumber, address } = req.body;
  const salt = bcryct.genSaltSync(1);
  const hashedPassword = await bcryct.hash(password, salt);
  try {
    const existingUser = await UserModel.findOne({
      email: toUpperCaseLetter(email),
    });
    if (existingUser) {
      return res.send({ message: "И-мэйл бүртгэлтэй байна" });
    } else {
      try {
        const newUser = await UserModel.create({
          name: name,
          email: toUpperCaseLetter(email),
          password: hashedPassword,
          phoneNumber: phoneNumber,
          address: address,
        });
        // res.send(newUser);
        res.send({ success: true });
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
function capitalizeFirstLetter(inputText) {
  if (!inputText || typeof inputText !== "string") {
    return "";
  }
  return inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
}
function toUpperCaseLetter(inputText) {
  return inputText.toLowerCase();
}
// export const createUser = async (req, res) => {
//   //signup -d ashiglana
//   const { name, email, password, phoneNumber, address } = req.body;
//   const salt = bcryct.genSaltSync(1);
//   const hashedPassword = await bcryct.hash("11111111", salt);
//   try {
//     const existingUser = await UserModel.findOne({ email: email });
//     if (existingUser) {
//       return res.send({ message: "И-мэйл бүртгэлтэй байна" });
//     } else {
//       try {
//         const newUser = await UserModel.create({
//           name: capitalizeFirstLetter("admin"),
//           email: toUpperCaseLetter("admin@gmail.com"),
//           password: hashedPassword,
//           phoneNumber: "99999999",
//           address: "баянзүрх",
//         });
//         // res.send(newUser);
//         res.send({ success: true });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
export const updateUser = async (req, res) => {
  //edit profile-d ashiglana
  const { id, name, email, phoneNumber } = req.body;
  try {
    const updatedUserData = await UserModel.updateOne(
      { _id: id },
      { name: name, email: email, phoneNumber: phoneNumber }
    );
    res.send(updatedUserData);
  } catch (err) {
    console.log(err);
  }
};

export const getUserEmail = async (req, res) => {
  //forget password-d shiglana
  const { email } = req.body;
  try {
    const checkUser = await UserModel.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({ message: "И-майл бүртгэлгүй байна" });
    } else if (checkUser) {
      await sendVerificationCode(email),
        res
          .status(200)
          .json({ success: true, message: "И-майл бүртгэлтэй байна" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserPassword = async (req, res) => {
  //forget password-d ashiglana
  const { email, code } = req.body;
  try {
    const updatedUserData = await UserModel.findOne({ email });
    if (!updatedUserData) {
      return res.status(400).json({ message: "User not found" });
    }
    if (updatedUserData.verificationCode !== code) {
      return res.status(400).json({ message: "Invalid code" });
    }
    if (new Date() > updatedUserData.codeExpires) {
      return res.status(400).json({ message: "code expired" });
    }
    await updatedUserData.updateOne(
      { email },
      { verificationCode: null, codeExpires: null },
      res.status(200).json({ message: "Code verified succesfully" })
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};
