import React, { useState, useEffect } from "react";
import { Orders } from "./Orders";
import { StepOne } from "./orderTexts/StepOne";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

export const Order = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addition, SetAddition] = useState("");
  const checkAllInputsFilled = () => {
    setAllInputsFilled(
      selectedDistrict !== "" &&
        selectedKhoroo !== "" &&
        selectedApartment !== "" &&
        phoneNumber !== "" &&
        addition !== ""
    );
  };

  const handleAddittion = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    SetAddition(value);
    checkAllInputsFilled();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPaymentMethod(value);
    checkAllInputsFilled();
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setPhoneNumber(value);
    checkAllInputsFilled();
  };
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [changeColor, setChangeColor] = useState(false);

  const [selectedKhoroo, setSelectedKhoroo] = useState("");
  const [changeColorTwo, setChangeColorTwo] = useState(false);

  const [selectedApartment, setSelectedApartment] = useState("");
  const [changeColorThree, setChangeColorThree] = useState(false);

  const changeFormColor = () => {
    setChangeColor(true);
  };

  const changeFormColorTwo = () => {
    setChangeColorTwo(true);
  };

  const changeFormColorThree = () => {
    setChangeColorThree(true);
  };
  useEffect(() => {
    checkAllInputsFilled();
  }, [
    selectedDistrict,
    selectedKhoroo,
    selectedApartment,
    phoneNumber,
    addition,
  ]);
  const districts = [
    "Баянзүрх дүүрэг",
    "Хан-Уул дүүрэг",
    "Баянгол дүүрэг",
    "Сонгинохайрхан дүүрэг",
    "Чингэлтэй дүүрэг",
  ];
  const khoroo = [
    "1-р хороо",
    "2-р хороо",
    "3-р хороо",
    "4-р хороо",
    "5-р хороо",
    "6-р хороо",
    "7-р хороо",
  ];
  const apartment = [
    "Нархан хотхон",
    "26-р байр",
    "Хоймор хотхон",
    "45-р байр",
    "Зайсан хотхон",
  ];
  const inputBaseBorderStyle = {
    "& .MuiInputBase-root": {
      "&:focus": {
        outline: "none",
      },
    },
  };
  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    py: 1,
    px: 2,
  };
  const selectStyle = {
    width: "full",
    display: "flex",
    gap: "4px",
    border: "1px solid #ecedf0",
  };
  const inputLabelStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
  };
  const payTextStyle = {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.09px",
    color: "#8b8e95",
    textAlign: "center",
  };
  const topTextStyle = {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16.71px",
    color: "rgba(0, 0, 0, 1)",
  };

  return (
    <Box sx={{ display: "flex", gap: "212px" }}>
      <Box>
        <StepOne allInputsFilled={allInputsFilled} />
        <Box
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
            p: 3,
            borderRadius: 2,
            width: "432px",
            height: "612px",
            bgcolor: "#ffffff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
              }}
            >
              <Typography sx={topTextStyle}>Хаяг аа оруулна уу</Typography>
              <FormControl
                sx={{
                  position: "relative",
                  bgcolor: changeColor ? "#18ba51" : "#f7f7f8",
                }}
              >
                {selectedDistrict === "" && (
                  <InputLabel
                    sx={{
                      ...inputLabelStyle,
                      color: changeColor ? "#ffffff" : "#8b9e95",
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        width: 20,
                        height: 20,
                        color: changeColor ? "#ffffff" : grey[900],
                      }}
                    />
                    <Typography
                      sx={{ color: changeColor ? "#ffffff" : "#8B8E95" }}
                    >
                      {" "}
                      Дүүрэг сонгоно уу
                    </Typography>
                  </InputLabel>
                )}
                <Select
                  sx={{ ...selectStyle }}
                  onOpen={changeFormColor}
                  onClose={changeFormColor}
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                  }}
                >
                  {districts.map((district) => (
                    <MenuItem
                      sx={{
                        ...menuItemStyle,
                      }}
                      key={district}
                      value={district}
                    >
                      <Box sx={{ display: "flex" }}>
                        <LocationOnIcon
                          sx={{
                            width: 24,
                            height: 24,
                          }}
                        />
                        <Typography>{district}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  position: "relative",
                  bgcolor: changeColorTwo ? "#18ba51" : "#f7f7f8",
                }}
              >
                {selectedKhoroo === "" && (
                  <InputLabel sx={inputLabelStyle}>
                    <LocationOnIcon
                      sx={{
                        width: 20,
                        height: 20,
                        color: changeColorTwo ? grey[100] : grey[900],
                      }}
                    />
                    <Typography
                      sx={{ color: changeColorTwo ? "#ffffff" : "#8B8E95" }}
                    >
                      {" "}
                      Хороо сонгоно уу
                    </Typography>
                  </InputLabel>
                )}
                <Select
                  sx={selectStyle}
                  onOpen={changeFormColorTwo}
                  onClose={changeFormColorTwo}
                  value={selectedKhoroo}
                  onChange={(e) => {
                    setSelectedKhoroo(e.target.value);
                  }}
                >
                  {khoroo.map((khoroo) => (
                    <MenuItem sx={menuItemStyle} key={khoroo} value={khoroo}>
                      <Box sx={{ display: "flex" }}>
                        <LocationOnIcon
                          sx={{
                            width: 24,
                            height: 24,
                          }}
                        />
                        <Typography>{khoroo}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  position: "relative",
                  bgcolor: changeColorThree ? "#18ba51" : "#f7f7f8",
                }}
              >
                {selectedApartment === "" && (
                  <InputLabel sx={inputLabelStyle}>
                    <LocationOnIcon
                      sx={{
                        width: 20,
                        height: 20,
                        color: changeColorThree ? grey[100] : grey[900],
                      }}
                    />
                    <Typography
                      sx={{ color: changeColorThree ? "#ffffff" : "#8B8E95" }}
                    >
                      {" "}
                      Байр, гудамж сонгоно уу
                    </Typography>
                  </InputLabel>
                )}
                <Select
                  sx={selectStyle}
                  onOpen={changeFormColorThree}
                  onClose={changeFormColorThree}
                  value={selectedApartment}
                  onChange={(e) => {
                    setSelectedApartment(e.target.value);
                  }}
                >
                  {apartment.map((apartment) => (
                    <MenuItem
                      sx={menuItemStyle}
                      key={apartment}
                      value={apartment}
                    >
                      <Box sx={{ display: "flex" }}>
                        <LocationOnIcon
                          sx={{
                            width: 24,
                            height: 24,
                          }}
                        />
                        <Typography>{apartment}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: 4, flexDirection: "column" }}>
              <Box
                sx={{ display: "flex", gap: "4px", flexDirection: "column" }}
              >
                <Typography sx={topTextStyle}>Нэмэлт мэдээлэл</Typography>
                <TextField
                  value={addition}
                  onChange={handleAddittion}
                  rows={6}
                  placeholder="Орц, давхар, орцны код ..."
                  sx={{
                    width: "full",
                    outline: "none",
                    textWrap: "wrap",

                    "& .MuiInputBase-root": {
                      color: "#333",
                      py: 1,
                      px: 2,
                      outline: "none",
                      "&:focus": {
                        outline: "none",
                      },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", gap: "4px", flexDirection: "column" }}
              >
                <Typography sx={topTextStyle}>Утасны дугаар*</Typography>
                <TextField
                  fullWidth
                  type="number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                  }}
                  inputProps={{
                    min: "0",
                    max: "99999999",
                  }}
                  placeholder="Утасны дугаараа оруулна уу"
                />
              </Box>
              <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16.71px",
                    color: "#000000",
                  }}
                >
                  Төлбөр төлөх
                </Typography>
                <Box sx={{ display: "flex", gap: "33px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      justifyItems: "center",
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    <Checkbox
                      value="cash"
                      sx={{
                        width: 24,
                        height: 24,
                        color: grey[900],
                        "&.Mui-checked": {
                          color: "#1C1B1F",
                        },
                      }}
                      checked={paymentMethod === "cash"}
                      onChange={handleChange}
                    />
                    <Typography sx={payTextStyle}>Бэлнээр</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={handleChange}
                      sx={{
                        width: 24,
                        height: 24,
                        color: grey[900],
                        "&.Mui-checked": {
                          color: "#1C1B1F",
                        },
                      }}
                    />
                    <Typography sx={payTextStyle}>Картаар</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Orders allInputsFilled={allInputsFilled} />
    </Box>
  );
};
