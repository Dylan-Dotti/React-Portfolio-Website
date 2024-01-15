import * as React from 'react';
import './project-navigation-dropdown.scss';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';
import IProjectData from '../../../../Interfaces/IProjectData';
import { HashLink } from 'react-router-hash-link';
import FadeInSection from '../../../FadeInSection';

interface ProjectNavigationDropdownProps {
    projects: IProjectData[]
}

const ProjectNavigationDropdown: React.FC<ProjectNavigationDropdownProps> = (props) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div className="project-navigation-dropdown">
            <FadeInSection className="dropdown-contents">
                <div className="navigation-toggle" onClick={() => setIsExpanded(!isExpanded)}>
                    Jump to Project <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} fixedWidth />
                </div>
                <Collapse
                    isOpen={isExpanded}
                    className="navigation-collapse"
                >
                    <ol>
                        {props.projects.map((project, index) => {
                            return (
                                <li key={project.id}>
                                    <HashLink
                                        to={`#${project.hashName}`}
                                        className="project-link"
                                        smooth
                                        onClick={() => setIsExpanded(false)}
                                    >
                                        {project.name}
                                    </HashLink>
                                </li>
                            );
                        })}
                    </ol>
                </Collapse>
            </FadeInSection>
        </div>
    )
}

export default ProjectNavigationDropdown;