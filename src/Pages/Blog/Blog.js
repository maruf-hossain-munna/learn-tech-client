import React from 'react';

const Blog = () => {
    return (
        <div className='mb-4'>
            <h2>this is blog page</h2>
            <h3> What is CORS?</h3>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            <br />

            <h3>Why are you using firebase? What other options do you have implement authentication?</h3>
            <p>
                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                And it is too much easy for me, That's why i using firebase.
                <br /> <br />
                Other options i have implement authentication -
                <ul>
                    <li>Biometric authentication.</li>
                    <li>Token-based authentication..</li>
                </ul>

            </p>

            <h3>How does the private route?</h3>
            <p>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>

            <h3>What is Node? How does Node work?</h3>
            <p>
                As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
                <br />
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

            </p>
        </div>
    );
};

export default Blog;