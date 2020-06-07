import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(No, Name, Id, Passport, NiPhone, Status) {
  return {
    No,
    Name,
    Id,
    Passport,
    NiPhone,
    Status,
  };
}

const rows = [
  createData(
    1,
    "Juan Jose Moncada",
    "265-000000-0000R",
    "C0234568",
    "+50588990066",
    "Activo"
  ),
  createData(
    2,
    "Roberto Jose Blanco",
    "165-000000-0000R",
    "C0234568",
    "+50588999516",
    "Activo"
  ),
];

export default function DriverList(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Identificacion</TableCell>
            <TableCell align="right">Pasaporte</TableCell>
            <TableCell align="right">Celular</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              hover={true}
              onClick={() => props.rowAction(row.Id)}
            >
              <TableCell component="th" scope="row">
                {row.No}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Id}</TableCell>
              <TableCell align="right">{row.Passport}</TableCell>
              <TableCell align="right">{row.NiPhone}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
