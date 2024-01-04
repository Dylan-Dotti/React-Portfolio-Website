import * as React from 'react';
import './project-listing.scss';
import IProjectData from '../../../Interfaces/IProjectData';
import HrWithCircle from '../../Visual/HrWithCircle';
import ProjectListingItem from './ProjectListingItem';
import { HashLink } from 'react-router-hash-link';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import ReactPlayer from 'react-player';

interface ProjectListingProps {
    projects: IProjectData[]
}

const ProjectListing: React.FC<ProjectListingProps> = (props) => {
    const [showProjectModal, setShowProjectModal] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState<IProjectData | null>(null);

    return (
        <div className="project-listing">

            <div className="content-container">
                {(!props.projects || props.projects.length === 0) && <p>No projects to display.</p>}
                {props.projects && props.projects.length > 0 && 
                    <div className="content-layout">

                        <div className="list-content">
                            {props.projects.map((project, index) => (
                                <div className="list-item-wrapper header-bar-nav-buffer" key={project.id} id={`project-${project.id}`}>
                                    <ProjectListingItem
                                        project={project}
                                        onViewDemoClick={() => {
                                            setSelectedProject(project);
                                            setShowProjectModal(true);
                                        }}
                                    />
                                    {index < props.projects!.length - 1 && <HrWithCircle className="project-divider softer"/>}
                                </div>
                            ))}
                        </div>

                        {props.projects && props.projects.length > 0 && 
                            <ol className="project-navigation">
                                {props.projects.map((project, index) => {
                                    return (
                                        <li key={project.id}>
                                            <HashLink to={`#project-${project.id}`} className="project-link" smooth>
                                                {project.name}
                                            </HashLink>
                                        </li>
                                    );
                                })}
                            </ol>
                        }

                    </div>
                }
            </div>

            <Modal
                isOpen={showProjectModal}
                toggle={() => setShowProjectModal(!showProjectModal)}
                className="project-demo-modal modal-dark"
                centered
                //scrollable
                size='xl'
            >
                <ModalHeader>
                    <div className="title">
                        <h3>Project Demo{selectedProject && ` - ${selectedProject.name}`}</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <ReactPlayer
                        url={selectedProject?.demoSrc}
                        controls={true}
                        muted={true}
                        playing={true}
                        className="project-demo-player"
                        width={"100%"}
                        height={"100%"}
                    />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ProjectListing;