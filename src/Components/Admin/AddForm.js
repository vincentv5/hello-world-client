import React from 'react';
const AddForm=(props)=>{
	const {serverErr,handleFocus, handleInput, handleSubmit,state,error,label,errMessage,err,success,focus} = props;
	const {title,description,stock,price,image,id ,license}=state;
		return (
			<div>
			<br />
			{errMessage}{success}{serverErr}
			<main className="pa2  mw7 center mt2 br2 sh">
			<header className='sidebar-header mw7 br2'>
				<h6 className='ml2' style={{color:'white'}}>Add new package</h6>
			</header>
				  <form className='br2 shadow-2'  onSubmit={handleSubmit} style={{backgroundColor:'#F8F8F8'}}>
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					 <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="email-address">Title</label>
						<input onFocus={handleFocus} onChange={handleInput}   className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="text" name="title"  id="title"  value={title}/>
					  </div>
					  <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Description</label>
						<textarea onFocus={handleFocus} onChange={handleInput}   className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} name="description"  id="description" value={description} />
					  </div>

					   <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Stock</label>
						<input onFocus={handleFocus} onChange={handleInput} className={` ${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="number" name="stock"  id="stock" value={stock}/>
					  </div>

					   <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Price</label>
						<input onFocus={handleFocus} onChange={handleInput} className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="number" name='price'  id="stock" value={price}/>
					  </div>

					   <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Image</label>
						<input onFocus={handleFocus} onChange={handleInput} className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="file" name="image"  id="image" value={image} />
					  </div>

					  <div className="mt3">
						<label style={label} className="fw6 lh-copy f6 font" htmlFor="Name">Keys</label>
						<textarea rows='5' onFocus={handleFocus} onChange={handleInput} className={`${err} br3 pa2 input-reset ba bg-transparent   w-100`} type="text" name="license"  id="license" value={license}/>
					  </div>
					</fieldset>
					<div>
					  <button style={{backgroundColor:'#1c2260',color:'white'}} className="btn form-control br3" type="submit">Enter</button>
					</div>
				  </form>
			</main>
			</div>
		);
	
}
export default AddForm;