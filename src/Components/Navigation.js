import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Navbar,NavbarBrand,NavItem, Container,NavbarToggler,Collapse,Nav } from 'reactstrap';
import { connect } from 'react-redux';
import { Logout } from './Store/Action';
const Navigation = (props) => {
const style={backgroundColor:'#1c2260',color:'white',margin:'10px',textDecoration:'none'};
const add = props.auth ? 'Create' : '';
const prod = props.auth ?(<Link to='/admin/products'  style={style}>Products</Link>): '';
const logout = props.auth? 'Logout': '';

return (
	<React.Fragment>
	<Navbar   dark expand="md" className="navbar-light" style={{backgroundColor:"#1c2260"}}>
   <NavbarBrand className='pa0 grow pointer' style={{color:'white'}}><Link className='navLink' to='/'><img className='navLogo'  src='images/helloWorld.jpg'/><em>HelloWorld</em></Link></NavbarBrand>
   <NavbarToggler  onClick={props.toggleNavbar} />
	   		<Collapse isOpen={!props.collapsed} navbar>
	   		<Container style={{marginLeft:'80%'}}>
            <Nav navbar>
	   		<NavItem>
	   			<Link to='/admin/add' style={{textDecoration:'none',color:'white',margin:'10px'}}>
	   				{add}
	   			</Link>
	   		</NavItem>
	   		<NavItem>
	   		{prod}
	   		</NavItem>
	   		<NavItem>
	   			<Link style={{textDecoration:'none',color:'white',margin:'10px'}} onClick={()=>{

					props.Logout();
					props.history.push('/admin');

	   			}}>
	   				{logout}
	   			</Link>
	   		</NavItem> 
			 </Nav>
			 </Container>
          </Collapse>
   </Navbar>
 
 
 </React.Fragment>
 )
}
function mapStateToProps(state) {
	return {
		auth:state.isAuthenticated,
	}
}
export default withRouter(connect(mapStateToProps,{Logout})(Navigation));

















         