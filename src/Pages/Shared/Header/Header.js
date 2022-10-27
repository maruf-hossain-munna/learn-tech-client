import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const [theme, setTheme] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to='/' className='logo'>  Learn <span className='text-danger'>Tech</span></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link ><Link className='navLink mx-2' to='/'> Home</Link></Nav.Link>
                            <Nav.Link ><Link className='navLink mx-2' to='/courses'> Courses</Link></Nav.Link>
                            <Nav.Link> <Link to='/faq' className='navLink mx-2'>FAQ</Link> </Nav.Link>
                            <Nav.Link> <Link to='/blog' className='navLink mx-2'>Blog</Link> </Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link >
                                {/* <div>
                                    <Button onClick={() => setTheme('dark')}>Dark</Button>
                                </div> */}
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button onClick={handleLogOut} variant='outline-light'>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Nav>
                                                <Nav.Link ><Link className='navLink mx-2' to='/login'> Login</Link></Nav.Link>
                                                <Nav.Link> <Link to='/register' className='navLink mx-2'>Register</Link> </Nav.Link>
                                            </Nav>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                
                                    <Button 
                                        variant='outline-light'
                                        className='me-2'
                                        onClick={()=> setTheme(!theme)}>
                                            {theme ? 'Dark' : 'Light'}
                                    </Button>
                                
                                {
                                    user?.photoURL ?
                                        <Image
                                            Tooltip={user?.displayName}
                                            style={{ height: '40px' }}
                                            roundedCircle
                                            src={user?.photoURL}
                                        ></Image>
                                        :
                                        <FaUser  style={{fontSize:'30px', marginTop:'5px'}}/>
                                }
                            </Nav.Link>
                        </Nav>
                        <div className='d-block d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;