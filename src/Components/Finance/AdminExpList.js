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
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function createRow(no, date, type, description, amount) {
  //   const price = priceRow(qty, unit);
  return { no, date, type, description, amount };
}

function subtotal(items) {
  return items.map(({ amount }) => amount).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow(1, "10/01/2020", "DGI", "Pago de impuestos 2019", 100),
  createRow(1, "15/01/2020", "Alcaldia", "Pago de impuestos 2019", 80),
];

const invoiceSubtotal = subtotal(rows);

export default function AdminExpList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="right">No.</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell align="right">{row.no}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              {/* <TableCell align="right">{ccyFormat(row.price)}</TableCell> */}
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={3} />
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            {/* <TableCell align="right">0</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
