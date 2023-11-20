import * as React from 'react';
import { Link } from 'react-router-dom';
import FixedSizeImg from '../FixedSizeImg';
import './main-header.scss';

export default class MainHeader extends React.Component {

    public render(): React.ReactNode {
        return (
            <>
                <div className="main-header">
                    {/* <img src="Img\Deviant\deviant_action_header_2.PNG" alt="deviant_header" className="header-img"/> */}
                    <div className="white-glow-outline-panel header-bar">
                        <div className="header-bar-contents">
                            <div className="title-group">
                                <h1 className="name"><strong>Dylan Dotti</strong></h1>
                                <div className="subtitle">Software Developer</div>
                            </div>
                            <nav>
                                <ul className="nav-list">
                                    <li><Link to="/">About</Link></li>
                                    <li><Link to="/education">Education</Link></li>
                                    <li><Link to="/employment">Employment</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}