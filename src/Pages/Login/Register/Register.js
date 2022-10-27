import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import { Profiler } from 'react';

const Register = () => {
    const [error, setError] = useState('');
    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = (provider) => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
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
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateProfile(name, photoURL)
                setError('');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleUpdateProfile = (name, photoURL) =>{
        const profile = {
            displayName : name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }


    return (
        <div className='form-width p-4 mx-auto shadow-lg rounded-4 mt-lg-4'>
            <Form className='mb-4' onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" className='w-100' type="submit">
                    Register
                </Button>
                <p className='text-danger'>{error} </p>

                <p>Have any account? Please <Link to='/login'>Login</Link></p>

            </Form>

            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='w-100' > <FaGoogle> </FaGoogle>  Continue with Google</Button>
            <Button onClick={handleGithubSignIn} variant="outline-dark" className='w-100 mt-3'><FaGithub />  Continue with Github</Button>
        </div>
    );
};

export default Register;