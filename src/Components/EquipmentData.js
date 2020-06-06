import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

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

export default function EquipmentData() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [age, setAge] = React.useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChangeOwner = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Datos del Equipo
          </Typography>
          <Divider />
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="No. de Circulacion"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Placa"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Motor"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Chasis"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Marca"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Modelo"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Anio"
            />
            <TextField
              className={classes.inputs}
              id="standard-basic"
              label="Codigo aduanero"
            />
            {/* <MuiPickersUtilsProvider utils={MomentUtils}> */}
            <KeyboardDatePicker
              className={classes.inputs}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Seguro RC"
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
              label="Exp. Inspeccion Mecanica"
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
              label="Exp. Emision Gases"
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
              format="yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Rodaje"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <FormControl className={classes.inputs}>
              <InputLabel id="demo-simple-select-label">Propiedad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChangeOwner}
              >
                <MenuItem value={10}>Propio</MenuItem>
                <MenuItem value={20}>Subcontratado</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.inputs}>
              <InputLabel id="demo-simple-select-label">Asignacion</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChangeOwner}
              >
                <MenuItem value={10}>Seaboard</MenuItem>
                <MenuItem value={20}>Crowley</MenuItem>
                <MenuItem value={30}>Maersk</MenuItem>
                <MenuItem value={30}>Hapag Lloyd</MenuItem>
                <MenuItem value={30}>Furgon</MenuItem>
                <MenuItem value={30}>Rastra</MenuItem>
                <MenuItem value={30}>Cisterna</MenuItem>
              </Select>
            </FormControl>
          </MuiPickersUtilsProvider>
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
