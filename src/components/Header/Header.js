import React, { useContext} from 'react';
import logo from '../../utilities/logos/Group 1329.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Container,
    Button
  } from "react-bootstrap";
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
      <Container className="navContainer">
        <Navbar  collapseOnSelect expand="lg">
          <Link to="/home"><Navbar.Brand><img className="logo" src={logo} alt="logo"/></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form inline className="mr-auto">
              <FormControl type="text" variant='dark' placeholder="Search...." className="search-bar" />
              <Button variant="outline-dark">Search</Button>
            </Form>
            <Nav>
              <Link to="/home" className="mt-3 mr-3 link">Home</Link>
              <Link to="/activities"className="mt-3 mr-3 link">Events</Link>
              
              {
                loggedInUser.isSignedIn?<p className="btn btn-primary mt-2 mr-2">{loggedInUser.name}</p>:<Link to="/login"><button className="btn btn-primary mt-2 mr-2">Register</button></Link>
              }
              {
                loggedInUser.isSignedIn && <Link to="/login"><button className="btn btn-secondary mt-2 mr-2" onClick={()=>{setLoggedInUser({})}}>Log Out</button></Link>
              }
              <Link to="/admin"><button className="btn btn-secondary mt-2 mr-2">Admin</button></Link>
              
              
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
    );
};

export default Header;