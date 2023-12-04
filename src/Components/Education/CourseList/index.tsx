import * as React from "react";
import "./course-list.scss";
import courseData from "../../../Data/CourseData";
import CourseListItem from "./CourseListItem";

interface ICourseListProps {
}

const CourseList: React.FC<ICourseListProps> = (props) => {
    
    const courses = courseData;

    return (
        <div className="course-list content-container">
            {(!courses || courses.length === 0) && <p>No courses to display.</p>}
            {courses && courses.length > 0 && courses.sort((a, b) => (b.overview?.length ?? 0) - (a.overview?.length ?? 0)).map((course) => {
                return (
                    <CourseListItem course={course} key={course.id}/>
                );
            })}
        </div>
    );

}

export default CourseList;