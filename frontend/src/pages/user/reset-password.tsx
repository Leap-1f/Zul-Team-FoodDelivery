import Footer from "@/components/layout/footer";
import { PasswordRecovery } from "@/components/login/passwordRecovery";
import { Signup } from "@/components/signup";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack height="59vh" alignItems="center" justifyContent="center">
        <Stack
          height="100%"
          alignItems="center"
          justifyContent="center"
          width={"1200px"}
        >
          {" "}
          <PasswordRecovery></PasswordRecovery>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
