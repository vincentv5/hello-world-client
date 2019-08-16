import React from 'react';
import {connect} from "react-redux";
import ContactModal from '../Patials/ContactModal';
import MessageModal from './MessageModal';
import FaTrash from 'react-icons/lib/fa/trash';
import FaAt from 'react-icons/lib/fa/at';
import FaUser from 'react-icons/lib/fa/user';
import TableRow from './TableRow';
import TableRow2 from './TableRow2';
const Contact=(props)=> {
	const tr = props.contact
	?props.contact.sort((a,b)=>{
		const d1 = new Date(a.createdAt).getTime();
		const d2 =new Date(b.createdAt).getTime();
		return d2-d1;

	}).map((val)=>{
		const now =new Date(val.createdAt);
		const year =now.getFullYear();
		const day = now.getDay();
		const month=now.getMonth();
		const hour=now.getHours();
		const mins= now.getMinutes();	    
	if(!val.isChecked) {
		return (
				<TableRow 
				key={val._id}
				id={val._id}
				bgcolor={styles.bgcolor}
				email={val.email}
				name={val.name}
				link={styles.link}
				handleView={props.handleContactView}
				handleReply={props.handleReply}
				handleSingleDelete={props.handleContactSingleDelete}
				handleReadContact={props.handleSingleReadContact}
				month={month}
				year={year}
				day={day}
				hour={hour}
				mins={mins}
				target={'#modalSubscriptionForm'}
				/>
			)
	}
	else {
		return (
				<TableRow2 
				key={val._id}
				id={val._id}
				bgcolor2={styles.bgcolor2}
				email={val.email}
				name={val.name}
				link={styles.link}
				handleContactView={props.handleContactView}
				handleReply={props.handleReply}
				handleContactSingleDelete={props.handleContactSingleDelete}
				handleSingleReadContact={props.handleSingleReadContact}
				month={month}
				year={year}
				day={day}
				hour={hour}
				mins={mins}
				target={'#modalSubscriptionForm'}
				/>
			)
	}
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
					value="mark all as read"
					onClick={props.handleReadAllContact}
					
					/>
				</th>
			</tr>
			 </thead>
			 <tbody>
				{tr}
			 </tbody>
		  </table>
		  <ContactModal {...props} />
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
	},
bgcolor:{
	backgroundColor:"#ebe8e8",
	

},
bgcolor2:{
	backgroundColor:"white",
	

}
}
export default connect(mapStateToProps,null)(Contact);



