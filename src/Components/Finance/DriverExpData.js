import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const useStyles = makeStyles((theme) => ({
  inputs: {
    width: "85%",
    marginLeft: 10,
  },
  button: {
    marginTop: 10,
  },
  paper: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
  },
}));
export default function DriverExpenseData(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [age, setAge] = React.useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
        <DialogTitle id="form-dialog-title">Gasto de Viaje</DialogTitle>
        <DialogContent>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              className={classes.inputs}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <FormControl className={classes.inputs}>
              <InputLabel id="demo-simple-select-label">Conductor</InputLabel>
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
            <FormControl className={classes.inputs}>
              <InputLabel id="demo-simple-select-label">
                Tipo de Gasto
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={1}>Pago por Viaje</MenuItem>
                <MenuItem value={2}>Viaticos para viaje</MenuItem>
                <MenuItem value={3}>Estadia</MenuItem>
                <MenuItem value={4}>Reembolso</MenuItem>
                <MenuItem value={5}>Relevo</MenuItem>
                <MenuItem value={6}>Prestaciones</MenuItem>
                <MenuItem value={7}>Otros</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className={classes.inputs}
              required
              id="standard-required"
              label="Descripcion"
            />
            <TextField
              className={classes.inputs}
              label="Monto"
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">U$</InputAdornment>
                ),
              }}
            />
          </MuiPickersUtilsProvider>
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
