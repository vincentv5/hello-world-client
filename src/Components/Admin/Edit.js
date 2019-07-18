import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Update_panel, Delete_panel } from '../Store/Action';

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
 			success:false
 		
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
		const {title,description,stock,price,keys,id}=this.state;	
		console.log(title,description,keys);
		if(!title || !description || !stock || !price || !keys || !id) {
			return this.setState({error:false,success:false,isDeleted:false})

		}
		
		this.props.Update_panel({title,description,stock,price,keys,id})
		.then(()=>{
			return this.setState({error:false,success:true,isDeleted:false})
		}).catch(()=>{
			return this.setState({error:false,success:false,isDeleted:false})
		});
		this.setState({
			title:'',
 			description:'',
 			stock:'',
 			price:'',
 			image:'',
 			keys:'',
 			license:'',
 			success:true,
 			error:false
		});
		window.scrollTo(0, 0);
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

	focus=()=> {
		//handling focus in and focus out
		this.setState({error:false,success:false,isDeleted:false})
	}

	render() {
		//errors , success setups
		const error = this.state.error;
		const isDeleted = this.state.isDeleted ?(<div className='col-sm-5 m-auto alert alert-success'>you have successfully deleted a package</div>):'' 
		const {title,description,stock,price,image,id,license } = this.state;
		const err = error ? 'danger' : ''
		const success = this.state.success?(<div className='col-sm-5 m-auto alert alert-success'>you have successfully updated a package</div>): '';
		const errMessage = error ? (<div className='col-sm-5 m-auto alert alert-danger'>all fields are required</div>)  : ''
		return (
			<div>
			<br />
			<br />
			<header className='sidebar-header col-sm-5 m-auto'>
				<h6 className='ml2' style={{color:'white'}}>Edit package</h6>
			</header>
			<br />
			{success}{errMessage}{isDeleted}
			<main className="pa2  mw6 center mt2 shadow-1 br3 sh">
				  <form onSubmit={this.handleSubmit}>
				  
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label className={` fw6 lh-copy f6 font`} htmlFor="email-address">Title</label>
						<input onFocus={this.focus} onChange={this.handleInput}   className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="text" name="title"  id="title"  value={title} />
					  </div>

					  <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">Description</label>
						<textarea onFocus={this.focus} onChange={this.handleInput}   className={` ${err} pa2 input-reset ba bg-transparent   w-100`} name="description"  id="description" value={description} />
					  </div>

					   <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">Stock</label>
						<input onFocus={this.focus} onChange={this.handleInput} className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="number" name="stock"  id="stock" value={stock}/>
					  </div>

					   <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">Price</label>
						<input onFocus={this.focus} onChange={this.handleInput} className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="number" name='price'  id="stock" value={price}/>
					  </div>

					   <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">image</label>
						<input onFocus={this.focus} onChange={this.handleInput} className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="file" name="image"  id="image" value={image} />
					  </div>

						<div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">licenseKeys</label>
						<textarea onFocus={this.focus} onChange={this.handleInput} className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="text" name="license"  id="license" value={license}/>
					  </div>

					  <div className="mt3">
						<input className={`pa2 input-reset ba bg-transparent   w-100`} type="hidden" name="id" value={id}/>
					  </div>

					</fieldset>
					<div>
					  <button style={{backgroundColor:'#1c2260',color:'white'}} className="btn form-control col-sm-12" type="submit">update</button> 
					</div>
				  </form>
				   <button onClick={
				   	()=> {
				   	console.log(id);
				   	this.props.Delete_panel(id).then(()=> {
				   		return this.setState({error:false,success:false,isDeleted:true})
				   	}).catch(()=>{
				   		return this.setState({error:false,success:false,isDeleted:false})
				   	});
				   	this.setState({
					title:'',
		 			description:'',
		 			stock:'',
		 			price:'',
		 			image:'',
		 			keys:'',
		 			license:'',
		 			success:true,
		 			error:false
				});
				   	window.scrollTo(0, 0);
				   }} style={{color:'white',backgroundColor:'red'}} className="btn form-control col-sm-12">delete</button>
			
			</main>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		panel:state.data
	}
}
export default withRouter(connect(mapStateToProps,{Update_panel,Delete_panel})(Edit));
