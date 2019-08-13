import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Register_user,removeServerError} from '../Store/Action';
import FaUser from 'react-icons/lib/fa/user';

class Register extends Component {
 	constructor(props) {
 		super(props);
 		this.state={
 			email:'',
 			password:'',
 			error:false,
			serverErr:false,
            token:false,
            success:false
        
 		}
 	}

 
	handleSubmit=(e)=> {
		e.preventDefault();
		const { email, password} = this.state;
		if(!email || !password) {
			return this.setState({...this.state,error:true,success:false,isDeleted:false});
        }
        this.props.removeServerError();
        this.setState({success:true});
		this.props.Register_user({email,password}).then(()=>{
            if(this.props.errorFromServer) {
                return this.setState({error:false,serverErr:true,success:false});
            }
            this.setState({error:false,success:false});
			this.props.history.push('/admin');
			
		})
			
		
		
	}


	handleInput=(e)=> {
		this.setState({
			...this.state,
			[e.target.name]:e.target.value
		})
	}	

	focus=()=> {
		this.setState({...this.state,error:false,success:false,isDeleted:false,serverErr:false})
	}


	render() {
		const label ={
			fontWeight:"bold",
			fontSize:"15px"
		}
		const { email , password}=this.state;
		const error = this.state.error;
		const err = error ? 'danger' : ''
		const errMessage = error ? (<div className='col-sm-5 m-auto alert alert-danger tc'>all fields are required</div>)  : ''
        const serverErr = this.state.serverErr ? (<div className='tc col-sm-5 m-auto alert alert-danger'>{'Only administrator is allow !!'}</div>)  : '';
        const isSuccess = this.state.success ? true : false;
		return (
			<div className='container main'>
			<br />
				{errMessage}{serverErr}
				<main className="pa5  mw6 center br3 " >
				<header className='sidebar-header br3 mw6 '>
				<h6 className='ml2' style={{color:'white'}}>Good day Mr Palito</h6>
				</header>
				  <form style={{backgroundColor:'#F8F8F8'}} className='shadow-1 br3 pt5' onSubmit={this.handleSubmit}>
				  <h5 className='text-center' ><span className='pa2'  style={{fontSize:'30px',borderRadius:'100%',border:'2px solid #1c2260'}}><FaUser /></span></h5>
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label style={label} className="fw6 lh-copy f5 font" htmlFor="email-address">Email</label>
						<input onFocus={this.focus} onChange={this.handleInput}  className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="email" name="email"  id="email-address" value={email}/>
					  </div>
					  <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Password</label>
						<input onFocus={this.focus} onChange={this.handleInput}  className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="password" name="password"  id="password" value={password} />
					  </div>

					</fieldset>
					<div>
					  <button disabled={isSuccess} style={{backgroundColor:'#1c2260',color:'white'}} className=" btn form-control br4" type="submit">Register</button>
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



export default withRouter(connect(mapStateToProps,{Register_user,removeServerError}) (Register));