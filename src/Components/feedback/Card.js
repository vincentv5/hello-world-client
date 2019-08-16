import React from 'react';
import {withRouter } from 'react-router-dom';
const Card=(props)=>{
	const card =props.feedbacks?props.feedbacks.map((val,i)=> (
		<div  
		key={val._id} 
		className = "rounded  pa1 center  mb3 pointer" 
		style={styles.card}>
			<p className='tc'>{val.message}</p>

		</div> 
)):''; 

	return (
			<React.Fragment>
			{card}
			</React.Fragment>

		)
}


const styles={
	card:{
		width:300, 
		height:150,
		backgroundColor:'#9e1061',
		
	}
}

export default withRouter(Card);