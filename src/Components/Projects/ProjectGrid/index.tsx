import * as React from 'react';
import ProjectGridItem from './ProjectGridItem';
import IProjectData from '../../../Interfaces/IProjectData';
import './project-grid.scss';
import FadeInSection, { FadeInDirection } from '../../FadeInSection';

interface IProjectGridProps {
    projects: IProjectData[]
}

const ProjectGrid: React.FC<IProjectGridProps> = (props) => {
    
    const { projects } = props;

    return (
        <div className="project-grid content-container">
            {(!projects || projects.length === 0) && <p>No projects to display.</p>}
            {projects && projects.length > 0 && projects.map((project, index) => {
                return (
                    <FadeInSection
                        key={project.id}
                        direction={index % 2 === 0 ? FadeInDirection.Right : FadeInDirection.Left}
                        shiftValue='30px'
                    >
                        <ProjectGridItem project={project} />
                    </FadeInSection>
                ); 
            })}
        </div>
    );

}

export default ProjectGrid;