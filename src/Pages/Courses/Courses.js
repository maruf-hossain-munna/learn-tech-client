import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h3>All Courses here...</h3>
            <div className='gridCard'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;