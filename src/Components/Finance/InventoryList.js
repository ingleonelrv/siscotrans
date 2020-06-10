import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: 700,
  },
});

function createData(date, type, name, total, records) {
  return {
    date,
    type,
    name,
    total,
    records,
  };
}

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(stock) {
  return stock.map(({ stockData }) => stockData).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createData("2020-01-04", "Nuevo", "Llantas 11R22.5", 6, [
    {
      newDate: "2020-01-05",
      newType: "Adicion",
      observation: "NA",
      stockData: 8,
    },
    {
      newDate: "2020-01-08",
      newType: "Sustraer",
      observation: "Usada en M262082",
      stockData: 2,
    },
  ]),
  createData("2020-01-04", "Usado", "Alternador", 1, [
    {
      newDate: "2020-01-08",
      newType: "Sustraer",
      observation: "NA",
      stockData: 2,
    },
  ]),
];
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Ingresos y retiros de inventario
              </Typography>
              {/* SUB TABLE */}
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell align="right">Tipo</TableCell>
                    <TableCell align="right">Observacion</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.records.map((record) => (
                    <TableRow
                      hover={true}
                      onClick={() => alert("Editar gasto de viaje")}
                      key={record.newDate}
                    >
                      <TableCell>{record.newDate}</TableCell>
                      <TableCell align="right">{record.newType}</TableCell>
                      <TableCell align="right">{record.observation}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(record.stockData)}
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell rowSpan={2} />
                    <TableCell rowSpan={2} />
                    <TableCell colSpan={1}>Total</TableCell>
                    <TableCell align="right">
                      {ccyFormat(subtotal(row.records))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function EquipmentExpenses() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Fecha</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    expenses: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
