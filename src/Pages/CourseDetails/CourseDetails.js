import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, title, price, description, img, category_id } = course;
    console.log(course);
    return (
        <div className='mx-5 px-4 '>
            <Card className='py-4 w-50 mb-5'  >
                <Card.Img variant="top" className='w-50 mx-auto' src={img} />
                <Card.Body>
                    <h2 className='text-danger'>{name} </h2>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='d-flex justify-content-between text-primary mb-2'>
                        <h4>Price: </h4>
                        <h4>{price}$ </h4>
                    </div>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Go Back Categories News</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;