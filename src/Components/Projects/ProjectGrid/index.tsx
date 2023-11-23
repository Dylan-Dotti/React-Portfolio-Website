import * as React from 'react';
import ProjectGridItem from './ProjectGridItem';
import { IProjectData } from '../../../Interfaces/IProjectData';
import './project-grid.scss';

interface IProjectGridProps {
    projects: IProjectData[]
}

const ProjectGrid: React.FC<IProjectGridProps> = (props) => {
    
    const { projects } = props;

    return (
        <div className="project-grid">
            {(!projects || projects.length === 0) && <p>No projects to display.</p>}
            {projects && projects.length > 0 && projects.map((project, index) => {
                return (
                    <ProjectGridItem
                        key={project.id}
                        project={project}
                    />
                );
            })}
        </div>
    );

}

export default ProjectGrid;