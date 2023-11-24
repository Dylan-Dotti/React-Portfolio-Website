import * as React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

// A footer component that displays at the bottom of every page.
const Footer: React.FC = () => {
    return (
        <div id="footer">
            <div className="white-glow-outline-panel">
                <div className="footer-content">
                    <div className="footer-content-section">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="mailto:invocation42@yahoo.com">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/dylan-j-dotti/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.github.com/dylan-dotti" target="_blank" rel="noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                    <div className="footer-content-section">
                        <h3>Browse</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/employment">Employment</Link></li>
                            <li><Link to="/education">Education</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;