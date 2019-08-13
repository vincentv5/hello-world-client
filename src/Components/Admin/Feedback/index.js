import React from 'react';
import FormModal from '../Patials/FormModal';
const Feedback=(props)=> {
	const card =props.feedbacks.map((val,i)=> (
        <div 
	        id={val.email} 
	        onClick={props.getUniqueUserId} 
	        key={val._id} 
	        data-toggle="modal" data-target="#modalSubscriptionForm" 
	        className="rounded  pa2 tc  mb3 pointer"  
	        style={styles.card}
        	>
          <p 
          	style={{color:'white'}}
         	 className="rounded mb-4" 
          	>
           {val.message}
          </p>

        </div>
	))

return (
	<React.Fragment>
	{card}
	<FormModal {...props}/>
	</React.Fragment>

)

}

	


const styles={
	card:{
		marginTop:'4px',
		marginLeft:'auto',
		marginRight:'auto',
		width:300, 
		minHeight:'100vh',
		backgroundColor:'#9e1061',
		
	}
}	



export default Feedback;
