import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";



const ref = React.createRef();

const CourseDetails = () => {

    const course = useLoaderData();
    const { id, name, title, price, description, img, category_id } = course;
    console.log(course);


    const checkOut = () => {
        alert('Check out successful')
    }

    return (
        <div className='mx-lg-5 px-lg-4 course-details'>
            <Card className='py-4  mb-5' ref={ref}>
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
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Link to={`/courses/${category_id}`}>
                                <Button variant="primary">Back to categories course</Button>
                            </Link>
                        </div>

                        <div>
                            <Link to='/courses'>
                                <Button onClick={checkOut} > Check Out </Button>
                            </Link>
                        </div>
                    </div>

                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button variant="outline-dark"
                         onClick={toPdf}
                         className='mt-3 w-100 font-semibold'
                         >Download PDF File</Button>}
                    </Pdf>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;