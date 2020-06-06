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

function createData(
  No,
  InitialFuel,
  LeftoverFuel,
  RealExpense,
  EstimatedExpense,
  DifferenceExp,
  Observations
) {
  return {
    No,
    InitialFuel,
    LeftoverFuel,
    RealExpense,
    EstimatedExpense,
    DifferenceExp,
    Observations,
  };
}

const rows = [createData(1, 230, 40, 190, 195, 5, "Ninguna")];

export default function FuelExpensesList(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No. Viaje</TableCell>
            <TableCell align="right">Combustible Inicial</TableCell>
            <TableCell align="right">Combustible Trae</TableCell>
            <TableCell align="right">Gasto Real</TableCell>
            <TableCell align="right">Gasto Estimado</TableCell>
            <TableCell align="right">Diferencia</TableCell>
            <TableCell align="right">Observaciones</TableCell>
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
              <TableCell align="right">{row.InitialFuel}</TableCell>
              <TableCell align="right">{row.LeftoverFuel}</TableCell>
              <TableCell align="right">{row.RealExpense}</TableCell>
              <TableCell align="right">{row.EstimatedExpense}</TableCell>
              <TableCell align="right">{row.DifferenceExp}</TableCell>
              <TableCell align="right">{row.Observations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
