import {
  useState,
  KeyboardEvent,
  MouseEvent,
  Fragment,
  useEffect,
} from "react";
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Button,
  Stack,
  Box,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type TBasketFoodCardProps = {
  foodId: string;
  quantity: number;
};
type TNewFoodInfo = {
  _id: string;
  name: string;
  category: string;
  ingredients: string;
  price: number;
  discountRate: number;
  image: string;
};
export const BasketFoodCard = ({ foodId, quantity }: TBasketFoodCardProps) => {
  const [basketQuantity, setBasketQuantity] = useState(quantity);
  const [foodInfo, setFoodInfo] = useState<TNewFoodInfo>({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: 0,
    discountRate: 0,
    category: "",
  });
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;

  const fetchFoodById = async () => {
    try {
      const data = await fetch(`${ENDPOINT_URL}/food/get-food`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: foodId }),
      });
      const response = await data.json();
      setFoodInfo((prev: TNewFoodInfo) => ({
        ...prev,
        _id: response?._id,
        name: response?.name,
        category: response?.category,
        image: response?.image,
        ingredients: response?.ingredients,
        price: response?.price,
        discountRate: response?.discountRate,
      }));
      console.log(response, "response======");
    } catch (err) {
      console.log(err);
    }
  };
  let discountedPrice = new Intl.NumberFormat('en-US').format( ((100 - foodInfo.discountRate) / 100) * (foodInfo.price))
    
  console.log(foodInfo, "foodinfo =========");
  useEffect(() => {
    fetchFoodById();
    console.log("useeffect ajillaa");
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        width: "90%",
        minHeight: "140px",
        padding: "16px",
        gap: "10px",
        alignItems: "center",
        boxShadow: "none",
        borderBottom: "1px solid #D6D8DB",
        paddingY: "10px",
      }}
    >
      <>
        <Box
          sx={{
            width: "150px",
            height: "150px",
            scale: "90%",
            // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
            backgroundImage: `url(${
              foodInfo?.image !== ""
                ? foodInfo.image
                : "https://www.realsimple.com/thmb/fMh6cWLYxsddO3BuSJXanCk1gpI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // gap: "8px",
            padding: 0,
            scale: "90%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              // height: "100%"
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h6">{foodInfo?.name}</Typography>
              <IconButton
                aria-label="settings"
                sx={{ display: "flex", alignItems: "start" }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <Typography sx={{ color: "#18BA51", marginTop: "-5px" }}>
              {discountedPrice}₮
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              padding: "8px",
              backgroundColor: "#F6F6F6",
              color: "#767676",
              borderRadius: "10px",
            }}
          > 
            {foodInfo.ingredients}
          </Typography>
          <Box
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingBottom: 0,
            }}
          >
            <Stack
              direction={"row"}
              // justifyContent={"space-between"}
              alignItems={"center"}
              spacing={3}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() =>
                  basketQuantity !== 0
                    ? setBasketQuantity(basketQuantity - 1)
                    : setBasketQuantity(0)
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
              <Typography>{basketQuantity}</Typography>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => setBasketQuantity(basketQuantity + 1)}
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
          </Box>
        </CardContent>
      </>
    </Box>
  );
};
