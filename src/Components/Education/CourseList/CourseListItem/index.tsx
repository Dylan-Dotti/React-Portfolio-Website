import * as React from "react";
import "./course-list-item.scss";
import ICourseData from "../../../../Interfaces/ICourseData";
import Tag from "../../../Tag";
import ScrollFadeInSection from "../../../ScrollFadeInSection";

interface ICourseListItemProps {
    course: ICourseData
}

const CourseListItem: React.FC<ICourseListItemProps> = (props) => {
    
    const { course } = props;

    return (
        <div className="course-list-item">
            <ScrollFadeInSection durationMS={1000}>
                <h3 className="course-name">{course.name}</h3>
                {course.skills && (
                    <div className="skills-list">
                        {course.skills.sort().map((skill, index) => (
                            <Tag key={index} text={skill} />
                        ))}
                    </div>
                )}
                {course.overview && (
                    <div className="course-overview">
                        {course.overview.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                )}
            </ScrollFadeInSection>
            
        </div>
    );

}

export default CourseListItem;