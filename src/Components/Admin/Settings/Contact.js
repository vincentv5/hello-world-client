import React from 'react';
import {connect} from "react-redux";
import FormModal from '../Patials/FormModal';
import MessageModal from './MessageModal';
import FaTrash from 'react-icons/lib/fa/trash';
import FaAt from 'react-icons/lib/fa/at';
import FaUser from 'react-icons/lib/fa/user';




const Contact=(props)=> {
	const tr = props.contact
	?props.contact.map((val)=>{
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
					<td className="td"  >
					<button className="btn btn-danger"  onClick={props.handleContactSingleDelete} id={val._id}>
						X
					</button>
					</td>
					<td className="td">
					<input 
					type="button" 
					className="btn btn-primary"  
					value="unread"
					id={val._id}
					onClick={props.handleSingleReadContact}
					/>
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
				<input  type="checkbox" onClick={props.handleCheckBoxes}/>
				</th>
				<th className="th" onClick={props.handleContactBulkDelete}>
					<FaTrash style={styles.icon}/>
				</th>
				<th className="th">
					<input type="button" 
					className="btn btn-primary"  
					value="unread"
					onClick={props.handleReadAllContact}
					
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
		)
}

const mapStateToProps=(state)=> {
return {
	contact:state.contacts
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
export default connect(mapStateToProps,null)(Contact);



