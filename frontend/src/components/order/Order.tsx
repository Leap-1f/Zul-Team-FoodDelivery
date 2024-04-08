import { EnterAddress } from "./EnterAddress";
import { Orders } from "./Orders";
import { Box } from "@mui/material";
import { useState } from "react";

export const Order = () => {
  const [allTextInputsFilled, setAllTextInputsFilled] = useState(false);

  const handleAllTextInputsFilled = (status) => {
    setAllTextInputsFilled(status);
  };
  return (
    <Box sx={{ display: "flex", gap: "212px" }}>
      <EnterAddress inputPassProps={handleAllTextInputsFilled} />
      <Orders allTextInputsFilled={allTextInputsFilled} />
    </Box>
  );
};