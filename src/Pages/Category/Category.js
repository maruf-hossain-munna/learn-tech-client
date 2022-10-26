import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Category = () => {
    const courses = useLoaderData();
    
    return (
        <div>
            <h2> This category has : {courses.length} </h2>
            <div>
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

export default Category;