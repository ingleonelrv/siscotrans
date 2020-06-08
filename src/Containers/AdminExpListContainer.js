import React, { Component } from "react";
//component
import TableLayout from "../Components/TableLayout";
import AdminExpList from "../Components/Finance/AdminExpList";
import AdminExpData from "../Components/Finance/AdminExpData";

export class AdminExpListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gastos de Administracion",
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
        <AdminExpList rowAction={this.rowAction} />
        <AdminExpData
          handleClose={this.handleCloseNewAdminExp}
          open={this.state.openNewAdminExp}
        />
      </TableLayout>
    );
  }
}

export default AdminExpListContainer;
