import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Create_panel } from '../Store/Action';

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
 		
 		}
 	}

 
	handleSubmit=(e)=> {
		e.preventDefault();
		const {title,description,stock,price,keys}=this.state;
		if(!title || !description || !stock || !price || !keys) {
			this.setState({error:true,success:false});
			return;
		}
		this.props.Create_panel({title,description,stock,price,keys}).then(()=>{
		}).catch(()=> {
		this.setState({error:true,success:false});
		});
			this.setState({
			title:'',
 			description:'',
 			stock:'',
 			price:'',
 			image:'',
 			license:'',
 			keys:'',
 			success:true,
		});	
		window.scrollTo(0, 0);
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
		this.setState({error:false,success:false})
	}
	render() {
		const error = this.state.error;
		const {title,description,stock,price,image,id ,license} = this.state;
		const err = error ? 'danger' : ''
		const success = this.state.success?(<div className='col-sm-5 m-auto alert alert-success'>you have successfully added a package</div>): '';
		const errMessage = error ? (<div className='col-sm-5 m-auto alert alert-danger'>all fields are required</div>)  : ''
		return (
			<div>
			<br />
			<br />
			<header className='sidebar-header col-sm-5 m-auto'>
				<h6 className='ml2' style={{color:'white'}}>Add new package</h6>
			</header>
			<br />
			{errMessage}{success}
			<main className="pa2  mw6 center mt2  shadow-1 br3 sh">
				  <form  onSubmit={this.handleSubmit}>
				  
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="email-address">Title</label>
						<input onFocus={this.focus} onChange={this.handleInput}   className={`${err} pa2 input-reset ba bg-transparent   w-100`} type="text" name="title"  id="title"  value={title}/>
					  </div>
					  <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">Description</label>
						<textarea onFocus={this.focus} onChange={this.handleInput}   className={`${err} pa2 input-reset ba bg-transparent   w-100`} name="description"  id="description" value={description} />
					  </div>

					   <div className="mt3">
						<label className="fw6 lh-copy f6 font" htmlFor="Name">Stock</label>
						<input onFocus={this.focus} onChange={this.handleInput} className={` ${err} pa2 input-reset ba bg-transparent   w-100`} type="number" name="stock"  id="stock" value={stock}/>
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
					</fieldset>
					<div>
					  <button style={{backgroundColor:'#1c2260',color:'white'}} className="btn form-control" type="submit">Add package</button>
					</div>
				  </form>
			</main>
			</div>
		);
	}
}

export default connect(null,{Create_panel})(AddProduct);