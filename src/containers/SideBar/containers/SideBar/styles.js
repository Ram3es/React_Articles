import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6),
    },
  },
  toolbarIcon: {
    padding: "0 8px",
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "48px !important",
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: "6px",
  },
  nav: {
    paddingLeft: 10,
    cursor: "pointer",
  },
  childNav: {
    paddingLeft: theme.spacing(3),
    backgroundColor: "rgba(238, 238, 238, 0.5)",
  },
  nestedListSubheader: {
    padding: 0,
  },
}));
