import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => (

<div className = " pa2 center pb3 shadow-4 grow   mb5 pointer" style={{ width:250, height:"auto" }}>
		<Link className='links2'>
			<div className='pa3 panel-image'>
				<img alt="" src ='' style ={{width:250, height:'auto'}}/>
			</div>
			<br />
			<h6 className='font tc'>something herer!!</h6>
			<div className='pricing'>
				<p className='first'>$300</p>
				<p style={{width:'20px',height:'20px',borderRadius:'100%',border:'2px solid pink'}}></p>
				<p>50</p>
			</div>
		</Link> 
</div>

)
	

export default Card;