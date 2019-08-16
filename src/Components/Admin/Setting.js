import React, { Component } from 'react';
import { SideNav } from './SideNav';
import SettingsNav from "./Settings/SettingsNav";
import Contact from "./Settings/Contact";
import Feedback from "./Settings/Feedback";
import ProductSales from "./Settings/ProductSales";
import Profile from "./Settings/Profile";
import {connect} from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; 

import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { 
	deleteSingleFeedback,
	deleteBulkContact,
	deleteSingleContact,
	deleteBulkFeedback,
	Get_feedbacks,
	Get_contacts,
	feedbackUpdateBulk,
	feedbackUpdateSingle,
	ReplyFeedback,
	Reply_contact,
	contactUpdateBulk,
	contactUpdateSingle,
	removeServerError,

} from "../Store/Action";


class Setting extends Component {
constructor(props) {
	super(props);
	this.state={
		component:null,
		view:null,
		boxChecked:false,
		message:"",
		replyId:null,
		res:null,
		

	}
}

componentDidMount() {
	this.props.Get_contacts().then(()=> {
	
	})
	this.props.Get_feedbacks().then(()=> {
		
	})
	this.setState({component:"contact"})
} 

handleCheckBoxes=(e)=> {
	let boxes = document.getElementsByClassName("box");
	if(e.target.checked !== false) {
		for(let i=0; i<boxes.length; i++) {
			boxes[i].checked=true
		}
		this.setState({boxChecked:true})
	
	}else {

		for(let i=0; i<boxes.length; i++) {
			boxes[i].checked=false
			this.setState({boxChecked:false})
		}

	}

}




//all contact events goes below there//
handleContactSingleDelete=(e)=> {
		if(e.target.id) {
		const id =e.target.id;
		this.props.deleteSingleContact(id).then(()=> {
			this.props.Get_contacts().then(()=> {
				
			})

		})
	}

}

handleContactView=(e)=> {
	const id =e.target.id;
	if(id){
		let ms =null;
		this.props.contact_message.map((val)=>val._id===id?ms=val.message:null);
		if(ms)
			this.setState({
			view:ms
			})
		this.props.contactUpdateSingle(id).then(()=>{
			this.props.Get_contacts().then(()=> {});
		})
	}

}

handleReadAllContact=()=> {
	let ids = [];
	let boxes = document.getElementsByClassName("box");
	if(this.state.boxChecked) {
		for(let i=0; i<boxes.length; i++) {
			ids.push(boxes[i].id);
		}
	}

	if(ids.length) {
		this.props.contactUpdateBulk(ids).then(()=>{
			this.props.Get_contacts().then(()=> {})
		})
	}
	
}

handleSingleReadContact=(e)=> {
	const id =e.target.id;
	if(id) {
		this.props.contactUpdateSingle(id).then(()=>{
			this.props.Get_contacts().then(()=> {});
		})
	}
}




handleContactBulkDelete=()=> {
confirmAlert({
    message: `are sure you want to perform this task.
    Note:this task is not reversible`,
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
			let ids = [];
			let boxes = document.getElementsByClassName("box");
			if(this.state.boxChecked) {
				for(let i=0; i<boxes.length; i++) {
					ids.push(boxes[i].id);
				}
			}else {

				return;
			}
			if(ids.length){
				this.props.deleteBulkContact(ids).then(()=> {
					this.props.Get_contacts().then(()=> {});
				})
			}
        }
      },
      {
        label: 'No',
        onClick: () =>false
      }
    ],
   
  });

	
}


handleSubmitReplyContact=()=> {
	const message=this.state.message;
	const id = this.state.replyId;
	if(message && id) {
		this.props.removeServerError();
		this.props.Reply_contact(message,id).then(()=>{
			if(!this.props.errorFromServer) {
			return this.setState({
				message:"",
				replyId:null,
				res:"success",
			})
		}else {
			return this.setState({
				res:"failed",
			})
		}
		})					
	}
}



//all feedback event goes below !!!!!


handleReadAllFeedback=()=> {
	let ids = [];
	let boxes = document.getElementsByClassName("box");
	if(this.state.boxChecked) {
		for(let i=0; i<boxes.length; i++) {
			ids.push(boxes[i].id);
		}
	}

	if(ids.length) {
		this.props.feedbackUpdateBulk(ids).then(()=>{
			this.props.Get_feedbacks().then(()=> {})
		})
	}
}

handleSingleReadFeedback=(e)=> {
	const id =e.target.id;
	if(id) {
		this.props.feedbackUpdateSingle(id).then(()=>{
			this.props.Get_feedbacks().then(()=> {});
		})
	}

}




handleFeedbackSingleDelete=(e)=> {
	if(e.target.id) {
		const id =e.target.id;
		this.props.deleteSingleFeedback(id).then(()=> {
			this.props.Get_feedbacks().then(()=> {
				
			})

		})
	}

}




handleFeedbackDeleteBulk=()=> {
confirmAlert({
    message: `are sure you want to perform this task.
    Note:this task is not reversible`,
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
			let ids = [];
			let boxes = document.getElementsByClassName("box");
			if(this.state.boxChecked) {
				for(let i=0; i<boxes.length; i++) {
					ids.push(boxes[i].id);
				}
			}else {
				return;
			}

			if(ids.length){
				this.props.deleteBulkFeedback(ids).then(()=> {
					this.props.Get_feedbacks().then(()=> {})
				})
			}
        }
      },
      {
        label: 'No',
        onClick: () =>false
      }
    ],
   
  });

}




handleFeedbackView=(e)=> {
	const id =e.target.id;
	if(id){
		let ms =null;
		this.props.feedback_message.map((val)=>val._id===id?ms=val.message:null);
		if(ms)
			this.setState({
			view:ms
			})
		this.props.feedbackUpdateSingle(id).then(()=>{
			this.props.Get_feedbacks().then(()=> {});
		})
	}
}




handleSubmitReplyFeedback=()=> {
	const message=this.state.message;
	const id = this.state.replyId;
	if(message && id) {
	this.props.removeServerError();
	this.props.ReplyFeedback(message,id).then(()=> {
	if(!this.props.errorFromServer) {
			return this.setState({
				message:"",
				replyId:null,
				res:"success",
			})
		}else {
			return this.setState({
				res:"failed",
			})
		}
	})
						
	}
}


//feedback ends here//


//handlechange for both feedback and contact
handleReply=(e)=> {
	this.setState({
		res:null,
		replyId:e.target.id
	})
}

handleChangeData=(e)=> {
	this.setState({
		message:e.target.value
	})
}





//component changing handle///
handleChange=(e)=> {
	this.setState({component:e.target.id})
}


	render() {
		let component=null;
		if(this.state.component ==="contact"){
			component=(<Contact 
				handleContactView={this.handleContactView}
				view={this.state.view}
				response={this.state.res}
				handleChangeData={this.handleChangeData}
				handleReply={this.handleReply}
				handleSubmitReplyContact={this.handleSubmitReplyContact}
				handleCheckBoxes={this.handleCheckBoxes}
				handleContactBulkDelete={this.handleContactBulkDelete}
				handleContactSingleDelete={this.handleContactSingleDelete}
				handleReadAllContact={this.handleReadAllContact}
				handleSingleReadContact={this.handleSingleReadContact}
				/>);
		}else if(this.state.component ==="feedback"){
			component=(<Feedback
				message={this.state.message}
				response={this.state.res}
				handleFeedbackView={this.handleFeedbackView}
				view={this.state.view}
				handleReply={this.handleReply}
				handleSubmitReplyFeedback={this.handleSubmitReplyFeedback}
				handleChangeData={this.handleChangeData}
				handleCheckBoxes={this.handleCheckBoxes} 
				handleFeedbackSingleDelete={this.handleFeedbackSingleDelete}
				handleFeedbackDeleteBulk={this.handleFeedbackDeleteBulk}
				handleReadAllFeedback={this.handleReadAllFeedback}
				handleSingleReadFeedback={this.handleSingleReadFeedback}
				/>);
		}else if(this.state.component ==="sales") {
			component=(<ProductSales />);
		}else if(this.state.component ==="profile"){
			component=(<Profile />);
		}else if(this.state.component ===null){
			component=null;
		}else {
			component='';
		}

		return (
		<div style={{display:"flex"}}>
			<SideNav />
		<div style={{flex:"1"}}>
				<div className="styling1 mt5">
				
					<SettingsNav handleChange={this.handleChange} state={this.state}/>
						{component}
			
				</div>
			
			</div>

		</div>
		);
	}
}
const mapStateToProps=(state)=> {
return {
	feedback_message:state.feedbacks,
	contact_message:state.contacts,
	errorFromServer:state.isError,

}
}
export default  connect(mapStateToProps,{
	deleteSingleFeedback,
	deleteBulkContact,
	deleteSingleContact,
	deleteBulkFeedback ,
	Get_feedbacks,
	Get_contacts,
	feedbackUpdateBulk,
	feedbackUpdateSingle,
	ReplyFeedback,
	Reply_contact,
	contactUpdateBulk,
	contactUpdateSingle,
	removeServerError
})(Setting);