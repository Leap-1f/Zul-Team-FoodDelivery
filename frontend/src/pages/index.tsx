import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { Order } from "@/components/order/Order";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Order />
      <Footer />
    </>
  );
}
