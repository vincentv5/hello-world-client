import React from 'react';
import {connect} from "react-redux";
import FormModal from '../Patials/FormModal';
import MessageModal from './MessageModal';
import FaTrash from 'react-icons/lib/fa/trash';
import FaAt from 'react-icons/lib/fa/at';
import FaUser from 'react-icons/lib/fa/user';

const Feedback =(props)=> {
	const tr = props.feedback
	?props.feedback.map((val)=>{
		return (
				<tr key={val._id}>
					<td className="td pointer"><h6>{val.email}</h6></td>
					<td className="td">{val.name}</td>
					<td style={styles.link} 
					className="td pointer"   
					data-toggle="modal" 
					data-target="#MessageModal" 
					id={val.message} 
					onClick={props.handleView}>
					view
					</td>
					<td style={styles.link} 
					className="td pointer"   
					data-toggle="modal" 
					data-target="#modalSubscriptionForm"
					id={val.email} 
					onClick={props.handleReply}>
					reply
					</td>
					<td className="td pointer"></td>
					<td className="td"><input type="checkbox" className="box" id={val._id}/></td>
					<td className="td" >
					<button className="btn btn-danger"  onClick={props.handleFeedbackSingleDelete} id={val._id}>
						X
					</button>
					</td>
					<td className="td">
					<input 
					onClick={props.handleSingleReadFeedback} 
					type="button" className="btn btn-primary"  
					value="unread" id={val._id}/>
					</td>
				</tr>
			)
	}):null;

		return (
		<div className="table-responsive">
		  <table className="table">
		  <thead>
			<tr>	
				<th className="th"><FaAt  style={styles.icon}/></th>
				<th className="th"><FaUser style={styles.icon}/></th>
				<th className="th"></th>
				<th className="th"></th>
				<th className="th">Time</th>
				<th className="th">
				<input type="checkbox" onClick={props.handleCheckBoxes}/>
				</th>
				<th className="th">
					<FaTrash style={styles.icon} onClick={props.handleFeedbackDeleteBulk}/>
				</th>
				<th className="th">
					<input 
					type="button" 
					className="btn btn-primary"  
					value="unread"
					onClick={props.handleReadAllFeedback}
					/>
				</th>
			</tr>
			</thead>
			<tbody>
				{tr}
			</tbody>
		  </table>
		    <FormModal {...props} />
			<MessageModal {...props}/>
		</div>
		);

}
const mapStateToProps=(state)=> {
return {
	feedback:state.feedbacks
}
}

const styles={
	link:{
		color:"blue"

	},
	icon:{
		fontSize:"25px",
		fontWeight:"bold"
	}
}

export default connect(mapStateToProps,null)(Feedback);
