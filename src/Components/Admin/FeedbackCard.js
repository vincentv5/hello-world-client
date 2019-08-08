import React from 'react';
import FormModal from './FormModal';

const FeedbackCard =(props)=> {
	const card =props.feedbacks.map((val,i)=> (
		<FormModal 
		message={val.message}
		id={val._id}
		key={val._id}
		/>
	
		
	))

	return (
			<React.Fragment>
	
			{card}
			</React.Fragment>

		)
}


export default FeedbackCard;
