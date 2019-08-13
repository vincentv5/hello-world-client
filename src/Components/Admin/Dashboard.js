import React, { Component } from 'react';
import { SideNav } from './SideNav';
import  Widget from './Dashboard/Widget';
import {connect} from 'react-redux';
import { Get_panels,Get_contacts,Get_feedbacks } from '../Store/Action';

class Dashboard extends Component {
constructor(props){
	super(props);
	this.state={
		isFeedback:false,
		isContact:false,
		isProduct:false
	}
}

	componentDidMount() {
		this.props.Get_panels().then(()=>{
			this.setState({isProduct:true})
		});
		this.props.Get_feedbacks().then(()=> {
			this.setState({isFeedback:true});
		});
		this.props.Get_contacts().then(()=> {
			this.setState({isContact:true});
		})
		

	}



render() {
	const product=this.state.isProduct?this.props.products:0;
	const feedback=this.state.isFeedback?this.props.feedbacks:0;
	const contact=this.state.isContact?this.props.contacts:0;
	return (
	<div style={{display:"flex"}}>

		<SideNav />

		<div style={{flex:"1"}}>

			<div className="container main">
				<Widget
				products={product}
				feedbacks={feedback}
				contacts={contact}
				/>

			</div>
		</div>
	</div>
			
			);
		}
}

const mapStateToProps=(state)=> {
	return {
		products:state.data,
		feedbacks:state.feedbacks,
		contacts:state.contacts,
	}
}

export default  connect(mapStateToProps,{Get_panels,Get_contacts,Get_feedbacks })(Dashboard);

