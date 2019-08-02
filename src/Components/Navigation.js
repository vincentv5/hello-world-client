import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MdEject from 'react-icons/lib/md/eject';
import FaPlus from 'react-icons/lib/fa/plus';
import MdEllipsisMenu from 'react-icons/lib/md/keyboard-control';
import {Navbar,NavbarBrand,NavItem, Container,NavbarToggler,Collapse,Nav } from 'reactstrap';
import { connect } from 'react-redux';
import { Logout } from './Store/Action';
const Navigation = (props) => {
const style={backgroundColor:'#1c2260',marginLeft:'15px',color:'white',fontSize:'20px',fontWeight:'bold',textDecoration:'none'};
const add = props.auth ? 'Admin' : '';
const prod = props.auth ?(<Link to='/admin/products'  style={style}><MdEllipsisMenu /></Link>): '';
const logout = props.auth? "Logout": '';

return (
	<React.Fragment>
	<Navbar   dark expand="md" className="navbar-light" style={{backgroundColor:"#1c2260"}}>
   <NavbarBrand className='pa0 grow pointer' style={{color:'white'}}><img className='navLogo'  src='images/helloWorld.jpg'/><em>HelloWorld</em></NavbarBrand>
   <NavbarToggler  onClick={props.toggleNavbar} />
	   		<Collapse isOpen={!props.collapsed} navbar>
	   		<Container style={{marginLeft:'80%'}}>
            <Nav navbar>
             <NavItem>
            	<Link to='/' style={{marginLeft:'15px',textDecoration:'none',color:'white',fontSize:'15px',fontWeight:'bold'}}>
            		Home
            	</Link>
            </NavItem>
            <NavItem>
            	<Link to='/admin/products' style={{marginLeft:'15px',textDecoration:'none',color:'white',fontSize:'15px',fontWeight:'bold'}}>
            		{add}
            	</Link>
            </NavItem>
	   		<NavItem>
	   			<Link to='' className='pointer' style={{marginLeft:'15px',textDecoration:'none',color:'white',fontSize:'15px',fontWeight:'bold'}} onClick={()=>{
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

















         