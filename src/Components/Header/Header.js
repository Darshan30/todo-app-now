import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import AuthenticationService from '../Login/AuthenticationService';


class Header extends Component {

    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();



        return (

            <Navbar bg="dark" expand="lg" style={{boxShadow:"0 4px 50px 0 rgba(0,0,0,0.4)"}}>
                <Navbar.Brand ><Link to="/welcome/darshan">Todo App</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {isUserLoggedIn && <Nav.Link ><Link to="/welcome/darshan">Home</Link></Nav.Link>}
                        {isUserLoggedIn && < Nav.Link > <Link to="/todos">Todos</Link></Nav.Link>}
                        {!isUserLoggedIn && <Nav.Link ><Link to="/login">Login</Link></Nav.Link>}

                        {isUserLoggedIn && < Nav.Link > <Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></Nav.Link>}


                    </Nav>

                </Navbar.Collapse >
            </Navbar >
        );
    }

}

export default withRouter(Header);
