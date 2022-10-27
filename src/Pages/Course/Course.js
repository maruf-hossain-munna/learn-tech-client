import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const { img, title, name, description, id } = course;
    return (
        <div className=' '>
            
                <Card className='mb-3'>
                    <Card.Img variant="top"
                     style={{height:'130px', width:'150px'}}
                     className=' mx-auto rounded-4 shadow-sm mt-3' src={img} />
                    <Card.Body>
                        {/* <Card.Title>{name} </Card.Title> */}
                        <Card.Title>{title} </Card.Title>
                        <Card.Text>
                            {description.slice(0, 120) + '...'}
                        </Card.Text>
                        {/* <Button variant="primary">Get Premium Access</Button> */}
                        <Link to={`/courses/${id}`}><Button variant="primary">Get Premium Access</Button></Link>
                    </Card.Body>
                </Card>
            
        </div>
    );
};

export default Course;