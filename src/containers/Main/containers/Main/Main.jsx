import React from "react";
import "./index.scss";
import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";
/*import classnames from "classnames";*/

export default ({ children }) => {
  return (
    <main className="main-container">
      <Header />
      <div className="content">
        <SideBar />
        {children}
      </div>
    </main>
  );
};
