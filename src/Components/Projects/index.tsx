import React from "react";
import "./projects.scss";
import { Outlet } from "react-router-dom";
import FadeInSection from "../FadeInSection";
import HrWithCircle from "../Visual/HrWithCircle";

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <FadeInSection>
                <div className="content-container">
                    <h1 className="title">Projects</h1>
                    <HrWithCircle widthClass="half-centered" />
                </div>
            </FadeInSection>
            <Outlet />
        </div>
    );

}

export default Projects;