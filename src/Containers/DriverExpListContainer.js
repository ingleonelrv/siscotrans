import React, { Component } from "react";
//component
import TableLayout from "../Components/TableLayout";
import DriverExpList from "../Components/Finance/DriverExpList";
import DriverExpData from "../Components/Finance/DriverExpData";

export class DriverExpListContainer extends Component {
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
        <DriverExpList rowAction={this.rowAction} />
        <DriverExpData
          handleClose={this.handleCloseNewAdminExp}
          open={this.state.openNewAdminExp}
        />
      </TableLayout>
    );
  }
}

export default DriverExpListContainer;
