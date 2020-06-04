import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//react router
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  No,
  circulation,
  plate,
  year,
  code,
  secureDate,
  inspectionDate,
  gasDate,
  filmingYear
) {
  return {
    No,
    circulation,
    plate,
    year,
    code,
    secureDate,
    inspectionDate,
    gasDate,
    filmingYear,
  };
}

const rows = [
  createData(
    1,
    "B234566",
    "M262082",
    1997,
    "NI03018",
    "12/06/2020",
    "12/06/2020",
    "12/06/2020",
    2020
  ),
  createData(
    2,
    "B344566",
    "M144229",
    1996,
    "NI03018",
    "12/06/2020",
    "12/06/2020",
    "12/06/2020",
    2020
  ),
];

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Circulacion</TableCell>
            <TableCell align="right">Placa</TableCell>
            <TableCell align="right">Anio</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">Seguro RC</TableCell>
            <TableCell align="right">Inspeccion Mecanica</TableCell>
            <TableCell align="right">Emision de Gases</TableCell>
            <TableCell align="right">Rodamiento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.plate}
              hover={true}
              onClick={() => props.rowAction(row.plate)}
              component={Link}
              to="/equipment-list/equipment"
            >
              <TableCell component="th" scope="row">
                {row.No}
              </TableCell>
              <TableCell align="right">{row.circulation}</TableCell>
              <TableCell align="right">{row.plate}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.secureDate}</TableCell>
              <TableCell align="right">{row.inspectionDate}</TableCell>
              <TableCell align="right">{row.gasDate}</TableCell>
              <TableCell align="right">{row.filmingYear}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
