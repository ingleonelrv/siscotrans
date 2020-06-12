import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
//Redux
// import { connect } from "react-redux";
// import { loginUser } from "../redux/actions/userActions";

// const useStyles = makeStyles((theme) => ({
//   form: {
//     textAlign: "center",
//   },
//   pageTitle: { margin: "10px auto" },
//   image: {
//     width: 48,
//     margin: "20px auto",
//   },
//   textField: { margin: "10px auto" },
//   button: { marginTop: 20, position: "relative" },
//   customError: { color: "red", fontSize: "0.8rem" },
//   progress: { position: "absolute" },
// })

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    //i think that i could put the props.error as loading but...
    // if (nextProps.UI.errors) {
    //   this.setState({ errors: nextProps.UI.errors });
    // }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    //loginUser comes from mapDispatchToProps
    // this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    //classes comes from withStyles HOC
    const {
      classes,
      // UI: { loading }
    } = this.props;
    const { errors } = this.state;
    console.log(errors.errors);
    return <Typography>Login</Typography>;
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  // loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
// const mapActionsToProps = { loginUser };
export default Login;
// export default connect(
//   mapStateToProps
//   // mapActionsToProps
// )(withStyles(styles)(Login));
