import React from "react";
import { Outlet } from "react-router-dom";

import ClientNav from "./clientNav";

function clientLayout() {
  return (
    <>
      <ClientNav />
      <Outlet />
    </>
  );
}

export default clientLayout;
