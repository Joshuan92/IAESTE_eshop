import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Logo from './../../../public/img/iaeste_ikariera.png';
import { BrowserRouter as Switch,
  Route,
  Link } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <section id="nav-bar">
       <nav className="navbar navbar-expand-lg navbar-light" color="light" expand="md">
        <Link to='/' className="navbar-brand"><img src={ Logo }/></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link to='/events' className="nav-link">Events</Link>
            </NavItem>
            <NavItem>
            <Link to='/career' className="nav-link">Career fairs</Link>
            </NavItem>
            <NavItem>
            <Link to='/internship' className="nav-link">Internships</Link>
            </NavItem>
            <NavItem>
            <Link to='/freshman' className="nav-link">Freshman guide</Link>
            </NavItem>
            <NavItem>
            <Link to='/partnership' className="nav-link">Partnership</Link>
            </NavItem>
            <NavItem>
            <Link to='/projectinfo' className="nav-link">Project information</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
      </section>
  );
}


export default Navigation;