import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    minWidth: "100%",
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    margin: 10,
  },
  inputs: {
    width: "80%",
  },
  button: {
    marginTop: 10,
  },
}));

export default function Information() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Datos del Transporte
          </Typography>
          <Divider />
          <TextField
            className={classes.inputs}
            id="standard-basic"
            label="Nombre del Transporte"
          />
          <TextField
            className={classes.inputs}
            id="standard-basic"
            label="RUC"
          />
          <TextField
            className={classes.inputs}
            id="standard-basic"
            label="Telefono"
          />
          <TextField
            className={classes.inputs}
            id="standard-basic"
            label="Direccion"
          />
          <TextField
            className={classes.inputs}
            id="standard-basic"
            label="Pagina web"
          />
          <TextField
            className={classes.inputs}
            id="standard-basic"
            label="Correo"
          />
          <TextField
            className={classes.inputs}
            id="standard-password-input"
            label="Contrasenia"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            className={classes.inputs}
            id="standard-password-input"
            label="Confirmar Contrasenia"
            type="password"
            autoComplete="current-password"
          />
          <br />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Guardar
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
