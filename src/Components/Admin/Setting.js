import React, { Component } from 'react';
import { SideNav } from './SideNav';
import SettingsNav from "./Settings/SettingsNav";
import Contact from "./Settings/Contact";
import Feedback from "./Settings/Feedback";
import ProductSales from "./Settings/ProductSales";
import Profile from "./Settings/Profile";
import {connect} from "react-redux";
import { 
	deleteSingleFeedback,
	deleteBulkContact,
	deleteSingleContact,
	deleteBulkFeedback 
} from "../Store/Action";


class Setting extends Component {
constructor(props) {
	super(props);
	this.state={
		component:null,
		view:null,
		reply:null,
		boxChecked:false

	}
}

componentDidMount() {
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


handleReadAllContact=()=> {
	let id = [];
	let boxes = document.getElementsByClassName("box");
	if(this.state.boxChecked) {
		for(let i=0; i<boxes.length; i++) {
			id.push(boxes[i].id);
		}
	}else {
		alert("this cant take place");
	}
	
}

handleSingleReadContact=(e)=> {
	alert(e.target.id)
}

handleReadAllFeedback=()=> {
	let id = [];
	let boxes = document.getElementsByClassName("box");
	if(this.state.boxChecked) {
		for(let i=0; i<boxes.length; i++) {
			id.push(boxes[i].id);
		}
	}else {
		alert("this cant take place");
	}
	console.log(id);
}

handleSingleReadFeedback=(e)=> {
	alert(e.target.id)

}



handleContactBulkDelete=()=> {
	let id = [];
	let boxes = document.getElementsByClassName("box");
	if(this.state.boxChecked) {
		for(let i=0; i<boxes.length; i++) {
			id.push(boxes[i].id);
			
		}
	}else {
		alert("this cant take place");
	}
	
}

handleContactSingleDelete=(e)=> {
	e.preventDefault();
	alert(e.target.id)

}

handleFeedbackSingleDelete=(e)=> {
	alert(e.target.id);
}

handleFeedbackDeleteBulk=()=> {
let id = [];
	let boxes = document.getElementsByClassName("box");
	if(this.state.boxChecked) {
		for(let i=0; i<boxes.length; i++) {
			id.push(boxes[i].id);
		}
	}else {
		alert("this cant take place");
	}
	console.log(id);
}

handleView=(e)=> {
	this.setState({view:e.target.id})
}

handleReply=(e)=> {
this.setState({reply:e.target.id})
}

handleChange=(e)=> {
	this.setState({component:e.target.id})
}

handleSubmit=(e)=> {
alert(this.state.reply);
}
	render() {
		let component=null;
		if(this.state.component ==="contact"){
			component=(<Contact 
				handleView={this.handleView}
				view={this.state.view}
				reply={this.state.reply}
				handleReply={this.handleReply}
				handleSubmit={this.handleSubmit}
				handleCheckBoxes={this.handleCheckBoxes}
				handleContactBulkDelete={this.handleContactBulkDelete}
				handleContactSingleDelete={this.handleContactSingleDelete}
				handleReadAllContact={this.handleReadAllContact}
				handleSingleReadContact={this.handleSingleReadContact}
				/>);
		}else if(this.state.component ==="feedback"){
			component=(<Feedback
				handleView={this.handleView}
				view={this.state.view}
				reply={this.state.reply}
				handleReply={this.handleReply}
				handleSubmit={this.handleSubmit}
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
			component=(<Contact 
				handleView={this.handleView}
				view={this.state.view}
				reply={this.state.reply}
				handleReply={this.handleReply}
				handleSubmit={this.handleSubmit}
				handleCheckBoxes={this.handleCheckBoxes}
				handleContactBulkDelete={this.handleContactBulkDelete}
				handleContactSingleDelete={this.handleContactSingleDelete}
				handleReadAllContact={this.handleReadAllContact}
				handleSingleReadContact={this.handleSingleReadContact}

				/>);
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


export default  connect(null,{
	deleteSingleFeedback,
	deleteBulkContact,
	deleteSingleContact,
	deleteBulkFeedback 
})(Setting);