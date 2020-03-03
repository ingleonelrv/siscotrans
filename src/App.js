import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
// import { SET_AUTHENTICATED } from "./redux/types";
// import { logoutUser, getUserData } from "./redux/actions/userActions";

//Components
// import Navbar from "./components/layout/Navbar";
//Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
