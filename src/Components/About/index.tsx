import * as React from "react";
import "./about.scss";
import FadeInSection, { FadeInDirection } from "../FadeInSection";
import AppConfig from "../../Config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSitemap, faRobot } from '@fortawesome/free-solid-svg-icons';
import getTechIcons from "../../IconSources/tech-icons";
import projectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../ContactForm";
import { LazyLoadImage } from "react-lazy-load-image-component";


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
        projectData[3],
    ];

    const generateIconDelay = (index: number) => {
        const delay = Math.floor(Math.random() * 500);
        return delay + 100;
    };

    return (
        <div id="about">

            <div className="content-section intro-section">
                <div className="content-container">
                    <FadeInSection>
                        <LazyLoadImage
                            className="profile-picture white-glow-outline-panel"
                            src={profileImg}
                            alt=""
                            effect="blur"
                        />
                    </FadeInSection>
                    <FadeInSection className="intro-text" delayMS={400}>
                        <h1>Hi, I'm <span className="primary-color-text">Dylan</span></h1>
                        <h4>I'm a full-stack developer with a passion for making AI, games, and web applications</h4>
                        <h4>Take a look around to see how my skill set can benefit your organization and help shape the future of your technology</h4>
                    </FadeInSection>
                </div>
            </div>
            

            <div className="content-section strengths-section">
                <div className="content-container">
                    <FadeInSection>
                        <h1 className="section-title">My <span className="primary-color-text">strengths</span> as a developer</h1>
                    </FadeInSection>
                    
                    <div className="cards-grid">

                        <FadeInSection
                            className="strength-card"
                            durationMS={AppConfig.defaultFadeInMS * 0.8}
                            delayMS={300}
                            direction={FadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faLayerGroup} size="3x" />
                            </div>
                            <h2 className="card-title">Full Stack</h2>
                            <h5>From UIs to APIs to databases, I am capable of working on any layer of a software application.</h5>
                        </FadeInSection>

                        <FadeInSection
                            className="strength-card"
                            durationMS={AppConfig.defaultFadeInMS * 0.8}
                            delayMS={450}
                            direction={FadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faSitemap} size="3x" />
                            </div>
                            <h2 className="card-title">OOP</h2>
                            <h5>Strong grasp of OOP design principles and a long history of utilizing the paradigm in my software.</h5>
                        </FadeInSection>

                        <FadeInSection
                            className="strength-card"
                            durationMS={AppConfig.defaultFadeInMS * 0.8}
                            delayMS={600}
                            direction={FadeInDirection.Right}
                            shiftValue="50px"
                        >
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faRobot} size="3x" />
                            </div>
                            <h2 className="card-title">AI</h2>
                            <h5><span>Can leverage AI tools and libraries to integrate machine learning models into applications.</span></h5>
                        </FadeInSection>

                    </div>
                </div>
            </div>


            <div className="content-section technologies-section">
                <div className="content-container">

                    <div className="tech-group">
                        <FadeInSection>
                            <h1 className="section-title">
                                <span className="primary-color-text">Technologies</span> I use in my projects
                            </h1>
                        </FadeInSection>
                        <div className="tech-grid familiar-techs">
                            {familiarTechIcons.map((icon, index) => (
                                <FadeInSection
                                    key={index}
                                    delayMS={generateIconDelay(index)}
                                >
                                    <img src={icon} alt="" />
                                </FadeInSection>
                            ))}
                            <FadeInSection
                                delayMS={generateIconDelay(familiarTechIcons.length)}
                            >
                                <img src={techIcons.unityOriginalWordmark} style={{backgroundColor: "whitesmoke"}} alt="" />
                            </FadeInSection>
                        </div>
                    </div>
                    
                    <div className="tech-group">
                        <FadeInSection>
                            <h1 className="section-title">
                                I used to use these, but not as much lately
                            </h1>
                        </FadeInSection>
                        <div className="tech-grid less-familiar-techs">
                            {lessFamiliarTechIcons.map((icon, index) => (
                                <FadeInSection
                                    key={index}
                                    durationMS={AppConfig.defaultFadeInMS * 2}
                                    delayMS={generateIconDelay(index)}
                                >
                                    <img src={icon} alt="" />
                                </FadeInSection>
                            ))}
                        </div>
                    </div>

                </div>
                
            </div>


            {/* Project showcase section */}
            <div className="content-section projects-section">
                <div className="content-container">
                    <FadeInSection>
                        <h1 className="section-title"><span className="primary-color-text">Project</span> showcase</h1>
                    </FadeInSection>

                    <div className="project-showcase">
                        {showcaseProjects.map((project, index) => (
                            <FadeInSection
                                key={index}
                                className="project-card"
                                durationMS={AppConfig.defaultFadeInMS * 0.8}
                                delayMS={index * 250}
                                direction={FadeInDirection.Up}
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
                                    <HashLink to={`/projects#${project.hashName}`} className="btn btn-primary">View Project</HashLink>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>

            </div>

            {/* Employment summary */}
            <div className="content-section employment-section">
                <div className="content-container">
                    <FadeInSection>
                        <h1 className="section-title"><span className="primary-color-text">Employment</span> summary</h1>
                    </FadeInSection>

                    <FadeInSection delayMS={150}>
                        <h3 className="overview">
                            My years following graduation from university were spent working for <span className="primary-color-text">Swisslog</span>, a global intralogistics company
                        </h3>
                    </FadeInSection>

                    <div className="employment-history">
                        <FadeInSection className="employment-history-item" direction={FadeInDirection.Right} shiftValue="50px">
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
                                <li>Resolved software-related support issues for my team’s applications.</li>
                                <li>Handled the software portion of a conveyor expansion for a legacy system with minimal assistance from within the company. </li>
                            </ul>
                        </FadeInSection>
                        <FadeInSection className="employment-history-item" direction={FadeInDirection.Left} shiftValue="50px">
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
                        </FadeInSection>
                        
                        <FadeInSection>
                            <h4 className="text-center">
                                A more detailed summary of my employment history can be found on my <Link to="/employment">employment page</Link>
                            </h4>
                        </FadeInSection>
                    </div>

                </div>
            </div>

            {/* Education summary */}
            <div className="content-section education-section">
                <div className="content-container clearfix">
                    <FadeInSection>
                        <h1 className="section-title"><span className="primary-color-text">Education</span> overview</h1>
                    </FadeInSection>

                    <div className="content">
                        <div className="left-column">
                            <FadeInSection direction={FadeInDirection.Right} shiftValue="30px">
                                <LazyLoadImage
                                    src="img/CNU/cnu_logo_blue_background.png"
                                    alt=""
                                    effect="blur"
                                    className="logo"
                                />
                            </FadeInSection>
                        </div>
                        <div className="right-column">
                            <FadeInSection direction={FadeInDirection.Left} shiftValue="30px">
                                <h5 className="overview">
                                    I received a comprehensive computer science education at <span className="primary-color-text">Christopher Newport University</span>, where I studied fundamental concepts such as data structures, algorithmic analysis, artificial intelligence, and database management.
                                </h5>
                            </FadeInSection>
                            <FadeInSection direction={FadeInDirection.Left} shiftValue="30px">
                                <h5 className="overview">
                                    I demonstrated consistent academic excellence during my time at CNU, graduating <span className="primary-color-text">summa cum laude</span> with <span className="primary-color-text">departmental highest honors</span>, and being <span className="primary-color-text">one of two winners</span> of the 2019 capstone fair in the computer science category.
                                </h5>
                            </FadeInSection>
                            <FadeInSection direction={FadeInDirection.Left} shiftValue="30px">
                                <h5>
                                    I provide summaries of the most beneficial courses I completed on my <Link to="/education">education page</Link>.
                                </h5>
                            </FadeInSection>
                        </div>
                    </div>

                </div>
            </div>

            {/* Current focus section */}
            <div className="content-section current-focus-section">
                <div className="content-container">
                    <FadeInSection>
                        <h1 className="section-title">
                            My <span className="primary-color-text">current focus</span>
                        </h1>
                    </FadeInSection>
                    <FadeInSection direction={FadeInDirection.Up} shiftValue="30px" className="logo-wrapper">
                        <LazyLoadImage
                            src="img/Azure/azure_fundamentals_badge.png"
                            alt=""
                            effect="blur"
                            className="logo"
                        />
                    </FadeInSection>
                    <FadeInSection direction={FadeInDirection.Up} shiftValue="30px">
                        <h5 className="text-center">
                            I'm currently studying for Microsoft's <span className="primary-color-text">AZ-900 Azure Fundamentals</span> certification exam. I plan to pass the exam before the end of March.
                        </h5>
                    </FadeInSection>
                    <FadeInSection direction={FadeInDirection.Up} shiftValue="30px">
                        <h5 className="text-center">
                            Obtaining this certification will demonstrate my knowledge of the fundamentals of cloud computing and the Azure platform, and will complement my existing skills and experience with the .NET ecosystem.
                        </h5>
                    </FadeInSection>
                </div>
            </div>

            {/* Contact section */}
            <div className="content-section contact-section">
                <div className="content-container">
                    <FadeInSection>
                        <h3 className="section-title">
                            If you have <span className="primary-color-text">questions</span>, <span className="primary-color-text">feedback</span>, or would like to <span className="primary-color-text">discuss a development role</span>, I can be contacted via any of these methods
                        </h3>
                    </FadeInSection>

                    <FadeInSection direction={FadeInDirection.Up} shiftValue="50px">
                        <div className="contact-form-wrapper light-to-dark-gradient-panel">
                            <ContactForm />
                        </div>
                    </FadeInSection>

                </div>
            </div>

        </div>
    );
}

export default About;