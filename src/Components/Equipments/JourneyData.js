import React from "react";
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

const useStyles = makeStyles((theme) => ({
  inputs: {
    width: "45%",
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
export default function JourneyData(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Datos del Viaje</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Datos del Viaje</DialogContentText> */}
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              className={classes.inputs}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha Inicio"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              className={classes.inputs}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha Fin"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <TextField
              className={classes.inputs}
              id="standard-read-only-input"
              label="Dias"
              defaultValue="0"
              InputProps={{
                readOnly: true,
              }}
            />
            <Paper className={classes.paper}>
              <TextField
                className={classes.inputs}
                required
                id="standard-required"
                label="Cliente Exportacion"
              />
              <TextField
                className={classes.inputs}
                required
                id="standard"
                label="Equipo"
              />
              <TextField
                className={classes.inputs}
                required
                id="standard"
                label="Chasis"
              />
              <TextField
                className={classes.inputs}
                required
                id="standard"
                label="Genset"
              />
              <TextField
                className={classes.inputs}
                label="Peso"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.inputs}
                label="Precio"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">U$</InputAdornment>
                  ),
                }}
              />
            </Paper>
            <Paper className={classes.paper}>
              <TextField
                className={classes.inputs}
                required
                id="standard-required"
                label="Cliente Importacion"
              />
              <TextField
                className={classes.inputs}
                required
                id="standard"
                label="Equipo"
              />
              <TextField
                className={classes.inputs}
                required
                id="standard"
                label="Chasis"
              />
              <TextField
                className={classes.inputs}
                required
                id="standard"
                label="Genset"
              />
              <TextField
                className={classes.inputs}
                label="Peso"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.inputs}
                label="Precio"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">U$</InputAdornment>
                  ),
                }}
              />
            </Paper>
            <TextField
              className={classes.inputs}
              label="Otros Ingresos"
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">U$</InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.inputs}
              label="Total"
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
