import React from 'react';
import FormModal from '../Patials/FormModal';
const Contact =(props)=> {
	const card =props.Contacts.map((val,i)=>{
	const message=val.message.split("").slice(0,100).join("");
	console.log(message);
		return(
        <div 
	        id={val.email} 
	        onClick={props.getUniqueUserId} 
	        key={val._id} 
	        data-toggle="modal" data-target="#modalSubscriptionForm" 
	        className="rounded  pa2  mb3 pointer"  
	        style={styles.card}
        	>
        	<h5 className="tc" style={{color:"white"}}>{val.name}</h5>
          <p 
          	style={{color:'white'}}
         	 className=" rounded mb-4" 
          	>
           {message}
          </p>

        </div>
	)})

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
		minHeight:'100pvh',
		backgroundColor:'#9e1061',
		
	}
}	



export default Contact;