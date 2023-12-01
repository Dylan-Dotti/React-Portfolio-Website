import React, { useContext } from 'react';
import './education.scss';
import ScrollFadeInSection, { ScrollFadeInDirection } from '../ScrollFadeInSection';
import { AppConstantsContext } from '../../App';
import CourseList from './CourseList';

const Education: React.FC = () => {
    const {fadeInDurationMS: fadeInTransitionDurationMS } = useContext(AppConstantsContext);

    return (
        <div id="education">

            <div className="header-group">
                <ScrollFadeInSection durationMS={fadeInTransitionDurationMS}>
                    <h1 className="text-center title">Education</h1>
                    <hr className="half-centered"/>

                    <img src="./Img/CNU/cnu_campus_1_cropped.jpg" alt="" className="main-image" />
                </ScrollFadeInSection>
                <div className="overview-section">    
                    <ScrollFadeInSection durationMS={fadeInTransitionDurationMS} direction={ScrollFadeInDirection.Up}>
                        <p>
                            I obtained a Bachelor's degree in Computer Science from Christopher Newport University in 2019. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae vel harum sequi voluptatem rem laborum! Culpa qui aliquid veritatis aliquam dolor maiores asperiores fuga, fugit nulla ex, delectus numquam?
                        </p>
                    </ScrollFadeInSection>
                </div>
            </div>


            <div className="courses-section">

                <div className="title-group">
                    <ScrollFadeInSection durationMS={fadeInTransitionDurationMS} direction={ScrollFadeInDirection.Up}>
                        <h2 className="text-center title">Courses</h2>
                        <p className="text-center">
                            Below I've listed and summarized the most beneficial courses I took during my time at CNU.
                        </p>
                    </ScrollFadeInSection>
                </div>

                <CourseList />

            </div>
        </div>
    );

}

export default Education;