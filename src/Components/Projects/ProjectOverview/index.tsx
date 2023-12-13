import * as React from 'react';
import { AppConstantsContext } from '../../../App';
import ProjectGrid from '../ProjectGrid';
import projectData from '../../../Data/ProjectData';
import ScrollFadeInSection from '../../ScrollFadeInSection';

const ProjectOverview: React.FC = () => {
    
    const { fadeInDurationMS } = React.useContext(AppConstantsContext);

    return (
        <div className="projects-overview">
            <ScrollFadeInSection durationMS={fadeInDurationMS}>
                <div className="content-container">
                    <h2 className="title">Projects</h2>
                    <hr className="half-centered"/>
                </div>
            </ScrollFadeInSection>
            <ProjectGrid projects={projectData}/>
        </div>
    );
}

export default ProjectOverview;