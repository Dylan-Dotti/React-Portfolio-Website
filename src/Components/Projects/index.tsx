import React from "react";
import ProjectGrid from "./ProjectGrid";
import projectData from "../../Data/ProjectData";
import "./projects.scss";
import ScrollFadeInSection from "../ScrollFadeInSection";
import { AppConstantsContext } from '../../App';

const Projects: React.FC = () => {

    const { fadeInDurationMS: fadeInTransitionDurationMS } = React.useContext(AppConstantsContext);
    
    return (
        <div id="projects">
            <ScrollFadeInSection durationMS={fadeInTransitionDurationMS}>
                <div className="content-container">
                    <h2 className="title">Projects</h2>
                    <hr className="half-centered"/>
                </div>
            </ScrollFadeInSection>
            <ProjectGrid projects={projectData}/>
        </div>
    );

}

export default Projects;