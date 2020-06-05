import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//components
import EquipmentData from "../Components/EquipmentData";
import TableLayout from "../Components/TableLayout";
import JourneyList from "../Components/JourneyList";
import EquipmentExpenses from "../Components/EquipmentExpenses";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  title: {
    textAlign: "center",
  },
}));

export default function EquipmentLayout(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography className={classes.title} variant="h5" gutterBottom>
        {props.title}
      </Typography>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Datos" {...a11yProps(0)} />
          <Tab label="Viajes" {...a11yProps(1)} />
          <Tab label="Gastos de Mantenimiento" {...a11yProps(2)} />
          <Tab label="Mantenimientos comunes" {...a11yProps(3)} />
          <Tab label="Gasto de Combustible" {...a11yProps(4)} />
          <Tab label="Herramientas" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EquipmentData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableLayout buttonAddAction={props.buttonAddJourney}>
          <JourneyList rowAction={props.journeyRow} />
        </TableLayout>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableLayout buttonAddAction={props.buttonAddExpense}>
          <EquipmentExpenses />
        </TableLayout>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Mantenimientos comunes
      </TabPanel>
      <TabPanel value={value} index={4}>
        Gasto de Combustible
      </TabPanel>
      <TabPanel value={value} index={5}>
        Herramientas
      </TabPanel>
    </Container>
  );
}
