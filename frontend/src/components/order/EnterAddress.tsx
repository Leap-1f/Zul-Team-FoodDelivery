import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
export const EnterAddress = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const topTextStyle = {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16.71px",
    color: "rgba(0, 0, 0, 1)",
  };
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
  return (
    <Box
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.05) ",
        p: 3,
        borderRadius: 2,
        width: "432px",
        my: "20px",
      }}
    >
      <Box sx={{ display: "flex", gap: 5 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <Typography sx={topTextStyle}>Хаяг аа оруулна уу</Typography>
          <Box
            sx={{
              borderRadius: "4px",
              border: "1px solid #ecedf0 ",
            }}
          ></Box>
          <FormControl sx={{ width: "384px" }}>
            <LocationOnIcon
              sx={{ color: "#000000", width: "24px", height: "24px" }}
            />
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        ></Box>
      </Box>
    </Box>
  );
};
