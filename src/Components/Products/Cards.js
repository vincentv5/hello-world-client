import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Card = ({panel}) =>{
	const card = panel.map((val,i)=> (
		<Link key={i} className = "links2 pa2 center pb3  grow   mb5 pointer" style={{ width:250, height:"auto" }}  to={`/purchase/${val.id}`}>
			<div className='pa3 panel-image'>
				<img alt="" src ={val.image} style ={{width:250, height:'auto'}}/>
			</div>
			<br />
			<h6 className='font tc'>{val.title}</h6>
			<div className='pricing'>
				<p className='first'>${val.price}</p>
				<p style={{width:'20px',height:'20px',borderRadius:'100%',border:'2px solid pink'}}></p>
				<p style={{marginLeft:'2px'}}>{val.stock}</p>
		</div>
	</Link> 
))

	return (
			<React.Fragment>
			{card}
			</React.Fragment>

		)

} 
		
		
const mapStateToProps=(state)=> {
	return {
		panel:state.data
	}
}
	

export default withRouter(connect(mapStateToProps,null)(Card));