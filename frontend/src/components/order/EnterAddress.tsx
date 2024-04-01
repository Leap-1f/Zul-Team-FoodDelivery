import { Box, Typography, Select, MenuItem } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

export const EnterAddress = () => {
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
  const districts = [
    "Баянзүрх дүүрэг",
    "Хан-Уул дүүрэг",
    "Баянгол дүүрэг",
    "Сонгинохайрхан дүүрэг",
    "Чингэлтэй дүүрэг",
  ];

  return (
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
      <Box sx={{ display: "flex", gap: 5, flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <Typography sx={topTextStyle}>Хаяг аа оруулна уу</Typography>
          <Select
            sx={{
              width: "full",
              display: "flex",
              gap: "4px",
              border: "1px solid #ecedf0",
            }}
          >
            {districts.map((district) => (
              <MenuItem
                sx={{
                  display: "flex",
                  gap: "4px",
                  py: 1,
                  px: 2,
                }}
                key={district}
                value={district}
              >
                <LocationOnIcon sx={{ width: 24, height: 24 }} />
                <Typography>{district}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ display: "flex", gap: 4, flexDirection: "column" }}>
          <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <Typography sx={topTextStyle}>Нэмэлт мэдээлэл</Typography>
            <TextField
              fullWidth
              placeholder="Орц, давхар, орцны код ..."
              sx={{
                height: "112px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
            <Typography sx={topTextStyle}>Утасны дугаар*</Typography>
            <TextField
              fullWidth
              placeholder="Утасны дугаараа оруулна уу"
              sx={{
                height: "112px",
              }}
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
                  sx={{
                    width: 24,
                    height: 24,
                    color: grey[900],
                    "&.Mui-checked": {
                      color: "#1C1B1F",
                    },
                  }}
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
  );
};
