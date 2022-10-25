import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-50 p-4 mx-auto shadow-lg rounded-4 mt-lg-4'>
            <Form className='mb-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" className='w-100' type="submit">
                    Register
                </Button>

                <p>Have any account? please <Link to='/login'>Login</Link></p>

            </Form>

            <Button variant="outline-primary" className='w-100' >Continue with Google</Button>
            <Button variant="outline-dark" className='w-100 mt-3'>Continue with Github</Button>
        </div>
    );
};

export default Register;