import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch, connect } from "react-redux";
import { CssBaseline, Grid } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";
//import * as actions from "../../../Articles/store/actions";   //  local create actions ( write hands every)
import {
  actions /* A_FetchAllArticlesRequest,*/,
} from "../../../../store/actions"; //  actions done, like actions creaator f()

const Main = ({ children, actions: { A_FetchAllArticlesRequest } }) => {
  //
  console.log("props");

  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(actions.FETCH_ARTICLES.REQUEST()); //with saga
    //A_FetchAllArticlesRequest(); // done through connect + thunk
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={1} className={classes.container}>
          <Grid item> {children} </Grid>
        </Grid>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        //A_FetchAllArticlesRequest,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(Main);
