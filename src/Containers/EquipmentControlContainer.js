import React, { Component } from "react";
//component
import EquipmentLayout from "../Components/EquipmentLayout";
import JourneyData from "../Components/JourneyData";

export class EquipmentControlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Equipo",
      open: false,
    };
  }

  handleOpenDialog = () => {
    this.setState({ open: true });
  };

  handleCloseDialog = () => {
    this.setState({ open: false });
  };
  buttonAddAction = () => {
    this.setState({ open: true });
  };
  journeyRow = (journey) => {
    this.setState({ open: true });
  };
  render() {
    return (
      <div>
        <EquipmentLayout
          title={this.state.title}
          journeyRow={this.journeyRow}
          buttonAddAction={this.buttonAddAction}
        />
        <JourneyData
          handleClose={this.handleCloseDialog}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default EquipmentControlContainer;
