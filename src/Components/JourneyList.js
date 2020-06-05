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
  BeginDate,
  EndDate,
  Days,
  EClient,
  ETrailer,
  EChasis,
  EGenset,
  EWeight,
  EPrice,
  IClient,
  ITrailer,
  IChasis,
  IGenset,
  IWeight,
  IPrice,
  Others,
  Total
) {
  return {
    No,
    BeginDate,
    EndDate,
    Days,
    EClient,
    ETrailer,
    EChasis,
    EGenset,
    EWeight,
    EPrice,
    IClient,
    ITrailer,
    IChasis,
    IGenset,
    IWeight,
    IPrice,
    Others,
    Total,
  };
}

const rows = [
  createData(
    1,
    "01/06/2020",
    "07/06/2020",
    5,
    "Rocedes",
    "SMLU786545-2",
    "SMLC123456",
    "NA",
    "18,000KG",
    700,
    "PriceSmart",
    "SMLU453245-2",
    "SMLC123456",
    "NA",
    "19,000KG",
    700,
    0,
    1400
  ),
];

export default function JourneyList(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Fecha Inicio</TableCell>
            <TableCell align="right">Fecha Fin</TableCell>
            <TableCell align="right">Dias</TableCell>
            <TableCell align="right">Cliente Export</TableCell>
            <TableCell align="right">Remolque Export</TableCell>
            <TableCell align="right">Chasis Export</TableCell>
            <TableCell align="right">Genset Export</TableCell>
            <TableCell align="right">Peso Export</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cliente Import</TableCell>
            <TableCell align="right">Remolque Import</TableCell>
            <TableCell align="right">Chasis Import</TableCell>
            <TableCell align="right">Genset Import</TableCell>
            <TableCell align="right">Peso Import</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Otros</TableCell>
            <TableCell align="right">Total</TableCell>
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
              <TableCell align="right">{row.BeginDate}</TableCell>
              <TableCell align="right">{row.EndDate}</TableCell>
              <TableCell align="right">{row.Days}</TableCell>
              <TableCell align="right">{row.EClient}</TableCell>
              <TableCell align="right">{row.ETrailer}</TableCell>
              <TableCell align="right">{row.EChasis}</TableCell>
              <TableCell align="right">{row.EGenset}</TableCell>
              <TableCell align="right">{row.EWeight}</TableCell>
              <TableCell align="right">{row.EPrice}</TableCell>
              <TableCell align="right">{row.IClient}</TableCell>
              <TableCell align="right">{row.ITrailer}</TableCell>
              <TableCell align="right">{row.IChasis}</TableCell>
              <TableCell align="right">{row.IGenset}</TableCell>
              <TableCell align="right">{row.IWeight}</TableCell>
              <TableCell align="right">{row.IPrice}</TableCell>
              <TableCell align="right">{row.Others}</TableCell>
              <TableCell align="right">{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
