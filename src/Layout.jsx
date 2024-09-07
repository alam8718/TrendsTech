import React from "react";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div className=" ov">
      <Outlet />
      
    </div>
  );
}

export default Layout;
