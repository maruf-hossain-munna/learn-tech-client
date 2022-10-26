import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';

const Course = ({ course }) => {
    const { img, title, name, description } = course;
    return (
        <div className='grid'>
            <div>
                <Card className=''>
                    <Card.Img variant="top"
                     style={{height:'130px', width:'150px'}}
                     className=' mx-auto rounded-4 shadow-sm mt-3' src={img} />
                    <Card.Body>
                        {/* <Card.Title>{name} </Card.Title> */}
                        <Card.Title>{title} </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Course;