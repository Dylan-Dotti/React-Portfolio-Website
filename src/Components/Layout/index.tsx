import * as React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader";
import "./layout.scss";
import ScrollableArea from "../ScrollableArea";

const Layout: React.FC = () => {
    return (
        <div id="page-layout">
            <MainHeader />
            <ScrollableArea>
                <div id="page-content">
                    <Outlet />
                </div>
            </ScrollableArea>
        </div>
    );
}

export default Layout;
