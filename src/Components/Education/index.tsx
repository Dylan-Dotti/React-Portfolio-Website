import * as React from 'react';
import './education.scss';
import ScrollFadeInSection, { ScrollFadeInDirection } from '../ScrollFadeInSection';
import CourseList from './CourseList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HrWithCircle from '../Visual/HrWithCircle';
import awardData from '../../Data/AcademicAwardsData';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Education: React.FC = () => {

    return (
        <div id="education">

            <div className="header-section">
                <ScrollFadeInSection className="title-section content-container">
                    <h1 className="text-center title">Education</h1>
                    <HrWithCircle widthClass="half-centered" />
                    
                    <LazyLoadImage
                        src="./img/CNU/cnu_campus_1_cropped.jpg"
                        alt=""
                        effect="blur"
                        className="main-image"
                    />
                </ScrollFadeInSection> 
                <ScrollFadeInSection direction={ScrollFadeInDirection.Up} className="overview-section content-container">
                    <p>
                        I obtained a Bachelor's degree in Computer Science at Christopher Newport University in May of 2019. The rigorous curriculum and collaborative projects strengthened my passion for the field, and set the stage for a career where continuous learning and innovation are at the core. My time at CNU was instrumental in shaping my approach to the dynamic field of computer science, preparing me for the challenges that lay ahead in the tech industry.
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