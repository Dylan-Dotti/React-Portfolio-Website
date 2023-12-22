import * as React from 'react';
import './project-listing.scss';
import IProjectData from '../../../Interfaces/IProjectData';
import HrWithCircle from '../../Visual/HrWithCircle';

interface ProjectListingProps {
    projects: IProjectData[]
}

const ProjectListing: React.FC<ProjectListingProps> = (props) => {
    const placeholderTechs = [
        "React",
        "TypeScript",
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "Git",
        "AWS",
        "Azure",
        "C#",
        ".NET",
        "Python",
        "Java",
        "C++",
        "SQL",
        "Firebase",
        "REST",
    ];

    const placeholderSkills = [
        "Problem Solving",
        "Communication",
        "Teamwork",
        "Time Management",
        "Adaptability",
        "Leadership",
        "Creativity",
        "Work Ethic",
        "Attention to Detail",
    ]

    return (
        <div className="project-listing">
            <div className="content-container">
                {(!props.projects || props.projects.length === 0) && <p>No projects to display.</p>}
                {props.projects && props.projects.length > 0 && props.projects.map((project, index) => {
                    return (
                        <div key={project.id}>
                            <div className="project-listing-item">

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
                                            <a href="#" className="btn btn-secondary">View Demos</a>
                                        </div>
                                    </div>

                                    <div className="project-section technologies-section">
                                        <h3 className="section-header">Technologies Used</h3>
                                        <ul className="technologies-list">
                                            {/* TODO: add project technologies */}
                                            {placeholderTechs.map((tech, index) => (
                                                <li key={index}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="project-section skills-section">
                                        <h3 className="section-header">Relevant Skills</h3>
                                        <ul className="skills-list">
                                            {placeholderSkills.map((skill, index) => (
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>

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
                            {index < props.projects.length - 1 && <HrWithCircle className="softer" />}
                        </div>
                        
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectListing;