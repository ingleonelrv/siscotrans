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

function createData(equipment, journey, expenses) {
  return {
    equipment,
    journey,
    expenses,
  };
}

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(spent) {
  console.log(spent);
  return spent.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createData("Roberto Blanco", "M262082", [
    {
      date: "2020-01-05",
      type: "Mecanico",
      placePerson: "Payin",
      description: "Cambio de aceite",
      price: 6,
    },
    {
      date: "2020-01-02",
      type: "Repuesto",
      placePerson: "RESA",
      description: "Filtros",
      price: 40,
    },
  ]),
  createData("Luis Carlos Rugama", "M144229", [
    {
      date: "2020-01-05",
      type: "Mecanico",
      placePerson: "Payin",
      description: "Cambio de fricciones",
      price: 800,
    },
    {
      date: "2020-01-02",
      type: "Repuesto",
      placePerson: "RESA",
      description: "Rash",
      price: 800,
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
          {row.equipment}
        </TableCell>
        <TableCell>{row.journey}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Lista de Gastos
              </Typography>
              {/* SUB TABLE */}
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell align="right">Tipo</TableCell>
                    <TableCell align="right">Lugar/Persona</TableCell>
                    <TableCell align="right">Descripcion</TableCell>
                    <TableCell align="right">Monto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.expenses.map((spent) => (
                    <TableRow
                      hover={true}
                      onClick={() => alert("Editar gasto de viaje")}
                      key={spent.date}
                    >
                      <TableCell>{spent.date}</TableCell>
                      <TableCell align="right">{spent.type}</TableCell>
                      <TableCell align="right">{spent.placePerson}</TableCell>
                      <TableCell align="right">{spent.description}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(spent.price)}
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">
                      {ccyFormat(subtotal(row.expenses))}
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
export default function DriverExpList() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Conductor</TableCell>
            <TableCell>Equipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.journey} row={row} />
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
