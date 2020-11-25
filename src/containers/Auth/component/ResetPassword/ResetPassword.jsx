import React, { useEffect, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

const ResetPassword = ({
  match: {
    params: { token },
  },
}) => {
  const [isExpired, setTokenStatus] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token, false);
      if (decoded) {
        setTokenStatus(decoded.exp < new Date().getTime());
      } else {
        dispatch(push(ROUTES_PATH.SIGN_IN));
      }
    } else {
      dispatch(push(ROUTES_PATH.SIGN_IN));
    }
  }, [token]);

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
      <Typography variant="button">Reset Password</Typography>
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
            onClick={() => dispatch(push(ROUTES_PATH.FORGOT))}
            className={classes.submit}
          >
            Go to Forgot Page
          </Button>
        </>
      ) : (
        <Formik
          initialValues={FORMS.RESET.INIT}
          validationSchema={FORMS.RESET.SCHEME}
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
      )}
    </>
  );
};
export default ResetPassword;
