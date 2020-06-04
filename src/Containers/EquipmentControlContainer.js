import React, { Component } from "react";
//component
import EquipmentLayout from "../Components/EquipmentLayout";

export class EquipmentControlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Equipo",
    };
  }
  buttonAddAction = () => {
    alert("Button add");
  };
  journeyRow = (journey) => {
    alert(`Journey number ${journey}`);
  };
  render() {
    return (
      <EquipmentLayout
        title={this.state.title}
        journeyRow={this.journeyRow}
        buttonAddAction={this.buttonAddAction}
      ></EquipmentLayout>
    );
  }
}

export default EquipmentControlContainer;
