import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const useStyles = makeStyles((theme) => ({
     root: {
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(2),
          padding: theme.spacing(2),
          width: "384px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          color: "#670E13",
     },
     icon: {
          width: "36px",
          height: "36px",
          marginRight: theme.spacing(2),
          marginLeft: theme.spacing(2),
     },
}));

interface ErrorAlertProps {
     message: string;
}

function ErrorAlert({ message }: ErrorAlertProps) {
     const classes = useStyles();

     return (
          <Paper elevation={3} className={classes.root}>
               <PriorityHighIcon className={classes.icon} />
               <Typography variant="body1">{message}</Typography>
          </Paper>
     );
}

export default function ErrorComponent() {
     return <ErrorAlert message={"Алдаа гарлаа дахин оролдно уу."} />;
}
