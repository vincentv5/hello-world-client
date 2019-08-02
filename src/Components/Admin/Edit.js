import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { confirmAlert } from 'react-confirm-alert'; 
import {SideNav }from './SideNav';
import { Update_panel, Delete_panel, removeServerError } from '../Store/Action';
import EditForm from './EditForm';
 class Edit extends Component {
	constructor(props) {
 		super(props);
 		this.state={
 			title:'',
 			description:'',
 			stock:'',
 			keys:'',
 			license:'',
 			price:'',
 			image:'',
 			id:'',
 			isDeleted:false,
 			error:false,
 			success:false,
 			isClicked:false
 		
 		}
 	}
	 
	 componentDidMount() {
	 	//initializing  and getting values out of panel and updating the state
	 	const panel =this.props.panel;
	 	console.log(panel);
	 	if(panel.length!== 0) {
	 	const idx = this.props.match.params.id;
	 	const results = panel.filter((val,i)=>val._id === idx );
	 	const { title, description , stock ,price, image,id,licensekey,_id} = results[0]
	 	const keyToString = licensekey.toString();
	 	this.setState({
			title:title,
 			description:description,
 			stock:stock,
 			price:price,
 			image:image,
 			license:keyToString,
 			id:_id,
 			keys:licensekey,


	 	})
	 	}
	 		
	 }
 
	handleSubmit=(e)=> {
		// submiting update
		e.preventDefault();
		confirmAlert(
		{
		  title: 'update',
		  message: 'Are you sure you want to update this package !!',
		  buttons: [
		    {
		      label: 'Yes',
		      onClick: () =>{
				window.scrollTo(0, 0);
			    this.setState({isClicked:true});
			    const {title,description,stock,price,keys,id,image}=this.state; 
			    if(!title || !description || !stock || !price || !keys || !id) {
			       return this.setState({error:true,success:false,isDeleted:false,isClicked:false})   
				}
				removeServerError();
			    this.props.Update_panel({title,description,stock,price,keys,image,id})
			    .then(()=>{
					if(this.props.errorFromServer) {
						return this.setState({
							success:false,
							error:false,
							serverError:true,
						})
					}
			      return this.setState({
			      title:'',
			      description:'',
			      stock:'',
			      price:'',
			      image:'',
			      keys:'',
			      license:'',
			      success:true,
				  error:false,
				  serverError:false,
			      isClicked:false,
			      id:''
			    });
     		}) 
		   }
		    },
		    {
		      label: 'No',
		      onClick: () =>{
		      	return;
		      }
		    }
		  ],
		 
});

			


	}

	handleInput=(e)=> {
		if(e.target.name === 'license') {
			const arr = e.target.value.split(/[\n\s]/gi);
			this.setState({
			[e.target.name]:e.target.value,
			keys:arr
			});
		}else {
			this.setState({
			[e.target.name]:e.target.value
		})

		}
		
	}

	handleDelete=()=> {
		confirmAlert(
		{
		  title: 'delete',
		  message: 'Are you sure you want to delete this package',
		  buttons: [
		    {
		      label: 'Yes',
		      onClick: () =>{
				   	window.scrollTo(0, 0);
				   	if(!this.state.id) {
				   	return this.setState({error:true,success:false,isDeleted:false})
					   }
					   removeServerError();
					if(this.props.errorFromServer) {
						return this.setState({
							success:false,
							error:false,
							serverError:true,
						})
					}
				   	this.setState({isClicked:true});
					return this.props.Delete_panel(this.state.id).then(()=> {
				   	this.setState({
					title:'',
						description:'',
						stock:'',
						price:'',
						image:'',
						keys:'',
						license:'',
						isDeleted:true,
						error:false,
						isClicked:false,
					});
				   	})

		      }
		    },
		    {
		      label: 'No',
		      onClick: () =>{
		      	return;
		      }
		    }
		  ],
});









   
  }

	focus=()=> {
		//handling focus in and focus out
		this.setState({error:false,success:false,isDeleted:false,serverError:false})
	}

	render() {
		//errors , success setups
		const label ={
			fontWeight:"bold",
			fontSize:"15px",
			marginLeft:"5px"
		}
		const isClicked = this.state.isClicked? true : false;
		const error = this.state.error;
		const isDeleted = this.state.isDeleted ?(<div className='col-sm-5 m-auto alert alert-success tc'>you have successfully deleted a package</div>):'' 
		const {title,description,stock,price,image,id,license } = this.state;
		const err = error ? 'danger' : ''
		const success = this.state.success?(<div className='col-sm-5 m-auto alert alert-success tc'>you have successfully updated a package</div>): '';
		const errMessage = error ? (<div className='col-sm-5 m-auto alert alert-danger'>all fields are required</div>)  : '';
		const serverErr = this.state.serverError ? (<div className='col-sm-5 m-auto alert alert-danger tc'>{'oopss something went wrong performing this task !'}</div>)  : ''
		return (
		<div style={{display:'flex'}}>
		<SideNav />
		<div style={{flex:'1'}}>
			<EditForm 
					handleDelete={this.handleDelete}
					handleInput={this.handleInput}
					handleSubmit={this.handleSubmit}
					err={err}
					error={error}
					isDeleted={isDeleted}
					errMessage={errMessage}
					state={this.state}
					handleFocus={this.focus}
					label={label}
					success={success}
					serverErr={serverErr}
			/>
			</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		panel:state.data,
		errorFromServer:state.isError
	}
}

export default withRouter(connect(mapStateToProps,{Update_panel,Delete_panel})(Edit));
