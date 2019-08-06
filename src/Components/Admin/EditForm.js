import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const base_url = "http://localhost:3001";
const EditForm =(props)=> {
	const options =props.Images
	?props.Images.path.map((val)=> {
		return (	
		<DropdownItem key={val.path}>
			<img 
			onClick={props.selectInput} 
			width='50' 
			height='50' 
			src={`${base_url}/${val.path}`} alt=''
			/>
		</DropdownItem>
			)
	}):'';
	
	const { serverErr, handleFocus,label,err,isDeleted,success,errMessage, state,isClicked,handleInput,handleSubmit,handleDelete}=props;
	const {title,description,stock,price,id,license }=state
	return (
			<div>
			<br />
			{success}{errMessage}{isDeleted}{serverErr}
			<main className="pa2  mw7 center br2">

			<header className='sidebar-header mw7 m-auto br2' style={{display:"flex",justifyContent:'space-between'}}>
				<h6 style={{color:'white'}}>Edit package</h6>
				<button 
				disabled={isClicked} 
				onClick={handleDelete} 
				style={{color:'white',backgroundColor:'red'}} 
				className=" btn">{isClicked?'please wait...':'Delete'}
				</button>
			</header>

				  <form className='br2 shadow-2' style={{backgroundColor:"#F8F8F8"}} onSubmit={handleSubmit}>
				  
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label style={label} className={` fw6 lh-copy f6 font`} htmlFor="email-address">Title</label>
						<input onFocus={handleFocus} onChange={handleInput}   className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="text" name="title"  id="title"  value={title} />
					  </div>

					  <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Description</label>
						<textarea onFocus={handleFocus} onChange={handleInput}   className={` ${err} br3 pa2 input-reset ba bg-transparent   w-100`} name="description"  id="description" value={description} />
					  </div>

					   <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Stock</label>
						<input onFocus={handleFocus} onChange={handleInput} className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="number" name="stock"  id="stock" value={stock}/>
					  </div>

					   <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Price</label>
						<input onFocus={handleFocus} onChange={handleInput} className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="number" name='price'  id="stock" value={price}/>
					  </div>

					   <div className="mt1">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Image</label>
							<Dropdown direction="up" isOpen={props.dropdownOpen} toggle={props.toggle}>
					          <DropdownToggle>
							    select an image
							  </DropdownToggle>
							  <DropdownMenu
							    modifiers={style.modify}
							  >
							  {options}
							  </DropdownMenu>
							</Dropdown>
					  </div>

						<div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Keys</label>
						<textarea rows='5' onFocus={handleFocus} onChange={handleInput} className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="text" name="license"  id="license" value={license}/>
					  </div>
						<input type="hidden" name="id" value={id}/>
					</fieldset>
					<div>
					  <button disabled={isClicked} style={{backgroundColor:'#1c2260',color:'white'}} className=" btn br3 form-control col-sm-12" type="submit">{isClicked?'please wait..':'Update'}</button> 
					</div>
				  </form>
				  
			</main>
			</div>
		)
}

const style={
	modify:{
	setMaxHeight: {
	enabled: true,
	order: 890,
	fn: (data) => {
	  return {
	    ...data,
	    styles: {
	      ...data.styles,
	      overflow: 'auto',
	      maxHeight: 300,
	    },
	  };
	},
	},
	}
}
export default EditForm;