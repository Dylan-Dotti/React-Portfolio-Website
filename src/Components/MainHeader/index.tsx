import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './main-header.scss';
import eventBus from '../../Events/EventBus';
import ContactModalEvents from '../../Events/ContactModalEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faEnvelope, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';

const MainHeader: React.FC = () => {

    const location = useLocation();

    return (
        <div className="main-header">
            <div className="white-glow-outline-panel header-bar">
                <div className="header-bar-contents">
                    <div className="title-group">
                        <h1 className="title primary-color-text">Dylan Dotti</h1>
                        <div className="subtitle">Software Developer</div>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li className={location.pathname === '/' ? 'active' : ''}>
                                <Link to="/">
                                    <span className="header-link-text">Home</span>
                                    <FontAwesomeIcon icon={faHouse} fixedWidth className="header-link-icon" />
                                </Link>
                            </li>
                            <li className={location.pathname.startsWith('/projects') ? 'active' : ''}>
                                <Link to="/projects">
                                    <span className="header-link-text">Projects</span>
                                    <FontAwesomeIcon icon={faCode} fixedWidth className="header-link-icon" />
                                </Link>
                            </li>
                            <li className={location.pathname.startsWith('/employment') ? 'active' : ''}>
                                <Link to="/employment">
                                    <span className="header-link-text">Employment</span>
                                    <FontAwesomeIcon icon={faBriefcase} fixedWidth className="header-link-icon" />
                                </Link>
                            </li>
                            <li className={location.pathname.startsWith('/education') ? 'active' : ''}>
                                <Link to="/education">
                                    <span className="header-link-text">Education</span>
                                    <FontAwesomeIcon icon={faGraduationCap} fixedWidth className="header-link-icon" />
                                </Link>
                            </li>
                        </ul>
                        <button className="btn btn-primary contact-button" onClick={() => eventBus.emit(ContactModalEvents.showModal)}>
                            <h5>
                                <span className="header-link-text">Contact</span>
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth className="header-link-icon" />
                            </h5>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
