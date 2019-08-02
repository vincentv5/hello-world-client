import React, { Component } from 'react';
import Navigation from './Navigation';
import Products from './Products/Products';
import AdminProducts from './Admin/Products';
import Details from './Payment/Details';
import Payment from './Payment/Payment';
import Paypal from './Payment/Paypal';
import Login from './Admin/Login';
import Register from './Admin/Register';
import Footer from './Footer';
import AddProduct from './Admin/AddProduct';
import Edit from './Admin/Edit';
import IsAthenticated from './IsAthenticated';
import { Link, Route, Switch } from 'react-router-dom';
import '../index.css';
import { Get_panels} from './Store/Action';
import Contact from './Contact';
import { connect } from 'react-redux';
import Upload from './Admin/Upload';

class Layout extends Component {
	constructor() {
		super()
		this.state = {
			rout: '',
			collapsed:true,
		}
	}
	
	componentDidMount() {

	this.props.Get_panels();
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
				<Route exact path='/' component={Products} />
				<Route  path='/purchase/:id' component={Details} />
				<Route  path='/purchase' component={Payment} />
				<Route  path='/paypal/purchase' component={Paypal} />
				<Route  path='/admin/products' component={IsAthenticated(AdminProducts)} />
				<Route  path='/admin/add' component={IsAthenticated(AddProduct)} />
				<Route  path='/admin/:id/edit' component={IsAthenticated(Edit)} />
				<Route  path='/contact' component={Contact } />
				<Route  path='/register' component={Register } />
				<Route  path='/admin' component={()=><Login />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default connect(null,{Get_panels})(Layout);
