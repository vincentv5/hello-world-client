import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { Get_feedbacks,Reply_feedback } from '../Store/Action';
import Feedback from './Feedback';

class AdminFeedbacks extends Component {
	constructor(props){
		super(props);
		this.state={
			loading:true,
			message:'',
			id:null
		}
	}

	componentDidMount() {
		this.props.Get_feedbacks().then(()=> {
			this.setState({...this.state,loading:false});
		});
	}

	getUniqueUserId=(e)=> {
		this.setState({
			email:e.target.id
		})

	}

	handleSubmit=()=> {
		const {message,email}=this.state;
		if(!message || !email) {
			this.props.Reply_feedback(message,email).then(()=>{
			return this.setState({
			message:'',
			email:null,
			success:true,
			failure:false
		})
		})
	}
		
			return this.setState({
			message:'',
			email:null,
			success:true,
			failure:false
		})
		
		
	}

	handleChange=(e)=> {
		this.setState({
			message:e.target.value,
		})
	}


	render() {
		const success=this.state.success?true:false;
		const failure=this.state.failure?true:false;
		const isCard = this.state.loading?(<Spinner loading={this.state.loading} size={60}/>)
		:(<Feedback 
			feedbacks={this.props.feedbacks}
			handleChange={this.handleChange}
			handleSubmit={this.handleSubmit}
			state={this.state}
			getUniqueUserId={this.getUniqueUserId}
			failure={failure}
			success={success}
			/>);
		return (
			<div style={{display:"flex"}}>
			<SideNav />
			<div style={{flex:"1"}}>
				<div className="main">
					<div className="styling2 mt5">
					{isCard}
			
					</div>
			</div>
			</div>
		</div>
			)
		}

	}
	 
const mapStateToProps=(state)=> {
	return {
		feedbacks:state.feedbacks
	}
}
export default connect(mapStateToProps,{Get_feedbacks,Reply_feedback})(AdminFeedbacks);



























