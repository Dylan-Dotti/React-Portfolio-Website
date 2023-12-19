import React, { useContext } from 'react';
import './education.scss';
import ScrollFadeInSection, { ScrollFadeInDirection } from '../ScrollFadeInSection';
import { AppConstantsContext } from '../../App';
import CourseList from './CourseList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';
import HrWithCircle from '../Visual/HrWithCircle';

const Education: React.FC = () => {
    const {fadeInDurationMS: fadeInTransitionDurationMS } = useContext(AppConstantsContext);

    return (
        <div id="education">

            <div className="header-section">
                <ScrollFadeInSection durationMS={fadeInTransitionDurationMS} className="title-section content-container">
                    <h1 className="text-center title">Education</h1>
                    <HrWithCircle widthClass="half-centered" />

                    <img src="./Img/CNU/cnu_campus_1_cropped.jpg" alt="" className="main-image" />
                </ScrollFadeInSection> 
                <ScrollFadeInSection durationMS={fadeInTransitionDurationMS} direction={ScrollFadeInDirection.Up} className="overview-section content-container">
                    <p>
                        I obtained a Bachelor's degree in Computer Science from Christopher Newport University in 2019. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae vel harum sequi voluptatem rem laborum! Culpa qui aliquid veritatis aliquam dolor maiores asperiores fuga, fugit nulla ex, delectus numquam?
                    </p>
                </ScrollFadeInSection>
            </div>

            <div className="awards-section">
                <ScrollFadeInSection className="title-section content-container" durationMS={fadeInTransitionDurationMS}>
                    <h2 className="text-center title">Academic Awards</h2>
                    <HrWithCircle widthClass="quarter-centered" />
                </ScrollFadeInSection>
                <div className="awards-grid content-container">

                    <ScrollFadeInSection className="award" durationMS={fadeInTransitionDurationMS}>
                        <div className="award-icon">
                            <FontAwesomeIcon icon={faAward} size="3x" />
                        </div>
                        <h4 className="award-title">Newport News Shipbuilding Scholarship</h4>
                        <h5 className="award-description">
                            Awarded by the Newport News shipyard to a few students each year.
                        </h5>
                    </ScrollFadeInSection>

                    <ScrollFadeInSection className="award" durationMS={fadeInTransitionDurationMS}>
                        <div className="award-icon">
                            <FontAwesomeIcon icon={faTrophy} size="3x" />
                        </div>
                        <h4 className="award-title">Capstone Fair Best Project</h4>
                        <h5 className="award-description">
                            My senior capstone project was voted as one of two best projects at the CNU capstone fair.
                        </h5>
                    </ScrollFadeInSection>

                    <ScrollFadeInSection className="award" durationMS={fadeInTransitionDurationMS}>
                        <div className="award-icon">
                            <FontAwesomeIcon icon={faMedal} size="3x" />
                        </div>
                        <h4 className="award-title">PCSE Departmental Highest Honors</h4>
                        <h5 className="award-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam.
                        </h5>
                    </ScrollFadeInSection>

                </div>
            </div>


            <div className="courses-section">

                <ScrollFadeInSection durationMS={fadeInTransitionDurationMS} direction={ScrollFadeInDirection.Up} className="title-section content-container">
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