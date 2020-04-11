import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Login from "./googleLogin";
import 'font-awesome/css/font-awesome.min.css';

class NavBar extends React.Component{

    render(){
        return(
            <Navbar  bg="light-green" expand="lg">
            <Navbar.Brand href="./"><img alt="logo" src="https://res.cloudinary.com/undercover/image/upload/v1586194287/VGG-Udemy_clone/logo_xiojdz.png" width="50px"/>Udemy-Clone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Search for Courses" className="ml-sm-2 bn" />
                    <Button variant="outline-success"><i class="fa fa-search fa-search"></i></Button>
                </Form>
                <Nav className="ml-auto">
                <Nav.Link href="./">Coding For Business</Nav.Link>
                <Nav.Link href="./">Teach on Udemy</Nav.Link>
                <Nav.Link href="#link"><i class="fa fa-heart fa-heart"></i></Nav.Link>
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#"> HTML & CSS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> SASS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> JavaScript</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">PHP</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Python</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4"> Explore More</NavDropdown.Item>
                </NavDropdown>
                <Login/>
                </Nav>
               
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavBar;