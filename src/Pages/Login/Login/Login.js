import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 p-4 mx-auto shadow-lg rounded-4 mt-lg-4'>
            <Form className='mb-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" className='w-100' type="submit">
                    Login
                </Button>

                <p>New User? please <Link to='/register'>Register</Link></p>

            </Form>

        </div>
    );
};

export default Login;