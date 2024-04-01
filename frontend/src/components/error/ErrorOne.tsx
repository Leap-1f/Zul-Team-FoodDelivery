import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@mui/icons-material/Cancel";

const useStyles = makeStyles((theme) => ({
     root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: theme.spacing(3),
          maxWidth: "300px",
          margin: "0 auto",
          backgroundColor: theme.palette.background.default,
          borderRadius: 20,
          boxShadow: theme.shadows[3],
     },
     cancelIcon: {
          fontSize: 55,
          color: theme.palette.error.main,
          marginBottom: theme.spacing(1),
     },
     title: {
          display: "flex",
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(3),
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "30px",
          textAlign: "center",
          color: theme.palette.text.primary,
     },
}));

interface ErrorMessageProps {
     title: string;
}

function ErrorMessage({ title }: ErrorMessageProps) {
     const classes = useStyles();

     return (
          <Paper className={classes.root}>
               <CancelIcon className={classes.cancelIcon} />
               <Typography variant="h6" className={classes.title}>
                    {title}
               </Typography>
          </Paper>
     );
}

export default function Error1() {
     return (
          <main>
               <ErrorMessage
                    title={"Уучлаарай,систем ачааллахад алдаа гарлаа."}
               />
          </main>
     );
}
