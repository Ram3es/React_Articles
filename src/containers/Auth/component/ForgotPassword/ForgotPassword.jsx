import React from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";

const ForgotPassword = () => {
  const classes = useStyles();

  const handleSubmit = (data) => {
    // To do
  };

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/login.svg"
        alt="forgot"
      />
      <Typography variant="button">Forgot Password</Typography>
      <Formik
        initialValues={FORMS.FORGOT.INIT}
        validationSchema={FORMS.FORGOT.SCHEME}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send Email
              </Button>
              <div className={classes.actions}>
                <Link className={classes.link} to={ROUTES_PATH.SIGN_IN}>
                  <Typography variant="caption" color="primary">
                    Back to Login page
                  </Typography>
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default ForgotPassword;
