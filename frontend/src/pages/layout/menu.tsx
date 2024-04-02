import Login from "@/components/login/index";
import Footer from "@/components/layout/footer";
import { Stack } from "@mui/material";
import { FoodMenu } from "@/components/foodMenu";

export default function Menu() {
  return (
    <>
      <Stack
        minHeight="59vh"
        alignItems="center"
        justifyContent="center"
        sx={{ overflow: "auto" }}
      >
        <Stack
          height="100%"
          alignItems="center"
          justifyContent="center"
          width={"1200px"}
        >
          {" "}
          <FoodMenu></FoodMenu>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
