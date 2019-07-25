import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
 class Contact extends Component {
	constructor(props) {
		super(props);
		this.state= {
			name:'',
			email:'',
			message:'',
			error:false,
 			success:false,
 			
		}
	}


	handleSubmit=(e)=> {
		e.preventDefault();
		const { email, name, message} = this.state;
		if(!email || !name || !message) {
			return this.setState({
				error:true
			})
		}

		this.setState({
			success:true
		})

	}

	handleInput =(e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
		
	}

	handleFocus=()=> {
		this.setState({error:false,success:false})
	}


	render() {
		const label ={
			fontWeight:"bold",
			fontSize:"15px"
		}

		const { name , email, message} = this.state;
		const error = this.state.error;
		const err = error ? 'danger' : ''
		const errMessage = error ? (<div className='col-sm-7 m-auto alert alert-danger'>all fields are required</div>)  : ''
		const success = this.state.success?(<div className='col-sm-7 m-auto alert alert-success'>you message has been sent !</div>): '';
		return (
			<div>
			<br />
				{errMessage}{success}
				<main className="pa2 mw7 center mt2 br3 sh">
				<header className='sidebar-header mw7  br3' style={{display:'flex',justifyContent:'space-between'}}>
				<h6 className='ml2' style={{color:'white'}}>Leave us a message</h6>
				<Link className='btn' to='/' style={{backgroundColor:'grey', textDecoration:'none',color:"white",fontSize:"15px"}}>profile</Link>
				</header>
				  <form onSubmit={this.handleSubmit} className='br3 shadow-2'   style={{backgroundColor:'#F8F8F8'}}>
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label style={label}  className="fw6 lh-copy f6 font" htmlFor="email-address">Name</label>
						<input onFocus={this.handleFocus} onChange={this.handleInput}  className={`${err}  br3 pa2 input-reset ba bg-transparent   w-100`} type="text" name="name"  id="title"  value={name}/>
					  </div>

					 <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="email-address">Email</label>
						<input onFocus={this.handleFocus} onChange={this.handleInput} className={`${err}  br3 pa2 input-reset ba bg-transparent   w-100`} type="email" name="email"  id="title"  value={email}/>
					  </div>

					   
					  <div className="mt3">
						<label style={label}  className="fw6 lh-copy f6 font" htmlFor="Name">Message</label>
						<textarea onFocus={this.handleFocus} onChange={this.handleInput} rows="7" className={`${err}  br3 pa2 input-reset ba bg-transparent   w-100`}  name="message"  value={message}/>
					  </div>
					</fieldset>
					<div>
					  <button style={{backgroundColor:'#1c2260',color:'white'}} className="btn form-control br3" type="submit">Send</button>
					</div>
				  </form>
			</main>

			</div>
		);
	}
}

export default Contact;