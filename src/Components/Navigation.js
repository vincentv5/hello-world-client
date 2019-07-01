import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,NavbarBrand, Nav, NavItem, Container, } from 'reactstrap';

const Navigation = () => (
 <div>
        <Navbar className="  navigation__navbar " light expand="md" style={{backgroundColor:"#1c2260"}}>
        <Container>
        <NavbarBrand className='pa0 grow pointer' style={{color:'white'}}><h4><em>HelloWorld</em></h4></NavbarBrand>
            
        </Container>
        </Navbar>
      </div>
)


export default Navigation;