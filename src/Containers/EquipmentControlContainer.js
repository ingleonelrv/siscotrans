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
  rowAction = (plate) => {
    alert(`Row key ${plate}`);
  };
  render() {
    return <EquipmentLayout title={this.state.title}></EquipmentLayout>;
  }
}

export default EquipmentControlContainer;
