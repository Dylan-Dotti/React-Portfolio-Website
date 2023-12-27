import * as React from "react";
import "./about.scss";
import ScrollFadeInSection, { ScrollFadeInDirection } from "../ScrollFadeInSection";
import { AppConstantsContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSitemap, faRobot } from '@fortawesome/free-solid-svg-icons';
import getTechIcons from "../../IconSources/tech-icons";
import projectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const About: React.FC = () => {

    const appConstants = React.useContext(AppConstantsContext);
    const profileImg = "./img/Profile/IMG_0061_1.jpg";
    const techIcons = getTechIcons();

    const familiarTechIcons = [
        techIcons.htmlOriginal,
        techIcons.cssOriginal,
        techIcons.sassOriginal,
        techIcons.jsOriginal,
        techIcons.tsOriginal,
        techIcons.cSharpOriginal,
        techIcons.pythonOriginal,
        techIcons.dotNetPlainWordmark,
        techIcons.reactOriginal,
        techIcons.electronOriginal,
        techIcons.bootstrapOriginal,
        techIcons.visualStudioPlain,
        techIcons.vsCodeOriginal,
        // techIcons.sqlServerPlainWordmark,
        techIcons.nodeJSOriginal,
        techIcons.gitOriginal,
        techIcons.jiraOriginalWordmark,
        techIcons.npmOriginalWordmark,
    ];

    const lessFamiliarTechIcons = [
        techIcons.javaOriginal,
        techIcons.cPlusPlusOriginal,
        techIcons.angularJSOriginal,
        techIcons.linuxOriginal,
        techIcons.mongoDBPlainWordmark,
        techIcons.blenderOriginal,
    ];

    const showcaseProjects = [
        projectData[0],
        projectData[1],
        projectData[2],
    ];

    const generateIconDelay = (index: number) => {
        // generate a random delay between 0 and 200ms
        const delay = Math.floor(Math.random() * 750);
        return delay + 250;
    };

    return (
        <div id="about">

            <div className="content-section intro-section">
                <div className="content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS}>
                        <div className="profile-picture white-glow-outline-panel" style={{backgroundImage: `url(${profileImg})`}}></div>
                    </ScrollFadeInSection>
                    <ScrollFadeInSection className="intro-text" durationMS={appConstants.fadeInDurationMS} delayMS={400}>
                        <h1>Hi, I'm <span className="primary-color-text">Dylan</span></h1>
                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, eveniet.</h4>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, consequatur?</h4>
                    </ScrollFadeInSection>
                </div>
            </div>

            <div className="gradient-section gradient-1"></div>

            <div className="content-section strengths-section">
                <div className="content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS} delayMS={150}>
                        <h1 className="section-title">My <span className="primary-color-text">strengths</span> as a developer</h1>
                    </ScrollFadeInSection>
                    
                    <div className="cards-grid">

                        <ScrollFadeInSection
                            className="strength-card"
                            durationMS={appConstants.fadeInDurationMS * 0.8}
                            delayMS={400}
                            direction={ScrollFadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faLayerGroup} size="3x" />
                            </div>
                            <h2 className="card-title">Full Stack</h2>
                            <h5>From UIs to APIs to databases, I am capable of working on any and every layer of a software application.</h5>
                        </ScrollFadeInSection>

                        <ScrollFadeInSection
                            className="strength-card"
                            durationMS={appConstants.fadeInDurationMS * 0.8}
                            delayMS={650}
                            direction={ScrollFadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faSitemap} size="3x" />
                            </div>
                            <h2 className="card-title">OOP</h2>
                            <h5>I have a strong grasp of OOP design principles and an extensive history of utilizing the paradigm in my software.</h5>
                        </ScrollFadeInSection>

                        <ScrollFadeInSection
                            className="strength-card"
                            durationMS={appConstants.fadeInDurationMS * 0.8}
                            delayMS={900}
                            direction={ScrollFadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faRobot} size="3x" />
                            </div>
                            <h2 className="card-title">AI</h2>
                            <h5><span>I can leverage AI tools and libraries to integrate learning models into an application.</span></h5>
                        </ScrollFadeInSection>

                    </div>
                </div>
            </div>


            <div className="gradient-section gradient-2"></div>

            <div className="content-section technologies-section">

                <div className="tech-group content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS} delayMS={150}>
                        <h1 className="section-title">
                            <span className="primary-color-text">Technologies</span> I use in my projects
                        </h1>
                    </ScrollFadeInSection>

                    <div className="tech-grid familiar-techs">

                        {familiarTechIcons.map((icon, index) => (
                            <ScrollFadeInSection
                                key={index}
                                durationMS={appConstants.fadeInDurationMS * 2}
                                delayMS={generateIconDelay(index)}
                            >
                                <img src={icon} alt="" />
                            </ScrollFadeInSection>
                        ))}
                        <ScrollFadeInSection
                            durationMS={appConstants.fadeInDurationMS * 2}
                            delayMS={generateIconDelay(familiarTechIcons.length)}
                        >
                            <img src={techIcons.unityOriginalWordmark} style={{backgroundColor: "whitesmoke"}} alt="" />
                        </ScrollFadeInSection>
                    </div>
                </div>

                <div className="tech-group content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS} delayMS={150}>
                        <h1 className="section-title">
                            I <span className="primary-color-text">used</span> to use these, but not as much lately
                        </h1>
                    </ScrollFadeInSection>

                    <div className="tech-grid less-familiar-techs">
                        {lessFamiliarTechIcons.map((icon, index) => (
                            <ScrollFadeInSection
                                key={index}
                                durationMS={appConstants.fadeInDurationMS * 2}
                                delayMS={generateIconDelay(index)}
                            >
                                <img src={icon} alt="" />
                            </ScrollFadeInSection>
                        ))}
                    </div>
                </div>
                
            </div>
            

            <div className="gradient-section gradient-1"></div>

            {/* Project showcase section */}
            <div className="content-section projects-section">
                <div className="content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS} delayMS={150}>
                        <h1 className="section-title"><span className="primary-color-text">Project</span> showcase</h1>
                    </ScrollFadeInSection>

                    <div className="project-showcase">
                        {showcaseProjects.map((project, index) => (
                            <ScrollFadeInSection
                                key={index}
                                className="project-card"
                                durationMS={appConstants.fadeInDurationMS * 0.8}
                                delayMS={index * 250}
                                direction={ScrollFadeInDirection.Up}
                                shiftValue="50px"
                            >
                                <div className="card-image">
                                    <img src={project.imgSrc} alt="" />
                                    <div className="absolute-cover-panel image-cover">
                                        <h3 className="card-title">{project.name}</h3>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h5 className="card-description">{project.shortDescription ?? project.description}</h5>
                                    <HashLink to={`/projects#project-${project.id}`} className="btn btn-primary">View Project</HashLink>
                                </div>
                            </ScrollFadeInSection>
                        ))}
                    </div>
                </div>


            </div>

            <div className="gradient-section gradient-2"></div>

        </div>
    );
}

export default About;