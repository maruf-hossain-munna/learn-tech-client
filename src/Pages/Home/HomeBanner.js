import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

const HomeBanner = () => {
    return (
        <div className='home-banner py-5 text-center text-white'>
            <div className='mx-auto my-5 img-fluid'>
                <h2>Welcome to our Learn Tech </h2>
                <p>Hey Welcome to our site. This is very helpful for you, if you interested in tech learn.
                    <br></br>
                    Today's world is all about tech. So you need to know technology. 
                </p>
                <Button variant="primary"> Get Started</Button>
            </div>
        </div>
    );
};

export default HomeBanner;