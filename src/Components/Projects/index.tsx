import React from "react";
import "./projects.scss";
import { Outlet } from "react-router-dom";

const Projects: React.FC = () => {
    
    return (
        <div id="projects">
            <Outlet />
        </div>
    );

}

export default Projects;