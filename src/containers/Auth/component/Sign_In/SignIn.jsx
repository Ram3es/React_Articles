import React from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";

const SignIn = () => {
  const classes = useStyles();

  const handleSubmit = (data) => {
    // To do
  };

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/login.svg"
        alt="Sign In"
      />
      <Typography variant="button">Login</Typography>
      <Formik
        initialValues={FORMS.SIGN_IN.INIT}
        validationSchema={FORMS.SIGN_IN.SCHEME}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values: { email, password }, handleChange }) => {
          return (
            <Form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  helperText={touched.email ? errors.email : ""}
                  error={touched.email && Boolean(errors.email)}
                  values={email}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  helperText={touched.password ? errors.password : ""}
                  error={touched.password && Boolean(errors.password)}
                  values={password}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
              <div className={classes.actions}>
                <div className={classes.registration}>
                  <Link className={classes.link} to={ROUTES_PATH.SIGN_UP}>
                    <Typography variant="caption" color="primary">
                      Registration
                    </Typography>
                  </Link>
                </div>
                <div className={classes.separator}></div>
                <div className={classes.forgot}>
                  <Link className={classes.link} to={ROUTES_PATH.FORGOT}>
                    <Typography variant="caption" color="primary">
                      Forgot Password
                    </Typography>
                  </Link>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default SignIn;
