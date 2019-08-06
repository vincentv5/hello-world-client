import React from 'react';
import IoIosClose from 'react-icons/lib/io/close';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import FaDollarSign from 'react-icons/lib/fa/dollar';



const SideBar =(props)=> {
return (

<div className='col-sm-3'>
	<header className='sidebar-header'>
		<h6 className='ml2' style={{color:'white'}}>About</h6>
	</header>
	<article>
	<br/>
		<h5 className='tc' 
		style={{fontWeight:'bold',color:"#1c2260"}}>
		<FaDollarSign 
		style={{fontSize:'18',marginBottom:"5px"}}/>
		{`${props.state.clientAmount}`}</h5>
		<p className='tc'>{`(${props.state.numOfItems}`}<IoIosClose style={{fontSize:'13px',textAlign:'center',margin:'4px'}}/>{`${props.state.clientAmount})`}</p>
		<div>
		<br />
			{props.handleDanamic()}	
		</div>
		<br />

		<div className='tc'>
			<FaMinus style={props.spanMinus} className='pointer' onClick={props.handleMinus}/>
				{props.state.numOfItems}
			<FaPlus style={props.spanPlus} className='pointer' onClick={props.handlePlus}/>
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
			<div style={props.stock}></div>

			<span >{props.state.stock}</span>

			</div>
		</div>	
	</article>
</div>
			
		);
	}




export default SideBar;