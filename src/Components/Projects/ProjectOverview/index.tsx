import * as React from 'react';
import ProjectGrid from '../ProjectGrid';
import projectData from '../../../Data/ProjectData';


const ProjectOverview: React.FC = () => {
    return (
        <div className="projects-overview">
            <ProjectGrid projects={projectData}/>
        </div>
    );
}

export default ProjectOverview;