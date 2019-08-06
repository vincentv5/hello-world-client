import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';



const Card =(props)=> {
		//mapping through panels and dispplaying thenm all
	const panel =props.panel.map((val,i)=> {
		return (
		<Link key={val._id} className = "links2 pa2 center pb3  grow   mb5 pointer" style={{ width:250, height:"auto" }}  to={`/admin/${val._id}/edit`}>
			<div className=' panel-image'>
				<img alt="" src={val.image} style ={{width:250, height:100}}/>
			</div>
			<br />
			<h6 className='font tc'>{val.title}</h6>
			<div className='pricing'>
				<p className='first'>${val.price}</p>
				<p style={{width:'20px',height:'20px',borderRadius:'100%',border:'2px solid pink'}}></p>
				<p style={{marginLeft:'2px'}}>{val.stock}</p>
			</div>
		</Link> 
		);
	});

	return (
		<React.Fragment>
		{ panel }
		</React.Fragment>
		
		
	)
}



export default withRouter(Card);