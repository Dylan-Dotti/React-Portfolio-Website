import React, { ReactNode } from "react";
import ProjectGrid from "./ProjectGrid";
import projectData from "../../Data/ProjectData";
import "./projects.scss";

export default class Projects extends React.Component {

    render(): ReactNode {
        return (
            <div id="projects">
                <h2 className="title">Projects</h2>
                <ProjectGrid projects={projectData}/>
            </div>
        );
    }
}