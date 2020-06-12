import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  form: {
    textAlign: "center",
  },
  pageTitle: { margin: "10px auto" },
  image: {
    width: 48,
    margin: "20px auto",
  },
  textField: { margin: "10px auto" },
  button: { marginTop: 20, position: "relative" },
  customError: { color: "red", fontSize: "0.8rem" },
  progress: { position: "absolute" },
}));

export default function LoginUI(props) {
  const classes = useStyles();
  const { errors } = { email: "no", password: "no", general: "no" };
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={`./monkey.png`} alt="monkey" className={classes.image} />
        <Typography variant={"h2"} className={classes.pageTitle}>
          Ingreso
        </Typography>
        {/* <form noValidate onSubmit={this.handleSubmit}> */}
        <form noValidate>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Usuario"
            className={classes.textField}
            // helperText={errors.email}
            // error={errors.email ? true : false}
            // value={this.state.email}
            // onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Contrasenia"
            className={classes.textField}
            // helperText={errors.password}
            // error={errors.password ? true : false}
            // value={this.state.password}
            // onChange={this.handleChange}
            fullWidth
          />
          {/* {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )} */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            // disabled={loading}
          >
            Entrar
            {/* {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )} */}
          </Button>
          <br />
          <small>
            No tienes cuenta aun? Registrate <Link to="/signup">aqui</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}
