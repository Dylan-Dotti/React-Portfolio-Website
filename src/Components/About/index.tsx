import * as React from "react";
import "./about.scss";
import ScrollFadeInSection, { ScrollFadeInDirection } from "../ScrollFadeInSection";
import { AppConstantsContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSitemap, faRobot } from '@fortawesome/free-solid-svg-icons';
import getTechIcons from "../../IconSources/tech-icons";


const About: React.FC = () => {

    const appConstants = React.useContext(AppConstantsContext);
    const profileImg = "./img/Profile/IMG_0061_1.jpg";
    const techIcons = getTechIcons();

    return (
        <div id="about">

            <div className="intro-section">
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

            <div className="technologies-section">

                <div className="tech-group content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS}>
                        <h1 className="section-title">
                            <span className="primary-color-text">Technologies</span> I use in my projects
                        </h1>
                    </ScrollFadeInSection>

                    <div className="tech-grid familiar-techs">

                        <img src={techIcons.htmlOriginal} alt="" />
                        <img src={techIcons.cssOriginal} alt="" />
                        <img src={techIcons.sassOriginal} alt="" />
                        <img src={techIcons.jsOriginal} alt="" />
                        <img src={techIcons.tsOriginal} alt="" />
                        <img src={techIcons.cSharpOriginal} alt="" />
                        <img src={techIcons.pythonOriginal} alt="" />
                        <img src={techIcons.dotNetPlainWordmark} alt="" />
                        <img src={techIcons.reactOriginal} alt="" />
                        <img src={techIcons.electronOriginal} alt="" />
                        <img src={techIcons.bootstrapOriginal} alt="" />
                        <img src={techIcons.visualStudioPlain} alt="" />
                        <img src={techIcons.vsCodeOriginal} alt="" />
                        {/* <img src={techIcons.sqlServerPlainWordmark} alt="" style={{backgroundColor: "rgb(243, 101, 240)"}} /> */}
                        <img src={techIcons.nodeJSOriginal} alt="" />
                        <img src={techIcons.gitOriginal} alt="" />
                        <img src={techIcons.jiraOriginalWordmark} alt="" />
                        <img src={techIcons.npmOriginalWordmark} alt="" />
                        <img src={techIcons.unityOriginalWordmark} style={{backgroundColor: 'whitesmoke'}} alt="" />
                    </div>
                </div>

                <div className="tech-group content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS}>
                        <h1 className="section-title">
                            I <span className="primary-color-text">used</span> to use these, but not as much lately
                        </h1>
                    </ScrollFadeInSection>

                    <div className="tech-grid less-familiar-techs">
                        <img src={techIcons.javaOriginal} alt="" />
                        <img src={techIcons.cPlusPlusOriginal} alt="" />
                        <img src={techIcons.angularJSOriginal} alt="" />
                        <img src={techIcons.linuxOriginal} alt="" />
                        <img src={techIcons.mongoDBPlainWordmark} alt="" />
                        <img src={techIcons.blenderOriginal} alt="" />
                    </div>
                </div>
                
            </div>

            <div className="gradient-section gradient-2"></div>

            <div className="strengths-section">
                <div className="content-container">
                    <ScrollFadeInSection durationMS={appConstants.fadeInDurationMS}>
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

        </div>
    );
}

export default About;