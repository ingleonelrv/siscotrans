import React, { Component } from "react";
//component
import EquipmentLayout from "../Components/EquipmentLayout";
import JourneyData from "../Components/JourneyData";
import EquipmentExpenseData from "../Components/EquipmentExpenseData";

export class EquipmentControlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Equipo",
      openJourney: false,
      openExpense: false,
    };
  }

  handleOpenJourney = () => {
    this.setState({ openJourney: true });
  };

  handleCloseJourney = () => {
    this.setState({ openJourney: false });
  };
  handleCloseExpense = () => {
    this.setState({ openExpense: false });
  };
  buttonAddActionJourney = () => {
    this.setState({ openJourney: true });
  };
  buttonAddActionExpense = () => {
    this.setState({ openExpense: true });
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
        />
        <JourneyData
          handleClose={this.handleCloseJourney}
          open={this.state.openJourney}
        />
        <EquipmentExpenseData
          handleClose={this.handleCloseExpense}
          open={this.state.openExpense}
        />
      </div>
    );
  }
}

export default EquipmentControlContainer;
