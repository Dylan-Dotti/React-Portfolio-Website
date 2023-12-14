import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../MainHeader";
import "./layout.scss";
import ScrollableArea from "../ScrollableArea";
import Footer from "../Footer";
import ContactModal from "../ContactModal";
import eventBus from "../../Events/EventBus";
import ContactModalEvents from "../../Events/ContactModalEvents";

const Layout: React.FC = () => {
    const { pathname } = useLocation();
    const scrollContentRef = React.useRef<HTMLDivElement>(null);
    const [showContactModal, setShowContactModal] = React.useState(false);
    
    React.useEffect(() => {
        const onShowContactModal = () => setShowContactModal(true);

        eventBus.on(ContactModalEvents.showModal, onShowContactModal);

        return () => {
            eventBus.off(ContactModalEvents.showModal, onShowContactModal);
        };
    }, []);

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
            <ContactModal
                isOpen={showContactModal}
                toggle={() => setShowContactModal(!showContactModal)}
            />
        </div>
    );
}

export default Layout;
