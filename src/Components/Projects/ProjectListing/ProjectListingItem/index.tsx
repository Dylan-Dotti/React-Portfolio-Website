import * as React from 'react';
import './project-listing-item.scss';
import IProjectData from '../../../../Interfaces/IProjectData';

interface ProjectListingItemProps {
    project   : IProjectData
    className?: string
}

const ProjectListingItem: React.FC<ProjectListingItemProps> = (props) => {
    
    const { project } = props;

    return (
        <div className="project-listing-item" key={project.id} id={`project-${project.id}`}>
    
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
                        <a href="#" className="btn btn-secondary">View Media</a>
                    </div>
                </div>
                {project.technologies &&
                    <div className="project-section technologies-section">
                        <h3 className="section-header">Technologies Used</h3>
                        <ul>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                }
                {project.skills &&
                    <div className="project-section skills-section">
                        <h3 className="section-header">Relevant Skills</h3>
                        <ul>
                            {project.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                }
                {project.features && 
                    <div className="project-section features-section">
                        <h3 className="section-header">Notable Features</h3>
                        <ul>
                            {project.features.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>

            <div className="right-column">
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
            </div>
        </div>
    );

}

export default ProjectListingItem;