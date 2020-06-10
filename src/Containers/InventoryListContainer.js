import React, { Component } from "react";
//component
import TableLayout from "../Components/TableLayout";
import InventoryList from "../Components/Finance/InventoryList";
import InventoryData from "../Components/Finance/InventoryData";

export class InventoryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Inventario de Repuestos",
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
        <InventoryList rowAction={this.rowAction} />
        <InventoryData
          handleClose={this.handleCloseNewAdminExp}
          open={this.state.openNewAdminExp}
        />
      </TableLayout>
    );
  }
}

export default InventoryListContainer;
