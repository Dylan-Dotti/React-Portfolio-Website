import * as React from 'react';
import { Link } from 'react-router-dom';
import FixedSizeImg from '../FixedSizeImg';
import './main-header.scss';

export default class MainHeader extends React.Component {

    public render(): React.ReactNode {
        return (
            <>
                <div className="main-header">
                    <FixedSizeImg src="Img\Deviant\deviant_action.PNG" imgClassName="header-img" height="400px"/>
                    <div className="header-bar">
                        <div className="title-group">
                            <h1 className="name"><strong>Dylan Dotti</strong></h1>
                            <span className="subtitle">Software Developer</span>
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
            </>
        );
    }
}