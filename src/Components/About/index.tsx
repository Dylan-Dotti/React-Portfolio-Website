import * as React from "react";
import "./about.scss";
import ScrollFadeInSection, { ScrollFadeInDirection } from "../ScrollFadeInSection";
import AppConfig from "../../Config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSitemap, faRobot } from '@fortawesome/free-solid-svg-icons';
import getTechIcons from "../../IconSources/tech-icons";
import projectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";


const About: React.FC = () => {
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
        const delay = Math.floor(Math.random() * 500);
        return delay + 100;
    };

    return (
        <div id="about">

            <div className="content-section intro-section">
                <div className="content-container">
                    <ScrollFadeInSection>
                        <div className="profile-picture white-glow-outline-panel" style={{backgroundImage: `url(${profileImg})`}}></div>
                    </ScrollFadeInSection>
                    <ScrollFadeInSection className="intro-text" delayMS={400}>
                        <h1>Hi, I'm <span className="primary-color-text">Dylan</span></h1>
                        <h4>I'm a full-stack developer with a passion for making AI, games, and web applications</h4>
                        <h4>Take a look around to see how my skill set can benefit your organization and help shape the future of your technology</h4>
                    </ScrollFadeInSection>
                </div>
            </div>

            <div className="gradient-section gradient-1"></div>

            <div className="content-section strengths-section">
                <div className="content-container">
                    <ScrollFadeInSection>
                        <h1 className="section-title">My <span className="primary-color-text">strengths</span> as a developer</h1>
                    </ScrollFadeInSection>
                    
                    <div className="cards-grid">

                        <ScrollFadeInSection
                            className="strength-card"
                            durationMS={AppConfig.defaultFadeInMS * 0.8}
                            delayMS={300}
                            direction={ScrollFadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faLayerGroup} size="3x" />
                            </div>
                            <h2 className="card-title">Full Stack</h2>
                            <h5>From UIs to APIs to databases, I am capable of working on any layer of a software application.</h5>
                        </ScrollFadeInSection>

                        <ScrollFadeInSection
                            className="strength-card"
                            durationMS={AppConfig.defaultFadeInMS * 0.8}
                            delayMS={450}
                            direction={ScrollFadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faSitemap} size="3x" />
                            </div>
                            <h2 className="card-title">OOP</h2>
                            <h5>Strong grasp of OOP design principles and a long history of utilizing the paradigm in my software.</h5>
                        </ScrollFadeInSection>

                        <ScrollFadeInSection
                            className="strength-card"
                            durationMS={AppConfig.defaultFadeInMS * 0.8}
                            delayMS={600}
                            direction={ScrollFadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faRobot} size="3x" />
                            </div>
                            <h2 className="card-title">AI</h2>
                            <h5><span>Can leverage AI tools and libraries to integrate machine learning models into applications.</span></h5>
                        </ScrollFadeInSection>

                    </div>
                </div>
            </div>


            <div className="gradient-section gradient-2"></div>

            <div className="content-section technologies-section">

                <div className="tech-group content-container">
                    <ScrollFadeInSection>
                        <h1 className="section-title">
                            <span className="primary-color-text">Technologies</span> I use in my projects
                        </h1>
                    </ScrollFadeInSection>

                    <div className="tech-grid familiar-techs">

                        {familiarTechIcons.map((icon, index) => (
                            <ScrollFadeInSection
                                key={index}
                                delayMS={generateIconDelay(index)}
                            >
                                <img src={icon} alt="" />
                            </ScrollFadeInSection>
                        ))}
                        <ScrollFadeInSection
                            delayMS={generateIconDelay(familiarTechIcons.length)}
                        >
                            <img src={techIcons.unityOriginalWordmark} style={{backgroundColor: "whitesmoke"}} alt="" />
                        </ScrollFadeInSection>
                    </div>
                </div>

                <div className="tech-group content-container">
                    <ScrollFadeInSection>
                        <h1 className="section-title">
                            I used to use these, but not as much lately
                        </h1>
                    </ScrollFadeInSection>

                    <div className="tech-grid less-familiar-techs">
                        {lessFamiliarTechIcons.map((icon, index) => (
                            <ScrollFadeInSection
                                key={index}
                                durationMS={AppConfig.defaultFadeInMS * 2}
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
                    <ScrollFadeInSection>
                        <h1 className="section-title"><span className="primary-color-text">Project</span> showcase</h1>
                    </ScrollFadeInSection>

                    <div className="project-showcase">
                        {showcaseProjects.map((project, index) => (
                            <ScrollFadeInSection
                                key={index}
                                className="project-card"
                                durationMS={AppConfig.defaultFadeInMS * 0.8}
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
                                    <h5 className="card-description">{project.description}</h5>
                                    <HashLink to={`/projects#project-${project.id}`} className="btn btn-primary">View Project</HashLink>
                                </div>
                            </ScrollFadeInSection>
                        ))}
                    </div>
                </div>


            </div>

            <div className="gradient-section gradient-2"></div>

            {/* Employment summary */}
            <div className="content-section employment-section">
                <div className="content-container">
                    <ScrollFadeInSection>
                        <h1 className="section-title"><span className="primary-color-text">Employment</span> summary</h1>
                    </ScrollFadeInSection>

                    <ScrollFadeInSection delayMS={150}>
                        <h3 className="overview">
                            My years following graduation from university were spent working for <span className="primary-color-text">Swisslog</span>, a global intralogistics company
                        </h3>
                    </ScrollFadeInSection>

                    {/* Summarize swisslog jobs? */}


                    <div className="employment-history">
                        <ScrollFadeInSection className="employment-history-item" direction={ScrollFadeInDirection.Right} shiftValue="50px">
                            <div className="upper-row">
                                <h3 className="job-title">Full-Stack Software Engineer</h3>
                                <h4 className="timeline">Nov '21 - Nov '23</h4>
                                <h4 className="responsibilities-header">Primary Responsibilities</h4>
                            </div>
                            <ul className="blue-circle-list">
                                <li>Participated in frequent scrum meetings, including daily standups, sprint planning/retrospectives, and story planning/revising.</li>
                                <li>Completed assigned stories in a timely manner. Updated stories with difficulties, considerations, and results.</li>
                                <li>Used React with Typescript and SASS, and occasionally AngularJS, to implement and maintain front-end web and desktop application UIs. Designed UI pages and components from scratch or ported them from older UI versions.</li>
                                <li>Used .NET with C# to implement and maintain back-end REST APIs and business logic.</li>
                                <li>Designed, implemented, and maintained scripts and stored procedures for SQL Server databases.</li>
                                <li>Troubleshot software-related support issues for my team’s applications.</li>
                                <li>Handled the software portion of a conveyor expansion for a legacy system with minimal assistance from within the company. </li>
                            </ul>
                        </ScrollFadeInSection>
                        <ScrollFadeInSection className="employment-history-item" direction={ScrollFadeInDirection.Left} shiftValue="50px">
                            <div className="upper-row">
                                <h3 className="job-title">Global Helpdesk Support Engineer</h3>
                                <h4 className="timeline">Dec '19 - Nov '21</h4>
                                <h4 className="responsibilities-header">Primary Responsibilities</h4>
                            </div>
                            <ul className="blue-circle-list">
                                <li>Answered calls from customers who experienced issues with or had questions about their warehouse system.</li>
                                <li>Created support tickets using information gathered from customer calls or emails.</li>
                                <li>Resolved support tickets within a required timeframe by using prior knowledge of the system and available resources.</li>
                                <li>Provided periodic phone and email updates to customers about the progress of their support tickets.</li>
                                <li>Created articles detailing resolution steps for issues so that future instances of those issues could be resolved more easily.</li>
                                <li>Created utility applications to improve the workflow of the helpdesk.</li>
                            </ul>
                        </ScrollFadeInSection>

                        
                        <ScrollFadeInSection>
                            <h4 className="text-center">
                                A more detailed summary of my employment history can be found on my <Link to="/employment">employment page</Link>
                            </h4>
                        </ScrollFadeInSection>
                    </div>


                </div>
            </div>

            <div className="gradient-section gradient-1"></div>

            <div className="content-section ai-tools-section">
                <div className="content-container">
                    <ScrollFadeInSection>
                        <h3 className="section-title">
                            I utilize modern AI tools like <span className="primary-color-text">ChatGPT</span> and <span className="primary-color-text">Copilot</span> to boost my productivity
                        </h3>
                    </ScrollFadeInSection>

                    <div className="ai-tools-layout">
                        <ScrollFadeInSection
                            className="left-column"
                            direction={ScrollFadeInDirection.Right}
                            shiftValue="50px"
                            delayMS={300}
                        >
                            <img src="img/AITools/chatGPT_1.jpg" alt="" />
                        </ScrollFadeInSection>
                        <ScrollFadeInSection
                            className="right-column"
                            direction={ScrollFadeInDirection.Left}
                            shiftValue="50px"
                            delayMS={300}
                        >
                            <img src="img/AITools/copilot.png" alt="" />
                        </ScrollFadeInSection>
                    </div>
                </div>
            </div>

            <div className="gradient-section gradient-2"></div>

            {/* Education summary */}
            <div className="content-section education-section">
                <div className="content-container">
                    <ScrollFadeInSection>
                        <h1 className="section-title"><span className="primary-color-text">Education</span> overview</h1>
                    </ScrollFadeInSection>

                    <div className="content">
                        <div className="left-column">
                            <ScrollFadeInSection direction={ScrollFadeInDirection.Right} shiftValue="30px">
                                <img src="img/CNU/cnu_logo_blue_background.png" alt="" className="logo"/>
                            </ScrollFadeInSection>
                        </div>
                        <div className="right-column">
                            <ScrollFadeInSection direction={ScrollFadeInDirection.Left} shiftValue="30px">
                                <h5 className="overview">
                                    I received a comprehensive computer science education at <span className="primary-color-text">Christopher Newport University</span>, where I studied fundamental concepts such as data structures, algorithmic analysis, artificial intelligence, and database management.
                                </h5>
                            </ScrollFadeInSection>
                            <ScrollFadeInSection direction={ScrollFadeInDirection.Left} shiftValue="30px">
                                <h5 className="overview">
                                    I demonstrated consistent academic excellence during my time at CNU, graduating <span className="primary-color-text">summa cum laude</span> with <span className="primary-color-text">departmental highest honors</span>, and being <span className="primary-color-text">one of two winners</span> of the 2019 capstone fair in the computer science category.
                                </h5>
                            </ScrollFadeInSection>
                            <ScrollFadeInSection direction={ScrollFadeInDirection.Left} shiftValue="30px">
                                <h5>
                                    I provide summaries of the most beneficial courses I completed on my <Link to="/education">education page</Link>.
                                </h5>
                            </ScrollFadeInSection>
                        </div>
                    </div>

                </div>
            </div>

            <div className="gradient-section gradient-1"></div>

            {/* Contact section */}

            <div className="content-section contact-section">
                <div className="content-container">
                    <ScrollFadeInSection>
                        <h3 className="section-title">
                            If you have <span className="primary-color-text">questions</span>, <span className="primary-color-text">feedback</span>, or would like to <span className="primary-color-text">discuss a development role</span>, I can be contacted via any of these methods
                        </h3>
                    </ScrollFadeInSection>

                    <ScrollFadeInSection direction={ScrollFadeInDirection.Up} delayMS={150} shiftValue="50px">
                        <div className="contact-form-wrapper light-to-dark-gradient-panel">
                            <ContactForm />
                        </div>
                    </ScrollFadeInSection>

                </div>
            </div>

        </div>
    );
}

export default About;