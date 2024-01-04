import * as React from 'react';
import './education.scss';
import ScrollFadeInSection, { ScrollFadeInDirection } from '../ScrollFadeInSection';
import CourseList from './CourseList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HrWithCircle from '../Visual/HrWithCircle';
import awardData from '../../Data/AcademicAwardsData';

const Education: React.FC = () => {

    return (
        <div id="education">

            <div className="header-section">
                <ScrollFadeInSection className="title-section content-container">
                    <h1 className="text-center title">Education</h1>
                    <HrWithCircle widthClass="half-centered" />

                    <img src="./Img/CNU/cnu_campus_1_cropped.jpg" alt="" className="main-image" />
                </ScrollFadeInSection> 
                <ScrollFadeInSection direction={ScrollFadeInDirection.Up} className="overview-section content-container">
                    <p>
                        I obtained a Bachelor's degree in Computer Science from Christopher Newport University in 2019. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae vel harum sequi voluptatem rem laborum! Culpa qui aliquid veritatis aliquam dolor maiores asperiores fuga, fugit nulla ex, delectus numquam?
                    </p>
                </ScrollFadeInSection>
            </div>

            <div className="awards-section">
                <ScrollFadeInSection className="title-section content-container">
                    <h2 className="text-center title">Academic Awards</h2>
                    <HrWithCircle widthClass="quarter-centered" />
                </ScrollFadeInSection>
                <div className="awards-grid content-container">

                    {awardData && awardData.map((award, index) => (
                        <ScrollFadeInSection className="award" key={award.id}>
                            <div className="award-icon">
                                <FontAwesomeIcon icon={award.icon} size="3x" />
                            </div>
                            <h5 className="award-title">{award.name}</h5>
                            <h6 className="award-description">
                                {award.description}
                            </h6>
                        </ScrollFadeInSection>
                    ))}

                </div>
            </div>


            <div className="courses-section">

                <ScrollFadeInSection direction={ScrollFadeInDirection.Up} className="title-section content-container">
                    <h2 className="text-center title">Courses</h2>
                    <HrWithCircle widthClass="quarter-centered" />
                    {/* <p className="text-center">
                        Below I've summarized the most beneficial courses I took during my time at CNU.
                    </p> */}
                </ScrollFadeInSection>

                <CourseList />

            </div>
        </div>
    );

}

export default Education;