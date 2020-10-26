import React from "react";
import "./index.scss";
import { privateRouter } from "../../../../router";
import { SideBarItem } from "../../components";

export default () => {
  return (
    <aside className="sidebar">
      {privateRouter().map((route) => (
        <SideBarItem key={route.path} route={route} />
      ))}
    </aside>
  );
};
