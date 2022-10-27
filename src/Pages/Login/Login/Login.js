import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {  GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const {providerLogin, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    

    const handleGoogleSignIn = (provider) =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true})
            })
            
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }


    return (
        <div onSubmit={handleSubmit} className='form-width p-4 mx-auto shadow-lg rounded-4 mt-lg-4'>
            <Form className='mb-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" className='w-100' type="submit">
                    Login
                </Button>
                {
                    error ?
                    <p className='text-danger'>Your password or email is incorrect.</p>
                    :
                    ''
                }

                <p>New User? Please <Link to='/register'>Register</Link></p>

            </Form>

            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='w-100' > <FaGoogle> </FaGoogle>  Continue with Google</Button>
            <Button onClick={handleGithubSignIn} variant="outline-dark" className='w-100 mt-3'><FaGithub />  Continue with Github</Button>
        </div>
    );
};

export default Login;