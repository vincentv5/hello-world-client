import React, { Component } from 'react';
import Navigation from './Navigation';
import Products from './Products/Products';
import AdminProducts from './Admin/Products';
import Upload from './Admin/Upload';
import Details from './Payment/Details';
// import AdminFeedbacks from './Admin/AdminFeedbacks';
// import AdminContact from './Admin/AdminContact';
import Payment from './Payment/Payment';
import Paypal from './Payment/Paypal';
import Login from './Admin/Login';
import Register from './Admin/Register';
import SendFeedback from './SendFeedback';
import Footer from './Footer';
import AddProduct from './Admin/AddProduct';
import Edit from './Admin/Edit';
import Dashboard from './Admin/Dashboard';
import IsAthenticated from './IsAthenticated';
import { Route, Switch} from 'react-router-dom';
import '../index.css';
import { Get_panels} from './Store/Action';
import Contact from './Contact';
import Feedback from './feedback';
import { connect } from 'react-redux';
import NotFound from "./NotFound";
import Setting from "./Admin/Setting";


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
				<Route  path='/admin/dashboard' component={IsAthenticated(Dashboard)} />
				<Route  path='/admin/settings' component={IsAthenticated(Setting)} /> 
				<Route  path='/feedbacks' component={Feedback } />
				<Route  path='/admin/medias' component={Upload} />
				<Route  path='/register' component={Register } />
				<Route  path='/feedback' component={SendFeedback} />
				<Route  path='/admin' component={()=><Login />} />
				<Route path="*" render={() => <NotFound />}/>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default connect(null,{Get_panels})(Layout);
