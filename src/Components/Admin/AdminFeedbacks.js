import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { Get_feedbacks } from '../Store/Action';
import FeedbackCard from './FeedbackCard';

class AdminFeedbacks extends Component {
	constructor(props){
		super(props);
		this.state={
			loading:true
		}
	}

	componentDidMount() {
		this.props.Get_feedbacks().then(()=> {
			this.setState({...this.state,loading:false});
		});
	}


	render() {
		const isCard = this.state.loading?(<Spinner loading={this.state.loading} size={60}/>)
		:(<FeedbackCard  {...this.props}/>);
		return (
			<div style={{display:"flex"}}>
			<SideNav />
			<div style={{flex:"1"}}>
				<div className="Container main">
					<div className="styling1 mt5">
						
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
export default connect(mapStateToProps,{Get_feedbacks})(AdminFeedbacks);



























