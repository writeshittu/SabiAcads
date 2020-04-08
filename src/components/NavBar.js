import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

class NavBar extends React.Component{

    render(){
        return(
            <Navbar fixed="top"  bg="light" expand="lg">
            <Navbar.Brand href="#home"><img alt="logo" src="https://res.cloudinary.com/undercover/image/upload/v1586194287/VGG-Udemy_clone/logo_xiojdz.png" width="50px"/>Udemy-Clone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Coding For Business</Nav.Link>
                <Nav.Link href="#link">Teach on Udemy</Nav.Link>
                <Nav.Link href="/dashboard"> CartItem/> </Nav.Link>
                <Nav.Link href="#link"> WishList/> </Nav.Link>
                <Nav.Link href="#link">Notification</Nav.Link>
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2"> HTML & CSS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> SASS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> JavaScript</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">PHP</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Python</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4"> Explore More</NavDropdown.Item>
                </NavDropdown>
                <a href="./login" className="ba pa2 bg-animate light-grey hover-bg-light-green">Login</a>
                <a href="./signin" className="ba pa2 bg-animate light-grey hover-bg-light-green">Sign Up</a>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search for Courses" className="ml-sm-2 bn" />
                <Button variant="outline-success"><i class="fa fa-search fa-search"></i></Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavBar;