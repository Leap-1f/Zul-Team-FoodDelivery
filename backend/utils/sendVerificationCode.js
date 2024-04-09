import nodemailer from "nodemailer";
import { UserModel } from "./model/user.model.js";

function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

async function sendVerificationCode(email) {
  const code = generateVerificationCode();
  const codeExpires = new Date();
  codeExpires.setMinutes(codeExpires.getMinutes() + 30); // Code expires in 30 minutes

  // Update the user's document with the new code and expiration time
  await UserModel.updateOne({ email }, { verificationCode: code, codeExpires });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-password",
    },
  });

  let mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Email Verification Code",
    text: `Your verification code is: ${code}`,
    html: `<p>Your verification code is: <strong>${code}</strong></p>`,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
}

module.exports = sendVerificationCode;
