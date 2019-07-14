import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Login_user } from '../Store/Action';

class Login extends Component {
 	constructor(props) {
 		super(props);
 		this.state={
 			email:'',
 			password:'',
 		}
 	}

 
	handleSubmit=(e)=> {
		console.log('handled');
		e.preventDefault();
		const { email, password} = this.state;
		this.props.Login_user(this.state);

		this.props.history.push('/admin/products');
	}

	handleInput=(e)=> {
		this.setState({
			[e.target.name]:e.target.value
		})
	}	
	render() {
		const { email , password}=this.state;
		return (
			<div className='container main'>
			<br />
			<br />
				<header className='sidebar-header col-sm-6 m-auto'>
				<h6 className='ml2' style={{color:'white'}}>Good day Mr Palito</h6>
				</header>
				<br />
				<h5 className='text-center'>Login to your account</h5>
				<br />
				<main className="pa2  mw6 center mt2 shadow-1 br3 sh">
				  <form onSubmit={this.handleSubmit}>
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="email-address">Email</label>
						<input onChange={this.handleInput}  className="pa2 input-reset ba bg-transparent   w-100" type="email" name="email"  id="email-address" value={email}/>
					  </div>
					  <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">Password</label>
						<input onChange={this.handleInput}  className="pa2 input-reset ba bg-transparent   w-100" type="password" name="password"  id="password" value={password} />
					  </div>

					</fieldset>
					<div>
					  <button style={{backgroundColor:'#1c2260',color:'white'}} className="btn form-control" type="submit">Login</button>
					</div>
				  </form>
			</main>

			</div>
		);
	}
}





export default withRouter(connect(null,{Login_user}) (Login));