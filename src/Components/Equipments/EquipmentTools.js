import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
  chekboxs: {
    width: "45%",
    marginLeft: 10,
  },
  button: {
    marginTop: 10,
  },
}));

export default function EquipmentTools() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Container maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Herramientas en el equipo
          </Typography>
          <Divider />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Radio de musica"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Radio de comunicacion"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Gata con maneral"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Llave rueda con maneral"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Manivela"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Manguera de aire"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Medidor de aire"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Cadena"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Perro"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Llanta de repuesto con rine"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Solo llanta de repuesto"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Extintor de fuego"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Manguera de aire interna"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Casco"
          />
          <FormControlLabel
            className={classes.chekboxs}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Chaleco reflectivo"
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
