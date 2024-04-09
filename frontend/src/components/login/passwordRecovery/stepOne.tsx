import { Button, Stack, TextField, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { passwordResetSchema, FromValues } from "./validationPasswordReser";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/components/utils/context/userContext";

interface StepOneProps {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}

export const StepOne = ({ setCurrentStep, currentStep }: StepOneProps) => {
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;
  const [warningMessage, setWarningMessage] = useState("");
  const { setPasswordRecoveryUser } = useContext(UserContext);

  const formikPasswordReset = useFormik<FromValues>({
    initialValues: {
      email: "",
    },
    validationSchema: passwordResetSchema,
    onSubmit: async (values) => {
      try {
        const data = await fetch(`${ENDPOINT_URL}/user/getUserEmail`, {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const response = await data.json();
        if (response.message) {
          setWarningMessage(response.message);
        } else if (response.success) {
        }
        setPasswordRecoveryUser((prev) => ({ ...prev, email: values.email }));
        setCurrentStep(currentStep + 1);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    },
  });

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      width="30%"
      sx={{ scale: "90%" }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Нууц үг сэргээх
      </Typography>
      <FormikProvider value={formikPasswordReset}>
        <form
          style={{ width: "100%" }}
          onSubmit={formikPasswordReset.handleSubmit}
        >
          <Stack width="100%" spacing="4px">
            <Typography>Имэйл</Typography>
            <TextField
              sx={{ width: "100%" }}
              name="email"
              onChange={formikPasswordReset.handleChange}
              value={formikPasswordReset.values.email}
              placeholder="Имэйл хаягаа оруулна уу"
            />
            {warningMessage && (
              <Typography
                color={"#EF4444"}
                sx={{ fontSize: "10px", alignItems: "center" }}
              >
                {warningMessage}
              </Typography>
            )}
            {formikPasswordReset.errors.email &&
            formikPasswordReset.touched.email ? (
              <Typography
                color="error"
                sx={{ fontSize: "12px", padding: "4px" }}
              >
                {formikPasswordReset.errors.email}
              </Typography>
            ) : null}
          </Stack>
          <Button
            type="submit"
            variant="text"
            disabled={!formikPasswordReset.values.email}
            sx={{
              width: "100%",
              height: 48,
              background: formikPasswordReset.values.email
                ? "#18BA51"
                : "#EEEFF2",
              color: "black",
              marginTop: 4,
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </form>
      </FormikProvider>
    </Stack>
  );
};
