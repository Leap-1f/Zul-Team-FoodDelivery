import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const EnterAddress = () => {
  const topTextStyle = {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16.71px",
    color: "rgba(0, 0, 0, 1)",
  };
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
          >
            <LocationOnIcon
              sx={{ color: "#000000", width: "24px", height: "24px" }}
            />
          </Box>
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
