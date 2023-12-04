import * as React from "react";
import "./about.scss";
import ScrollFadeInSection from "../ScrollFadeInSection";
import { AppConstantsContext } from "../../App";


const About: React.FC = () => {

    const appConstants = React.useContext(AppConstantsContext);
    const profileImg = "./img/Profile/IMG_0061_1.jpg";

    return (
        <div id="about">

            <ScrollFadeInSection className="intro-section" durationMS={appConstants.fadeInDurationMS}>
                <div className="content-container">
                    <div className="profile-picture" style={{backgroundImage: `url(${profileImg})`}}></div>
                    <div className="intro-text">
                        <h1>Hi, I'm Dylan.</h1>
                        <h4>I have a passion for creating quality software of all kinds.</h4>
                        <h4>Scroll below to learn how my skillset can benefit your organization.</h4>
                    </div>
                </div>
            </ScrollFadeInSection>
            
        </div>
    );
}

export default About;