import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../MainHeader";
import "./layout.scss";
import Footer from "../Footer";
import ContactModal from "../ContactModal";
import eventBus from "../../Events/EventBus";
import ContactModalEvents from "../../Events/ContactModalEvents";

const Layout: React.FC = () => {
    const { pathname } = useLocation();
    const [showContactModal, setShowContactModal] = React.useState(false);
    
    React.useEffect(() => {
        const onShowContactModal = () => setShowContactModal(true);

        eventBus.on(ContactModalEvents.showModal, onShowContactModal);

        return () => {
            eventBus.off(ContactModalEvents.showModal, onShowContactModal);
        };
    }, []);

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'auto',
        });
    }, [pathname]);

    return (
        <>
            <div id="page-layout">
                <MainHeader />
                <div id="page-content">
                    <Outlet />
                </div>
                <Footer />
            </div>
            <ContactModal
                isOpen={showContactModal}
                toggle={() => setShowContactModal(!showContactModal)}
            />
        </>
    );
}

export default Layout;
