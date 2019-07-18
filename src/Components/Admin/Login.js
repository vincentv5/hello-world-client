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
 			error:false,
 			success:false,
 			serverErr:false,
 		}
 	}

 
	handleSubmit=(e)=> {
		e.preventDefault();
		const { email, password} = this.state;
		if(!email || !password) {
			return this.setState({error:true,success:false,isDeleted:false});
		}

		this.props.Login_user({email,password}).then(()=>{
			this.props.history.push('/admin/products');
			return this.setState({error:false,success:true,isDeleted:false});
		}).catch(()=> {
			return this.setState({error:true,success:false,isDeleted:false,serverErr:true});
		})
		
	}

	handleInput=(e)=> {
		this.setState({
			[e.target.name]:e.target.value
		})
	}	

	focus=()=> {
		this.setState({error:false,success:false,isDeleted:false})
	}


	render() {
		const { email , password}=this.state;

		const error = this.state.error;
		const err = error ? 'danger' : ''
		const errMessage = error ? (<div className='col-sm-5 m-auto alert alert-danger'>all fields are required</div>)  : ''
		const serverErr = this.state.serverErr ? (<div className='col-sm-5 m-auto alert alert-danger'>untrusted credentials ..</div>)  : ''


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
				{errMessage}{serverErr}
				<main className="pa2  mw6 center mt2 shadow-1 br3 sh">
				  <form onSubmit={this.handleSubmit}>
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="email-address">Email</label>
						<input onFocus={this.focus} onChange={this.handleInput}  className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="email" name="email"  id="email-address" value={email}/>
					  </div>
					  <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">Password</label>
						<input onFocus={this.focus} onChange={this.handleInput}  className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="password" name="password"  id="password" value={password} />
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