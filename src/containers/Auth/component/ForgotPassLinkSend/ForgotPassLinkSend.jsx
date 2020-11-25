import React from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { ROUTES_PATH } from "../../../../router/constants";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

const ForgotPassLinkSend = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <img className={classes.icon} src="/assets/icons/login.svg" />
      <Typography variant="button">Password change request</Typography>
      <Typography variant="body1" display="block" align="center">
        We sent an email to your mail with instructions for activating account
      </Typography>
      <Typography variant="subtitle2" display="block" align="center">
        Link will be active for 1 hour
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => dispatch(push(ROUTES_PATH.SIGN_IN))}
        className={classes.submit}
      >
        Go to Forgot Page
      </Button>
    </>
  );
};
export default ForgotPassLinkSend;
