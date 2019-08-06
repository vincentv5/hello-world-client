import React from 'react';
import { Link,withRouter } from 'react-router-dom';
const Card=(props)=>{
	const card =props.feedbacks.map((val,i)=> (
		<div  
		key={val._id} 
		className = "rounded  pa1 center  mb5 pointer" 
		style={{ width:300, height:"auto",backgroundColor:'#9e1061',color:'white' }}>

			<p className='tc'>{val.message}</p>

		</div> 
))

	return (
			<React.Fragment>
			{card}
			</React.Fragment>

		)
}

export default withRouter(Card);