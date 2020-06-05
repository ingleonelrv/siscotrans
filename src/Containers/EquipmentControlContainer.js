import React, { Component } from "react";
//component
import EquipmentLayout from "../Components/EquipmentLayout";
import JourneyData from "../Components/JourneyData";
import EquipmentExpenseData from "../Components/EquipmentExpenseData";
import EquipmentMaintenanceData from "../Components/EquipmentMaintenanceData";

export class EquipmentControlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Equipo",
      openJourney: false,
      openExpense: false,
      openMaintenance: false,
    };
  }
  handleCloseJourney = () => {
    this.setState({ openJourney: false });
  };
  handleCloseExpense = () => {
    this.setState({ openExpense: false });
  };
  handleCloseMaintenance = () => {
    this.setState({ openMaintenance: false });
  };
  buttonAddActionJourney = () => {
    this.setState({ openJourney: true });
  };
  buttonAddActionExpense = () => {
    this.setState({ openExpense: true });
  };
  buttonAddMaintenance = () => {
    this.setState({ openMaintenance: true });
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
      </div>
    );
  }
}

export default EquipmentControlContainer;
