import * as React from 'react';
import ProjectGrid from '../ProjectGrid';
import projectData from '../../../Data/ProjectData';
import ProjectListing from '../ProjectListing';


const ProjectOverview: React.FC = () => {
    return (
        <div className="projects-overview">
            {/* <ProjectGrid projects={projectData}/> */}
            <ProjectListing projects={projectData}/>
        </div>
    );
}

export default ProjectOverview;