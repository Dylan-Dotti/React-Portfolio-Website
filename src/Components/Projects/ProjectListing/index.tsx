import * as React from 'react';
import './project-listing.scss';
import IProjectData from '../../../Interfaces/IProjectData';
import HrWithCircle from '../../Visual/HrWithCircle';
import ProjectListingItem from './ProjectListingItem';

interface ProjectListingProps {
    projects: IProjectData[]
}

const ProjectListing: React.FC<ProjectListingProps> = (props) => {

    return (
        <div className="project-listing">

            <div className="content-container">
                {(!props.projects || props.projects.length === 0) && <p>No projects to display.</p>}
                {props.projects && props.projects.length > 0 && 
                    <div className="content-layout">

                        <div className="list-content">
                            {props.projects.map((project, index) => (
                                <div className="list-item-wrapper" key={project.id}>
                                    <ProjectListingItem project={project} className="header-bar-nav-buffer" />
                                    {index < props.projects!.length - 1 && <HrWithCircle className="project-divider softer" />}
                                </div>
                            ))}
                        </div>

                        {props.projects && props.projects.length > 0 && 
                            <ol className="project-navigation">
                                {props.projects.map((project, index) => {
                                    return (
                                        <li key={project.id}>
                                            <a href={`#project-${project.id}`} className="project-link">
                                                {project.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ol>
                        }

                    </div>
                }
            </div>
        </div>
    );
}

export default ProjectListing;