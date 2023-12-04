import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../MainHeader";
import "./layout.scss";
import ScrollableArea from "../ScrollableArea";
import Footer from "../Footer";

const Layout: React.FC = () => {
    const { pathname } = useLocation();
    const scrollContentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        scrollContentRef.current?.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div id="page-layout">
            <MainHeader />
            <ScrollableArea contentRef={scrollContentRef}>
                <div id="page-content">
                    <Outlet />
                </div>
                <Footer />
            </ScrollableArea>
        </div>
    );
}

export default Layout;
