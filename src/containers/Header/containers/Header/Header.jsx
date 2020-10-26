import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { privateRouter } from "../../../../router";
import "./style.scss";

const Header = (props) => {
  const [headerTittle, setTitle] = useState("");
  console.log(props);

  useEffect(() => {
    const {
      location: { pathname },
    } = props;
    const activeRoute = privateRouter().find((route) => route.path === pathname || route.path.includes(pathname));
    if (activeRoute) setTitle(activeRoute.label);
  }, [props]);

  return <header className="header">Header : {headerTittle} </header>;
};

export default withRouter(Header);
