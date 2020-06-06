import React, { Component } from "react";
//component
import EquipmentLayout from "../Components/Equipments/EquipmentLayout";
import JourneyData from "../Components/Equipments/JourneyData";
import EquipmentExpenseData from "../Components/Equipments/EquipmentExpenseData";
import EquipmentMaintenanceData from "../Components/Equipments/EquipmentMaintenanceData";
import FuelExpensesData from "../Components/Equipments/FuelExpensesData";

export class EquipmentControlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Equipo",
      openJourney: false,
      openExpense: false,
      openMaintenance: false,
      openFuelExp: false,
    };
  }
  //CLOSE THE DIALOG WINDOWS
  handleCloseJourney = () => {
    this.setState({ openJourney: false });
  };
  handleCloseExpense = () => {
    this.setState({ openExpense: false });
  };
  handleCloseMaintenance = () => {
    this.setState({ openMaintenance: false });
  };
  handleCloseFuelExp = () => {
    this.setState({ openFuelExp: false });
  };
  //OPEN THE WINDOWS FOR ADDING DATA
  buttonAddActionJourney = () => {
    this.setState({ openJourney: true });
  };
  buttonAddActionExpense = () => {
    this.setState({ openExpense: true });
  };
  buttonAddMaintenance = () => {
    this.setState({ openMaintenance: true });
  };
  buttonAddFuelExp = () => {
    this.setState({ openFuelExp: true });
  };
  journeyRow = (journey) => {
    this.setState({ openJourney: true });
  };
  render() {
    return (
      <div>
        <EquipmentLayout
          title={this.state.title}
          journeyRow={this.journeyRow}
          buttonAddJourney={this.buttonAddActionJourney}
          buttonAddExpense={this.buttonAddActionExpense}
          buttonAddMaintenance={this.buttonAddMaintenance}
          buttonAddFuel={this.buttonAddFuelExp}
        />
        <JourneyData
          handleClose={this.handleCloseJourney}
          open={this.state.openJourney}
        />
        <EquipmentExpenseData
          handleClose={this.handleCloseExpense}
          open={this.state.openExpense}
        />
        <EquipmentMaintenanceData
          handleClose={this.handleCloseMaintenance}
          open={this.state.openMaintenance}
        />
        <FuelExpensesData
          handleClose={this.handleCloseFuelExp}
          open={this.state.openFuelExp}
        />
      </div>
    );
  }
}

export default EquipmentControlContainer;
