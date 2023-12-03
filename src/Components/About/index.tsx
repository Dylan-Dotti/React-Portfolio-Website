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
                <div className="profile-picture" style={{backgroundImage: `url(${profileImg})`}}></div>
                <div className="intro-text">
                    <h1>Lorem, ipsum dolor</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate</h4>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, itaque</h4>
                </div>
            </ScrollFadeInSection>
            
        </div>
    );
}

export default About;