import * as React from "react";
import "./about.scss";
import ScrollFadeInSection from "../ScrollFadeInSection";
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

            <ScrollFadeInSection className="intro-section" durationMS={appConstants.fadeInDurationMS}>
                <div className="content-container">
                    <div className="profile-picture" style={{backgroundImage: `url(${profileImg})`}}></div>
                    <div className="intro-text">
                        <h1>Hi, I'm <span className="primary-color-text">Dylan</span>.</h1>
                        <h4>I have a passion for creating quality software of all kinds.</h4>
                        <h4>Scroll below to learn how my skillset can benefit your organization.</h4>
                    </div>
                </div>
            </ScrollFadeInSection>

            <div className="gradient-section gradient-1"></div>

            <div className="technologies-section">
                <div className="familiar-techs">

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
                    <img src={techIcons.nodeJSOriginal} alt="" />
                    <img src={techIcons.gitOriginal} alt="" />
                    <img src={techIcons.jiraOriginalWordmark} alt="" />
                    <img src={techIcons.npmOriginalWordmark} alt="" />
                    <img src={techIcons.unityOriginalWordmark} style={{backgroundColor: 'whitesmoke'}} alt="" />
                </div>
                <div className="less-familiar-techs">
                    <img src={techIcons.javaOriginal} alt="" />
                    <img src={techIcons.cPlusPlusOriginal} alt="" />
                    <img src={techIcons.angularJSOriginal} alt="" />
                    <img src={techIcons.linuxOriginal} alt="" />
                    <img src={techIcons.mongoDBPlainWordmark} alt="" />
                    <img src={techIcons.blenderOriginal} alt="" />
                </div>
            </div>

            <div className="gradient-section gradient-2"></div>

            <div className="strengths-section">
                <div className="content-container">
                    <h1 className="section-title">Development Strengths</h1>
                    
                    <div className="cards-grid">
                        <div className="strength-card">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faLayerGroup} size="3x" />
                            </div>
                            <h2>Full Stack</h2>
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis porro, praesentium facere laudantium molestiae numquam!</h4>
                        </div>
                        <div className="strength-card">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faSitemap} size="3x" />
                            </div>
                            <h2>OOP</h2>
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia alias consectetur assumenda sapiente illum optio.</h4>
                        </div>
                        <div className="strength-card">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faRobot} size="3x" />
                            </div>
                            <h2>AI</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsam quam, quisquam culpa sunt voluptate!</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;