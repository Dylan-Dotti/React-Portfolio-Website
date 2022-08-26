import * as React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader";

export default class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  }
}
