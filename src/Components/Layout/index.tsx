import * as React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader";
import "./layout.scss";
import ScrollableArea from "../ScrollableArea";

const Layout: React.FC = () => {
    return (
        <div id="page-layout">
            <MainHeader />
            <div id="page-content">
                <ScrollableArea>
                    <Outlet />
                </ScrollableArea>
            </div>
        </div>
    );
}

export default Layout;
