import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './main-header.scss';

const MainHeader: React.FC = () => {

    const location = useLocation();

    return (
        <div className="main-header">
            <div className="white-glow-outline-panel header-bar">
                <div className="header-bar-contents">
                    <div className="title-group">
                        <h1 className="name primary-color-text"><strong>Dylan Dotti</strong></h1>
                        <div className="subtitle">Software Developer</div>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
                            <li className={location.pathname.startsWith('/projects') ? 'active' : ''}><Link to="/projects">Projects</Link></li>
                            <li className={location.pathname.startsWith('/employment') ? 'active' : ''}><Link to="/employment">Employment</Link></li>
                            <li className={location.pathname.startsWith('/education') ? 'active' : ''}><Link to="/education">Education</Link></li>
                        </ul>
                        <button className="btn btn-primary contact-button">
                            <strong>Contact</strong>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
