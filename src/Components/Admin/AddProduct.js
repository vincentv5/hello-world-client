import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Create_panel,removeServerError } from '../Store/Action';
import AddForm from './AddForm';

 class AddProduct extends Component {
	constructor(props) {
 		super(props);
 		this.state={
 			title:'',
 			description:'',
 			stock:'',
 			price:'',
 			image:'',
 			license:'',
 			keys:'',
 			error:false,
			success:false,
			serverError:false
 		
 		}
 	}


	handleSubmit=(e)=> {
		e.preventDefault();
		window.scrollTo(0, 0);
		const {title,description,stock,price,keys,image}=this.state;
		if(!title || !description || !stock || !price || !keys) {
			return this.setState({error:true,success:false});	
		}
		removeServerError();
		this.props.Create_panel({title,description,stock,price,keys,image}).then(()=>{
			if(this.props.errorFromServer){
				return this.setState({
					success:false,
					error:false,
					serverError:true
				})
			}
			return this.setState({
				title:'',
				description:'',
				stock:'',
				price:'',
				image:'',
				license:'',
				keys:'',
				success:true,
				error:false
	
			});
	
		})	

		}

	handleInput=(e)=> {
		if(e.target.name === 'license') {
				const arr = e.target.value.split(/[\n\s]/gi);
				console.log(arr);
				this.setState({
				keys:arr,
				[e.target.name]:e.target.value
			
				})
			}else {
				this.setState({
					[e.target.name]:e.target.value
				})
				
			}
		
	}	

	focus=()=> {
		this.setState({error:false,success:false,serverError:false})
	}
	render() {
		const label ={
			fontWeight:"bold",
			fontSize:"15px",
			marginLeft:"5px"
		}
		const error = this.state.error;
		const err = error ? 'danger' : ''
		const success = this.state.success?(<div className='col-sm-5 m-auto alert alert-success tc'>you have successfully added a package</div>): '';
		const errMessage = error ? (<div className='col-sm-5 m-auto alert alert-danger tc'>all fields are required</div>)  : '';
		const serverErr = this.state.serverError ? (<div className=' tc col-sm-5 m-auto alert alert-danger'>ooopss something went wrong adding package ..</div>)  : ''
		return (
			<AddForm 
				handleInput={this.handleInput}
				handleSubmit={this.handleSubmit}
				label={label}
				error={error}
				state={this.state}
				err={err}
				success={success}
				errMessage={errMessage}
				handleFocus={this.focus}
				serverErr={serverErr}
			/>
		);
	}
}

const mapStateToProps=(state)=> {

	return {
		errorFromServer:state.isError
	}
}

export default connect(mapStateToProps,{Create_panel})(AddProduct);