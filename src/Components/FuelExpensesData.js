import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  inputs: {
    width: "85%",
    marginLeft: 5,
    // marginLeft: 10,
  },
  fuel: { width: "40%", marginLeft: 5 },
  button: {
    marginTop: 10,
  },
  paper: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
  },
}));
export default function EquipmentExpenseData(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Gasto de Combustible</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl className={classes.inputs}>
              <InputLabel id="demo-simple-select-label">#Viaje</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className={classes.fuel}
              id="standard-basic"
              label="Combustible Inicial"
            />
            <TextField
              className={classes.fuel}
              id="standard-basic"
              label="Combustible Trae"
            />
            <TextField
              disabled
              className={classes.fuel}
              id="standard-basic"
              label="Gasto Real"
            />
            <TextField
              className={classes.fuel}
              id="standard-basic"
              label="Gasto Estimado"
            />
            <TextField
              disabled
              className={classes.fuel}
              id="standard-basic"
              label="Diferencia"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Observaciones"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
