import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/layout/header";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return <Box style={{height: "100vh"}}>
  <Header></Header>
   <Component {...pageProps} />
   </Box>
 
}
