import * as React from 'react';
import './project-grid-item.scss';
import IProjectData from '../../../../Interfaces/IProjectData';
import { Link } from 'react-router-dom';

interface IProjectGridItemProps {
    project: IProjectData
}

const ProjectGridItem: React.FC<IProjectGridItemProps> = (props) => {
    
    const { project } = props;

    return (
        <Link to={project.detailSrc ?? "#"} className="project-grid-item">
            {project.imgSrc && (
                <div
                    className="img-wrapper absolute-cover-panel"
                    style={{
                        backgroundImage: project.imgSrc ? `url(${project.imgSrc})` : undefined,
                        backgroundSize: project.imgSrc ? 'cover' : undefined,
                        backgroundPosition: project.imgSrc ? 'center' : undefined,
                    }}
                >
                    <div className="img-opacity-cover absolute-cover-panel"></div>
                </div>
            )}
            <div className="text-wrapper absolute-cover-panel">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </div>
        </Link>
    );

}

export default ProjectGridItem;