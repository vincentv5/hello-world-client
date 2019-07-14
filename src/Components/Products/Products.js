import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,NavbarBrand, Nav, NavItem, Container, } from 'reactstrap';
import Cards from  './Cards';
import Header from './Header';
const Products = () => {
	  return (
	<div className="">
		<Header />
		<div className="Container main">
			<div className="styling1 mt5">
				<Cards />
			</div>
		</div>

	</div>
	)
}
export default Products;