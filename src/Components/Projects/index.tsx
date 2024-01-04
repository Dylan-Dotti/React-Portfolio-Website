import React from "react";
import "./projects.scss";
import { Outlet } from "react-router-dom";
import ScrollFadeInSection from "../ScrollFadeInSection";
import HrWithCircle from "../Visual/HrWithCircle";

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <ScrollFadeInSection>
                <div className="content-container">
                    <h1 className="title">Projects</h1>
                    <HrWithCircle widthClass="half-centered" />
                </div>
            </ScrollFadeInSection>
            <Outlet />
        </div>
    );

}

export default Projects;