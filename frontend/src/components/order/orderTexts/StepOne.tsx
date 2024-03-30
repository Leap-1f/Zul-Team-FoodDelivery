import { Box, Typography } from "@mui/material";
import { BlueButton } from "../checkButtons/BlueButton";
export const StepOne = () => {
  return (
    <Box
      sx={{
        display: "flex",
        p: "16px 24px ",
        gap: 2,
        width: "432px",
      }}
    >
      <BlueButton />
      <Box sx={{ display: "flex ", gap: "4px", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16.71px",
            color: "#8b8e95",
          }}
        >
          Алхам 1
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "23.87px",
            color: "#000000",
          }}
        >
          Хаягийн мэдээлэл оруулах
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19.09px",
            color: "#0468c8",
          }}
        >
          Хаягийн мэдээлэл оруулах
        </Typography>
      </Box>
    </Box>
  );
};
