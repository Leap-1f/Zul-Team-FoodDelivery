import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import RailwayAlertIcon from "@mui/icons-material/RailwayAlert";

const useStyles = makeStyles((theme) => ({
     root: {
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(6),
          padding: theme.spacing(2),
          width: "384px",
          height: "176px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          color: "#670E13",
          flexDirection: "column",
     },
     text: {
          fontSize: "16px",
          textAlign: "center",
          color: "#808080",
          fontWeight: 400,
     },
     icon: {
          width: "80px",
          height: "80px",
          marginRight: theme.spacing(2),
          marginLeft: theme.spacing(2),
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
     },
}));

interface ErrorMessageProps {
     imageUrl?: string;
     message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ imageUrl, message }) => {
     const classes = useStyles();

     return (
          <Paper elevation={3} className={classes.root}>
               <img src="https://i.ibb.co/S78hnc0/Group-542.png" alt="" />
               <Typography className={classes.text} variant="body1">
                    {message}
               </Typography>
          </Paper>
     );
};

export default function Error3() {
     return (
          <main>
               <ErrorMessage message="Уучлаарай, систем ачааллахад алдаа гарлаа." />
          </main>
     );
}
