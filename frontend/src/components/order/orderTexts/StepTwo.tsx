import { Box, Typography } from "@mui/material";
import { BlueButton } from "../checkButtons/BlueButton";
import { GreenButton } from "../checkButtons/GreenButton";

export const StepTwo = ({ allInputsFilled }) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: "16px 24px ",
        gap: 2,
        width: "432px",
      }}
    >
  <BlueButton/>
      <Box sx={{ display: "flex ", gap: "4px", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16.71px",
            color: "#8b8e95",
          }}
        >
          Алхам 2
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "23.87px",
            color: "#000000",
          }}
        >
          Захиалга баталгаажуулах
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19.09px",
            color: "#0468c8",
          }}
        >
          Хүлээгдэж байна
        </Typography>
      </Box>
    </Box>
  );
};
