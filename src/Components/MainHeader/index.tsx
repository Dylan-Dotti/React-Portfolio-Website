import * as React from 'react';
import { Link } from 'react-router-dom';
import './main-header.scss';

export default class MainHeader extends React.Component {

    public render(): React.ReactNode {
        return (
            <div className="main-header">
                <div className="title-group mx-3">
                    <h1>Dylan Dotti</h1>
                    Software Developer
                </div>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/employment">Employment</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}