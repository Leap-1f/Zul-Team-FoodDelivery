import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { BootstrapDialog } from "@/components/utils/styles";
import { OrderContext } from "@/components/utils/context/orderContext";

type TFoodModalProps = {
  handleClose: () => void;
  open: boolean;
  foodName: string;
  discountedPrice: number;
  foodPrice: number;
  imgUrl: string;
  foodIngredients: string;
  foodId: string;
};
export const FoodModal = ({
  handleClose,
  foodId,
  open,
  foodName,
  discountedPrice,
  foodPrice,
  imgUrl,
  foodIngredients,
}: TFoodModalProps) => {
  const [quantity, setQuantity] = useState(0);
  const { newOrderInfo, setNewOrderInfo, badgeContent, setBadgeContent } =
    useContext(OrderContext);
  const [test, setTest] = useState({
    food: { foodId: "", quantity: 0 },
    total: 0,
  });

  const handleBasket = async () => {
    let somethinng;
    setNewOrderInfo((prev) => ({
      ...prev,
      foods: (somethinng = [
        ...prev.foods,
        { foodId: foodId, quantity: quantity },
      ]),
      totalPrice: prev.totalPrice + quantity * discountedPrice,
    }));
    handleClose();

    setBadgeContent(newOrderInfo.foods.length);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          // width: "100%",
          display: "flex",
          direction: "row",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width="70%"
          height="100%"
        >
          <Box
            sx={{
              width: "320px",
              height: "320px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
              backgroundImage: `url(${imgUrl ? imgUrl : "/goyhool2.png"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Stack>
        <Stack sx={{ m: 0, p: 2, width: "350px" }} spacing={2}>
          <Stack sx={{ m: 0, p: 1 }} spacing={2}>
            <Stack>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                id="customized-dialog-title"
              >
                {foodName}
              </Typography>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <Typography color={"#18BA51"} gutterBottom>
                  {discountedPrice}₮
                </Typography>
                {foodPrice > 0 && (
                  <Typography
                    variant="body2"
                    color={"black"}
                    sx={{ textDecoration: "line-through" }}
                    gutterBottom
                  >
                    {foodPrice}₮
                  </Typography>
                )}
              </Stack>
            </Stack>

            <Stack>
              <Typography sx={{ fontWeight: "bold" }} variant="body1">
                Орц
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#F6F6F6",
                  color: "#767676",
                  padding: 1,
                  borderRadius: "8px",
                }}
              >
                <Typography variant="caption">{foodIngredients}</Typography>
              </Box>
            </Stack>
            <Stack>
              <Typography sx={{ fontWeight: "bold" }} variant="body1">
                Тоо
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() =>
                    quantity !== 0 ? setQuantity(quantity - 1) : setQuantity(0)
                  }
                  sx={{
                    backgroundColor: "#18BA51",
                    color: "white",
                    width: "35px",
                    height: "35px",
                    borderRadius: "10px",
                    ":active": {
                      scale: "97%",
                    },
                  }}
                >
                  <RemoveIcon fontSize="small"></RemoveIcon>
                </Stack>
                <Typography>{quantity}</Typography>
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => setQuantity(quantity + 1)}
                  sx={{
                    backgroundColor: "#18BA51",
                    color: "white",
                    width: "35px",
                    height: "35px",
                    borderRadius: "10px",
                    ":active": {
                      scale: "97%",
                    },
                  }}
                >
                  <AddIcon fontSize="small"></AddIcon>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                width: "100%",
                backgroundColor: "#18BA51",
                color: "white",
                textTransform: "capitalize",
              }}
              disabled={quantity == 0}
              onClick={handleBasket}
            >
              Сагслах
            </Button>
          </DialogActions>
        </Stack>
      </DialogContent>
    </BootstrapDialog>
  );
};
function useEffect(
  arg0: () => void,
  arg1: {
    userId: string;
    foods: { foodId: string; quantity: number }[];
    totalPrice: number;
  }[]
) {
  throw new Error("Function not implemented.");
}
