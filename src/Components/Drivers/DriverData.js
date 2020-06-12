import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  inputs1: {
    width: "90%",
    marginLeft: 10,
  },
  inputs2: {
    width: "45%",
    marginLeft: 10,
  },
  inputs3: {
    width: "45%",
    marginLeft: 10,
    marginTop: 0,
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
export default function DriverData(props) {
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
        <DialogTitle id="form-dialog-title">Datos del Piloto</DialogTitle>
        <DialogContent>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <TextField
              className={classes.inputs1}
              required
              id="standard-required"
              label="Nombre"
            />
            {/* <TextField
              className={classes.inputs}
              required
              id="standard-required"
              label="Numero SS"
            /> */}
            <Paper className={classes.paper}>
              <TextField
                className={classes.inputs2}
                required
                id="standard-required"
                label="Numero Celular 1"
              />
              <TextField
                className={classes.inputs2}
                required
                id="standard"
                label="Numero Celular 2"
              />
            </Paper>
            <Paper className={classes.paper}>
              <TextField
                className={classes.inputs2}
                required
                id="standard-required"
                label="Identificacion"
              />
              <KeyboardDatePicker
                className={classes.inputs3}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Fecha Expira"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Paper>
            <Paper className={classes.paper}>
              <TextField
                className={classes.inputs2}
                required
                id="standard-required"
                label="Numero Licencia"
              />
              <KeyboardDatePicker
                className={classes.inputs3}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Fecha Expira"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Paper>
            <Paper className={classes.paper}>
              <TextField
                className={classes.inputs2}
                required
                id="standard-required"
                label="Numero Pasaporte"
              />
              <KeyboardDatePicker
                className={classes.inputs3}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Fecha Expira"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Paper>
            <Paper className={classes.paper}>
              <TextField
                className={classes.inputs2}
                required
                id="standard-required"
                label="Contacto Emergencia"
              />
              <TextField
                className={classes.inputs2}
                required
                id="standard"
                label="Celular"
              />
            </Paper>
            <Paper className={classes.paper}>
              <FormControl className={classes.inputs1}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Contratado con camion</MenuItem>
                  <MenuItem value={2}>Contratado sin camion</MenuItem>
                  <MenuItem value={3}>Despedido</MenuItem>
                  <MenuItem value={4}>Renuncio</MenuItem>
                </Select>
              </FormControl>
              {/* if 'contratado' dinamic texfield */}
              <KeyboardDatePicker
                className={classes.inputs3}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Fecha Contratacion"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <TextField
                className={classes.inputs2}
                required
                id="standard"
                label="Observacion"
              />
              {/* if 'despedido o renuncia' dinamic textfield */}
              {(age === 2 || age === 3) && (
                <Fragment>
                  <KeyboardDatePicker
                    className={classes.inputs3}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Fecha Finalizacion"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <TextField
                    className={classes.inputs2}
                    required
                    id="standard"
                    label="Observacion"
                  />
                </Fragment>
              )}
            </Paper>
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
