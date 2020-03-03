import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
//redux
import { connect } from "react-redux";
// import { signupUser } from "../redux/actions/userActions";

const styles = {
  form: {
    textAlign: "center"
  },
  pageTitle: { margin: "10px auto" },
  image: {
    width: 48,
    margin: "20px auto"
  },
  textField: { margin: "10px auto" },
  button: { marginTop: 20, position: "relative" },
  customError: { color: "red", fontSize: "0.8rem" },
  progress: { position: "absolute" }
};
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    //i think that i could put the props.error as loading but...
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };
    // this.props.signupUser(newUserData, this.props.history);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    //classes comes from withStyles HOC
    const {
      classes
      // UI: { loading }
    } = this.props;
    const { errors } = this.state;
    console.log(errors.errors);
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={`./monkey.png`} alt="monkey" className={classes.image} />
          <Typography variant={"h2"} className={classes.pageTitle}>
            Registrar Transporte
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="transport"
              name="transport"
              type="transport"
              label="Nombre del Transporte"
              className={classes.textField}
              helperText={errors.transport}
              error={errors.transport ? true : false}
              value={this.state.transport}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="ruc"
              name="ruc"
              type="ruc"
              label="Numero RUC"
              className={classes.textField}
              helperText={errors.ruc}
              error={errors.ruc ? true : false}
              value={this.state.ruc}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="phone"
              name="phone"
              type="phone"
              label="Telefono"
              className={classes.textField}
              helperText={errors.phone}
              error={errors.phone ? true : false}
              value={this.state.phone}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="address"
              name="address"
              type="address"
              label="Direccion"
              className={classes.textField}
              helperText={errors.address}
              error={errors.address ? true : false}
              value={this.state.address}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Correo"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              helperText={errors.password}
              error={errors.password ? true : false}
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirmar Contraseña"
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              className={classes.textField}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              // disabled={loading}
            >
              Registrar
              {/* {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )} */}
            </Button>
            <br />
            <small>
              Ya tienes cuenta? Entra <Link to="/login">aqui</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
  // signupUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});
// const mapActionsToProps = { signupUser };
export default connect(
  mapStateToProps
  // mapActionsToProps
)(withStyles(styles)(Signup));
