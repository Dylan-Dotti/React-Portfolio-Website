import * as React from 'react';
import './project-listing-item.scss';
import IProjectData from '../../../../Interfaces/IProjectData';
import classNames from 'classnames';

interface ProjectListingItemProps {
    project         : IProjectData
    className?      : string
}

const ProjectListingItem: React.FC<ProjectListingItemProps> = (props) => {
    
    const { project } = props;

    const className = classNames('project-listing-item', props.className);

    return (
        <div className={className}>
    
            <div className="left-column">
                <div className="project-section title-section">
                    <h2 className="project-name">{project.name}</h2>
                    <img src={project.imgSrc} alt="" className="main-image"/>
                    <div className="button-links">
                        {project.codeSrc && (
                            <a href={project.codeSrc} target="_blank" rel="noreferrer" className="btn btn-primary view-code-button">
                                View Code
                            </a>
                        )}
                        {project.demoSrc && (
                            <a href={project.demoSrc} target="_blank" rel="noreferrer" className="btn btn-secondary">
                                View Demo
                            </a>
                        )}
                    </div>
                </div>
                <div className="list-group-wrapper">
                    {project.technologies &&
                        <div className="project-section technologies-section">
                            <h3 className="section-header">Technologies Used</h3>
                            <div className="list-wrapper">
                                <ul className="blue-circle-list">
                                    {project.technologies.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    }
                    {project.skills &&
                        <div className="project-section skills-section">
                            <h3 className="section-header">Relevant Skills</h3>
                            <div className="list-wrapper">
                                <ul className="blue-circle-list">
                                    {project.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    }
                    {project.features &&
                        <div className="project-section features-section">
                            <h3 className="section-header">Notable Features</h3>
                            <div className="list-wrapper">
                                <ul className="blue-circle-list">
                                    {project.features.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className="right-column">
                {project.overviewSections && project.overviewSections.length > 0 && project.overviewSections.map((section, index) => (
                    <div className="project-section" key={index}>
                        <h3 className="section-header">{section.title}</h3>
                        {section.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                ))}
                {(!project.overviewSections || project.overviewSections.length === 0) &&
                    <>
                        <div className="project-section">
                            <h3 className="section-header">Overview</h3>
                            <p>{project.description}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae nesciunt officiis ex quis voluptatum veritatis sint facilis repudiandae corporis in illum molestiae, vel laboriosam rem iure iste odit deserunt!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti est assumenda dolorum eveniet aut sapiente, sint illum iure commodi laudantium corrupti provident voluptatum doloribus quas a vero exercitationem nam veniam. Quaerat, iste porro? Vitae delectus iure, eius voluptatum tempore maiores.</p>
                        </div>
                        <div className="project-section">
                            <h3 className="section-header">Challenges</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae nesciunt officiis ex quis voluptatum veritatis sint facilis repudiandae corporis in illum molestiae, vel laboriosam rem iure iste odit deserunt!</p>
                        </div>
                    </>
                }
            </div>
        </div>
    );

}

export default ProjectListingItem;