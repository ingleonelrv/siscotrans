import React, { Component } from "react";
//component
import TableLayout from "../Components/TableLayout";
import EquipmentList from "../Components/EquipmentList";

export class EquipmentListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lista de Equipos",
    };
  }
  buttonAddAction = () => {
    alert("Button add");
  };
  rowAction = (plate) => {
    alert(`Row key ${plate}`);
  };
  render() {
    return (
      <TableLayout
        title={this.state.title}
        buttonAddAction={this.buttonAddAction}
      >
        <EquipmentList rowAction={this.rowAction} />
      </TableLayout>
    );
  }
}

export default EquipmentListContainer;
