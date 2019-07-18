import React, { Component } from 'react';
import Navigation from './Navigation';
import Products from './Products/Products';
import AdminProducts from './Admin/Products';
import AllCombined from './Payment/AllCombined';
import Login from './Admin/Login';
import Footer from './Footer';
import AddProduct from './Admin/AddProduct';
import Edit from './Admin/Edit';
import IsAthenticated from './IsAthenticated';
import { Link, Route, Switch } from 'react-router-dom';
import '../index.css';

class Layout extends Component {
	constructor() {
		super()
		this.state = {
			rout: '',
			collapsed:true,
		}
	}
	
	



	 toggleNavbar=()=>{
	
    this.setState({
      collapsed:!this.state.collapsed
      
    });
    
  }


	render() {
		return (
			<div>
				<Navigation  toggleNavbar={this.toggleNavbar} collapsed={this.state.collapsed}/>
				<Switch>
				<Route exact path='/' component={Products } />
				<Route  path='/purchase/:id' component={AllCombined } />
				<Route  path='/admin/products' component={IsAthenticated(AdminProducts)} />
				<Route  path='/admin/add' component={IsAthenticated(AddProduct)} />
				<Route  path='/admin/:id/edit' component={IsAthenticated(Edit)} />
				<Route  path='/admin' component={()=><Login />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}


export default Layout;
