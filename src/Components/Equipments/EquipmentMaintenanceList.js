import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  No,
  Date,
  OilFilters,
  FuelFilters,
  Oil,
  Grease,
  FrontFrictions,
  BackFrictions,
  AirFilter,
  OilRefill,
  Levels,
  FrontWheels,
  BackWheels
) {
  return {
    No,
    Date,
    OilFilters,
    FuelFilters,
    Oil,
    Grease,
    FrontFrictions,
    BackFrictions,
    AirFilter,
    OilRefill,
    Levels,
    FrontWheels,
    BackWheels,
  };
}

const rows = [
  createData(
    1,
    "01/06/2020",
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ),
];

export default function EquipmentMaintenanceList(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No. Viaje</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Filtros Aceite</TableCell>
            <TableCell align="right">Filtros Combustible</TableCell>
            <TableCell align="right">Cambio de Aceite</TableCell>
            <TableCell align="right">Engrase</TableCell>
            <TableCell align="right">Fricciones Delanteras</TableCell>
            <TableCell align="right">Fricciones Traseras</TableCell>
            <TableCell align="right">Filtro de Aire</TableCell>
            <TableCell align="right">Relleno de Aceite</TableCell>
            <TableCell align="right">Niveles</TableCell>
            <TableCell align="right">Llantas Direcionales</TableCell>
            <TableCell align="right">Llantas Traseras</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.No}
              hover={true}
              onClick={() => props.rowAction(row.No)}
            >
              <TableCell component="th" scope="row">
                {row.No}
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">
                <Checkbox
                  // disabled
                  checked={row.OilFilters}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.FuelFilters}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.Oil}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.Grease}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.FrontFrictions}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.BackFrictions}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.AirFilter}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.OilRefill}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.Levels}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.FrontWheels}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={row.BackWheels}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
