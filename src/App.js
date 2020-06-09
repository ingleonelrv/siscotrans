import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { makeStyles } from "@material-ui/core/styles";
import jwtDecode from "jwt-decode";

//Redux
import { Provider } from "react-redux";
// import store from "./Redux/store";
// import { SET_AUTHENTICATED } from "./redux/types";
// import { logoutUser, getUserData } from "./redux/actions/userActions";

//Pages
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Main from "./Pages/Menu";
import Information from "./Components/Information";
import EquipmentListContainer from "./Containers/EquipmentListContainer"; //change to container
import EquipmentControlContainer from "./Containers/EquipmentControlContainer"; //change to container
import DriverListContainer from "./Containers/DriverListContainer"; //change to container
import AdminExpListContainer from "./Containers/AdminExpListContainer"; //change to container
import EquipmentExpListContainer from "./Containers/EquipmentExpListContainer"; //change to container

import AuthRoute from "./Util/AuthRoute";
import themeFile from "./Util/theme";
import axios from "axios";

//in developer mode i used proxy in package.json, for production i have to use this
axios.defaults.baseURL =
  "https://us-central1-socialni-58ef4.cloudfunctions.net/api";

// const token = localStorage.FBIdToken;
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     store.dispatch(logoutUser());
//     window.location.href = "/login";
//   } else {
//     store.dispatch({ type: SET_AUTHENTICATED });
//     axios.defaults.headers.common["Authorization"] = token;
//     store.dispatch(getUserData());
//   }
// }

const theme = createMuiTheme(themeFile);
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Main />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Information} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/information" component={Information} />
            <Route
              exact
              path="/equipment-list"
              component={EquipmentListContainer}
            />
            <Route
              exact
              path="/equipment-list/equipment"
              component={EquipmentControlContainer}
            />
            <Route exact path="/driver-list" component={DriverListContainer} />
            <Route
              exact
              path="/adminExp-list"
              component={AdminExpListContainer}
            />
            <Route
              exact
              path="/equipmentExp-list"
              component={EquipmentExpListContainer}
            />
          </Switch>
        </main>
      </BrowserRouter>
      {/* </Provider> */}
    </MuiThemeProvider>
  );
}

export default App;
