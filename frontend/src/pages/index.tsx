import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { StepOne } from "@/components/order/orderTexts/StepOne";
import { StepTwo } from "@/components/order/orderTexts/StepTwo";
import { Box } from "@mui/material";
import { EnterAddress } from "@/components/order/EnterAddress";
import { Orders } from "@/components/order/Orders";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Box sx={{ display: "flex" }}>
        <EnterAddress />
        <Orders />
      </Box>

      <Footer />
    </>
  );
}
