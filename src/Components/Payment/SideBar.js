import React, { Component } from 'react';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import IoIosClose from 'react-icons/lib/io/close';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';


 const SideBar =(props)=> {
 		const alertMessage = props.state.err? {border:'2px solid red'} : {border:''};
		const {handlefocus,moveBack, submitEmail,handleChange,handleInput,state,handleMinus,handlePlus } = props;
		const stock ={borderRadius:'100%',width:'18px',height:'18px',border:'2px solid pink',marginRight:'2px'};
		const spanDiv ={borderRadius:'2px',display:'flex',flexDirection:'row',padding:'3px',backgroundColor:'#1c2260'};
		const spanMinus = {fontSize:'20px',fontWeight:'bold',margin:'4px',padding:'4px'};
		const spanPlus ={fontSize:'20px',fontWeight:'bold',margin:'4px',padding:'4px'};
		const span2={marginLeft:'70%',padding:'2px',fontWeight:'bold',fontSize:'20px',color:'white'};
		const span1={marginLeft:'7%',padding:'2px',fontWeight:'bold',fontSize:'20px',color:'white'};
		const DanamicChange =state.toggle ? (<button onClick={handleChange} className='btn form-control' style={{backgroundColor:'#1c2260',color:'white'}}>
		purchase
		</button>):(
		<div>
		<label htmlFor ='email'>Email address</label>
		<input 
		onFocus ={handlefocus} 
		style={alertMessage} 
		onChange={handleInput} 
		type='email' 
		className='form-control' 
		placeholder='email address'
		/>

		<div style={spanDiv}>
		<span 
		style={span1} 
		className='pointer tc' 
		onClick={moveBack}>
		<FaAngleLeft />
		</span>

		<span 
		style={span2} 
		className='pointer tc' 
		onClick={submitEmail}>
		<FaAngleRight />
		</span>

		</div>
		</div>
		)

return (

<div className='col-sm-3'>
	<header className='sidebar-header'>
		<h6 className='ml2' style={{color:'white'}}>About</h6>
	</header>
	<article>
	<br/>
		<h5 className='tc' style={{fontWeight:'bold'}}>{`NGN ${state.clientAmount}`}</h5>

		<p className='tc'>{`(${state.numOfItems}`}<IoIosClose style={{fontSize:'13px',textAlign:'center',margin:'4px'}}/>{`${state.clientAmount})`}</p>
		<div>
		<br />
			{DanamicChange}	
		</div>
		<br />

		<div className='tc'>
			<FaMinus style={spanMinus} className='pointer' onClick={handleMinus}/>
				{state.numOfItems}
			<FaPlus style={spanPlus} className='pointer' onClick={handlePlus}/>
		</div>

		<br />

		<div style={{display:'flex',flexDirection:'row'}}>
			<p style={{flex:'1',marginLeft:'5px'}}>Seller</p>
			<p style={{marginRight:'5px',fontWeight:'bold'}}><em>HelloWorld</em></p>
		</div>
		<br />
		<div style={{display:'flex',flexDirection:'row'}}>
			<p style={{flex:'1',marginLeft:'5px'}}>Stock</p>
			<div style={{marginRight:'5px', display:'flex',flexDirection:'row'}}>
			<div style={stock}></div>

			<span >{state.stock}</span>

			</div>
		</div>	
	</article>
</div>
			
		);
	}




export default SideBar;