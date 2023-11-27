import * as React from 'react';
import ProjectGridItem from './ProjectGridItem';
import { IProjectData } from '../../../Interfaces/IProjectData';
import './project-grid.scss';
import ScrollFadeInSection, { ScrollFadeInDirection } from '../../ScrollFadeInSection';
import { AppConstantsContext } from '../../../App';

interface IProjectGridProps {
    projects: IProjectData[]
}

const ProjectGrid: React.FC<IProjectGridProps> = (props) => {
    
    const { projects } = props;

    const { fadeInTransitionDurationMS } = React.useContext(AppConstantsContext);

    return (
        <div className="project-grid">
            {(!projects || projects.length === 0) && <p>No projects to display.</p>}
            {projects && projects.length > 0 && projects.map((project, index) => {
                return (
                    <ScrollFadeInSection
                        key={project.id}
                        direction={index % 2 === 0 ? ScrollFadeInDirection.Left : ScrollFadeInDirection.Right}
                        durationMS={fadeInTransitionDurationMS}
                        shiftValue='30px'
                    >
                        <ProjectGridItem
                            project={project}
                        />
                    </ScrollFadeInSection>
                );
            })}
        </div>
    );

}

export default ProjectGrid;