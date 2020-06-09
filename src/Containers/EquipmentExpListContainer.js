import React, { Component } from "react";
//component
import TableLayout from "../Components/TableLayout";
import EquipmentExpList from "../Components/Finance/EquipmentExpList";
// import EquipmentExpData from "../Components/Finance/EquipmentExpData";
import EquipmentExpenseData from "../Components/Equipments/EquipmentExpenseData";

export class EquipmentExpListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gastos de Equipos",
      openNewAdminExp: false,
    };
  }
  buttonAddAction = () => {
    this.setState({ openNewAdminExp: true });
  };
  handleCloseNewAdminExp = () => {
    this.setState({ openNewAdminExp: false });
  };
  rowAction = (id) => {
    alert(`Row key ${id}`);
  };
  render() {
    return (
      <TableLayout
        title={this.state.title}
        buttonAddAction={this.buttonAddAction}
      >
        <EquipmentExpList rowAction={this.rowAction} />
        <EquipmentExpenseData
          handleClose={this.handleCloseNewAdminExp}
          open={this.state.openNewAdminExp}
        />
      </TableLayout>
    );
  }
}

export default EquipmentExpListContainer;
