import React, { useState, useEffect } from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";

const AccountActivation = ({
  match: {
    params: { token },
  },
}) => {
  const [isExpired, setTokenStatus] = useState(false);
  const dispatch = useDispatch();
  //const user = useSelector(getUser()) TODO
  const user = null;
  const classes = useStyles();

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token, false);
      if (decoded) {
        setTokenStatus(decoded.exp < new Date().getTime());
        fetchUserBeforeActivation(decoded.data);
      } else {
        dispatch(push(ROUTES_PATH.SIGN_IN));
      }
    } else {
      dispatch(push(ROUTES_PATH.SIGN_IN));
    }
  }, [token]);

  const fetchUserBeforeActivation = (id) => {
    //TODO
  };

  const handleSubmit = (data) => {
    // To do
  };

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/registration.svg"
        alt="Sign Up"
      />
      <Typography variant="button">Account Activation</Typography>
      {isExpired ? (
        <>
          <Typography variant="body1" display="block" align="center">
            Link for change password is expired
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => dispatch(push(ROUTES_PATH.SIGN_UP))}
            className={classes.submit}
          >
            Go to Registration Page
          </Button>
        </>
      ) : null}
      {user && user.active ? (
        <>
          <Typography variant="body1" display="block" align="center">
            User has already activated
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => dispatch(push(ROUTES_PATH.SIGN_IN))}
            className={classes.submit}
          >
            Go to Login Page
          </Button>
        </>
      ) : null}
      {user && !user.active ? (
        <>
          <Formik
            initialValues={FORMS.ACTIVATION.INIT}
            validationSchema={FORMS.ACTIVATION.SCHEME}
            onSubmit={handleSubmit}
          >
            {({
              touched,
              errors,
              values: { first_name, last_name },
              handleChange,
            }) => {
              return (
                <Form className={classes.form}>
                  <FormControl margin="normal" required fullWidth>
                    <TextField
                      id="first_name"
                      name="first_name"
                      label="First Name"
                      variant="outlined"
                      helperText={touched.first_name ? errors.first_name : ""}
                      error={touched.first_name && Boolean(errors.first_name)}
                      values={first_name}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <TextField
                      id="last_name"
                      name="last_name"
                      label="Last Name"
                      variant="outlined"
                      helperText={touched.last_name ? errors.last_name : ""}
                      error={touched.last_name && Boolean(errors.last_name)}
                      values={last_name}
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
                    Activation
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
      ) : null}
    </>
  );
};
export default AccountActivation;
