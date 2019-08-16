import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Create_panel,removeServerError,getUploads} from '../Store/Action';
import AddForm from './Add';
import { SideNav } from './SideNav';

class AddProduct extends Component {
	constructor(props) {
 		super(props);
 		this.state={
 			title:'',
 			description:'',
 			stock:'',
 			price:'',
 			image:null,
 			license:'',
 			keys:'',
 			error:false,
			success:false,
			serverError:false,
			isImage:false,
			file:null,
			dropdownOpen: false
 		}
 	}

		componentDidMount() {
			this.props.removeServerError();
			 this.props.getUploads().then(()=> {
			 	if(this.props.errorFromServer)
               		return this.setState({isImage:false}); 
               	return this.setState({isImage:true})
            })
		}


  toggle=()=>{
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }




	handleSubmit=(e)=> {
		e.preventDefault();
		window.scrollTo(0, 0); 
		const {title,description,stock,price,keys,file}=this.state;
		if(!title || !description || !stock || !price || !keys) {
			return this.setState({...this.state,error:true,success:false});	
		}
		this.props.removeServerError();
		this.props.Create_panel({title,description,stock,price,keys,file}).then(()=>{
			if(this.props.errorFromServer){
				return this.setState({
					...this.state,
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
				file:'',
				success:true,
				error:false
	
			});
	
		})	

		}

	handleInput=(e)=> {
		if(e.target.name === 'license') {
				const arr = e.target.value.split(/[\n\s]/gi);
				this.setState({
				...this.state,
				keys:arr,
				[e.target.name]:e.target.value,
				})
			}else {
				this.setState({
					...this.state,
					[e.target.name]:e.target.value
				})
				
			}
		
	}	

	selectInput=(e)=> {
		this.setState({
			...this.state,
			file:e.target.src
		})
	}


	handleImage=(e)=> {
		this.setState({
			...this.state,
			image:e.target.files[0],
		})
		
	}

	focus=()=> {
		this.setState({...this.state,error:false,success:false,serverError:false})
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
			<div style={{display:'flex'}}>
			<SideNav />
			<div style={{flex:'1'}}>

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
				handleImage={this.handleImage}
				Images={this.props.images}
				isImage={this.state.isImage}
				selectInput={this.selectInput}
				toggle={this.toggle}
				dropdownOpen={this.state.dropdownOpen}
				file={this.state.file}
			/>
			</div>
			</div>
		);
	}
}

const mapStateToProps=(state)=> {

	return {
		errorFromServer:state.isError,
		images:state.uploadedFiles
	}
}

export default connect(mapStateToProps,{Create_panel,getUploads,removeServerError})(AddProduct);