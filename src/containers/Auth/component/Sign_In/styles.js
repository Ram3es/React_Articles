import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(),
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  registration: {
    display: "flex",
    flexBasis: "50%",
    justifyContent: "flex-end",
    margin: "5px",
    marginBottom: 0,
  },
  forgot: {
    display: "flex",
    flexBasis: "50%",
    margin: "5px",
    marginBottom: 0,
  },
  link: {
    textDecoration: "none",
  },
  separator: {
    marginTop: "6px",
  },
  icon: {},
}));
