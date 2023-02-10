import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap"
import logo from "../../images/circle.png"
const Header = () => {
  return (
   <Navbar className="header" expand="lg">
     <Container>
       <Navbar.Brand className="wrapper">
         <div className="image">
           <img src={logo} alt=""/>
           <h3>k</h3>
         </div>
         <div className="project-name">
           <h4>kindka finance</h4>
         </div>
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
         <Nav.Link className="finance-calculator">Calculator</Nav.Link>
         <Nav.Link className="finance-calculator">Services</Nav.Link>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  )
}

export default Header