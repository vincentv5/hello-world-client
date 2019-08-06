import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Contact_us,removeServerError } from './Store/Action'; 
 class Contact extends Component {
	constructor(props) {
 		super(props);
 		this.state={
 			email:'',
 			email:'',
 			message:'',
 			error:false,
			serverErr:false,
            success:false,
            isDisabled:false,
 		}
 	}

 
	handleSubmit=(e)=> {
		e.preventDefault();
		const { email, name, message} = this.state;
		if(!email || !name || !message) {
			return this.setState({...this.state,error:true,success:false});
        }
        this.props.removeServerError();
        this.setState({isDisabled:true});
		this.props.Contact_us({email,name,message}).then(()=>{
            this.setState({...this.state,isDisabled:false});
            if(this.props.errorFromServer) {
                return this.setState({...this.state,error:false,serverErr:true});
            }
            this.setState({
	            name:'',
	 			email:'',
	 			message:'',
            	error:false,
            	success:true
            });
		})
			
		
		
	}


	handleInput =(e) => {
		this.setState({
			...this.state,
			[e.target.name]:e.target.value
		})
		
	}

	handleFocus=()=> {
		this.setState({...this.state,error:false,success:false})
	}


	render() {
		const label ={
			fontWeight:"bold",
			fontSize:"15px"
		}
		const disable = this.state.isDisabled? 'true' : 'false';
		const { name , email, message} = this.state;
		const error = this.state.error;
		const err = error ? 'danger' : ''
		const errMessage = error ? (<div className='col-sm-7 m-auto alert alert-danger'>all fields are required</div>)  : ''
		const success = this.state.success?(<div className='col-sm-7 m-auto alert alert-success'>you message has been sent !</div>): '';
		const serverErr = this.state.serverErr?(<div className='col-sm-7 m-auto alert alert-success'>ooopss something went trying to contact <br /> please trying again !</div>): '';
		return (
			<div>
			<br />
				{errMessage}{success}{serverErr}
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
						<textarea maxLength='300' onFocus={this.handleFocus} onChange={this.handleInput} rows="7" className={`${err}  br3 pa2 input-reset ba bg-transparent   w-100`}  name="message"  value={message}/>
					  </div>
					</fieldset>
					<div>
					  <button disable={disable} style={{backgroundColor:'#1c2260',color:'white'}} className="btn form-control br3" type="submit">Send</button>
					</div>
				  </form>
			</main>

			</div>
		);
	}
}

const mapStateToProps=(state)=> {
	return {
		errorFromServer:state.isError
	}
}
export default connect(mapStateToProps,{Contact_us,removeServerError})(Contact);