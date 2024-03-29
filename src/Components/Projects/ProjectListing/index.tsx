import * as React from 'react';
import './project-listing.scss';
import IProjectData from '../../../Interfaces/IProjectData';
import HrWithCircle from '../../Visual/HrWithCircle';
import ProjectListingItem from './ProjectListingItem';
import { HashLink } from 'react-router-hash-link';
import FadeInSection from '../../FadeInSection';
import ProjectNavigationDropdown from './ProjectNavigationDropdown';

interface ProjectListingProps {
    projects: IProjectData[]
}

const ProjectListing: React.FC<ProjectListingProps> = (props) => {

    return (
        <div className="project-listing">

            <FadeInSection className="content-container">
                {(!props.projects || props.projects.length === 0) && <p>No projects to display.</p>}
                {props.projects && props.projects.length > 0 && 
                    <div className="content-layout">

                        <div className="list-content">
                            {props.projects.map((project, index) => (
                                <div className="list-item-wrapper header-bar-nav-buffer" key={project.id} id={project.hashName}>
                                    <ProjectListingItem
                                        project={project}
                                    />
                                    {index < props.projects!.length - 1 && <HrWithCircle className="project-divider softer"/>}
                                </div>
                            ))}
                        </div>

                        
                        <ol className="project-navigation">
                            {props.projects.map((project, index) => {
                                return (
                                    <li key={project.id}>
                                        <HashLink to={`#${project.hashName}`} className="project-link" smooth>
                                            {project.name}
                                        </HashLink>
                                    </li>
                                );
                            })}
                        </ol>


                    </div>
                }
            </FadeInSection>
            
            <ProjectNavigationDropdown projects={props.projects} />

        </div>
    );
}

export default ProjectListing;