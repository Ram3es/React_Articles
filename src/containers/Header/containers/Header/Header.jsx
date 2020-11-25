import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { privateRouter } from "../../../../router";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ROUTES_PATH } from "../../../../router/constants";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import useStyles from "./styles";
import classnames from "classnames";

const Header = ({ location: { pathname }, open, setOpen }) => {
  const [headerTitle, setTitle] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const activeRoute = privateRouter().find(
      (route) => route.path === pathname || route.path.includes(pathname)
    );

    if (activeRoute) setTitle(activeRoute.label);
  }, [pathname]);

  //return <header className="header">Header: {headerTitle}</header>;
  return (
    <>
      <AppBar
        color="secondary"
        position="absolute"
        className={classnames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar} variant="dense">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            className={classnames(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {headerTitle ? `Header: ${headerTitle}` : ""}
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="default"
            onClick={() => {
              // TO Do
            }}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withRouter(Header);
