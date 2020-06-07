import React, { Component } from "react";
//component
import TableLayout from "../Components/TableLayout";
import DriverList from "../Components/Drivers/DriverList";
import DriverData from "../Components/Drivers/DriverData";

export class DriverListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lista de Pilotos",
      openNewDriver: false,
    };
  }
  buttonAddAction = () => {
    this.setState({ openNewDriver: true });
  };
  handleCloseNewDriver = () => {
    this.setState({ openNewDriver: false });
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
        <DriverList rowAction={this.rowAction} />
        <DriverData
          handleClose={this.handleCloseNewDriver}
          open={this.state.openNewDriver}
        />
      </TableLayout>
    );
  }
}

export default DriverListContainer;
