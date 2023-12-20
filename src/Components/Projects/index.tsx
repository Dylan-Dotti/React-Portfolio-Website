import React from "react";
import "./projects.scss";
import { Outlet } from "react-router-dom";
import ScrollFadeInSection from "../ScrollFadeInSection";
import { AppConstantsContext } from "../../App";
import HrWithCircle from "../Visual/HrWithCircle";

const Projects: React.FC = () => {
    const { fadeInDurationMS } = React.useContext(AppConstantsContext);
    
    return (
        <div id="projects">
            <ScrollFadeInSection durationMS={fadeInDurationMS}>
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