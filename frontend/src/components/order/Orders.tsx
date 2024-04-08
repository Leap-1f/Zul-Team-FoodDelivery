import { Box, Typography, Button } from "@mui/material";
import { StepTwo } from ".//orderTexts/StepTwo";
import FoodImage from "./checkButtonImages/Image.svg";
import Image from "next/image";

export const Orders = ({ allInputsFilled }: any) => {
  return (
    <Box>
      <StepTwo />
      <Box
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
          p: 3,
          borderRadius: 2,
          width: "432px",
          height: "612px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: "#ffffff",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              borderTop: "1px solid #D6D8DB ",
              width: "384px",
              borderBottom: "1px solid #D6D8DB ",
              height: "121px",
              justifyContent: "center",
            }}
          >
            <Box sx={{ gap: 2, display: "flex" }}>
              <Image src={FoodImage} alt="FoodImage" width={184} height={121} />
              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#000000",
                    }}
                  >
                    Main Pizza
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#18BA51",
                    }}
                  >
                    34,800₮
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19.09px",
                    color: "#767676",
                  }}
                >
                  Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box sx={{ width: "187px" }}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "27px",
                color: "#5e6166",
              }}
            >
              Нийт төлөх дүн
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "27px",
                color: "#121316",
              }}
            >
              34,800₮
            </Typography>
          </Box>
          <Button
            disabled={!allInputsFilled}
            sx={{
              bgcolor: allInputsFilled ? "#18ba51" : "#EEEFF2",
              width: "187px",
              borderRadius: "4px",
              fontWeight: "400",
              lineHeight: "19.09px",
              textAlign: "center",
              color: allInputsFilled ? "#ffffff" : "#1C2024",
              ":hover": {
                bgcolor: allInputsFilled ? "#18ba51" : "#EEEFF2",
              },
            }}
          >
            Захиалах
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
