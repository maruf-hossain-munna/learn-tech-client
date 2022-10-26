import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {  GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const {providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = (provider) =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => console.error(error))
    }


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

            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='w-100' > <FaGoogle> </FaGoogle>  Continue with Google</Button>
            <Button variant="outline-dark" className='w-100 mt-3'><FaGithub />  Continue with Github</Button>
        </div>
    );
};

export default Login;