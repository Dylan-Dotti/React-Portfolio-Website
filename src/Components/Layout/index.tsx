import React, { ReactNode } from "react";
import { Outlet, Link } from "react-router-dom";

export default class Layout extends React.Component {
  render(): ReactNode {
    return (
      <>
        <div className="header">
          <div className="title-group">
            <h1>Dylan Dotti</h1>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/employment">Employment</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </>
    );
  }
}
