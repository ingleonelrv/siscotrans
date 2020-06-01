import React from "react";
//component-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
//icons
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  container: {
    // border: "1px solid red",
  },
  title: {
    textAlign: "center",
  },
  buttonAdd: {
    textAlign: "right",
  },
}));
export default function TableLayout(props) {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography className={classes.title} variant="h5" gutterBottom>
        {props.title}
      </Typography>
      <Divider />
      {props.children}
      <div className={classes.buttonAdd}>
        <Fab color="primary" aria-label="add" onClick={props.buttonAddAction}>
          <AddIcon />
        </Fab>
      </div>
    </Container>
  );
}
