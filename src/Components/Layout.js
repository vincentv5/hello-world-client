import React, { Component } from 'react';
import Navigation from './Navigation';
import Products from './Products/Products';
import Footer from './Footer';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state={

		}
	}


	render() {
		return (
			<div>
				<Navigation />
				<Products /> 
				<Footer />
			</div>
		);
	}
}


export default Layout;
