import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { Get_contacts,Reply_contact} from '../Store/Action';
import Contact from './Contact';

class AdminContact extends Component {
	constructor(props){
		super(props);
		this.state={
			loading:true,
			message:'',
			email:null,
			success:false,
			failure:false
		}
	}

	componentDidMount() {
		this.props.Get_contacts().then(()=> {
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
			this.props.Reply_contact(message,email).then(()=>{
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
		:(<Contact 
			Contacts={this.props.Contacts}
			handleChange={this.handleChange}
			handleSubmit={this.handleSubmit}
			state={this.state}
			getUniqueUserId={this.getUniqueUserId}
			success={success}
			failure={failure}
			/>);
		
		return (
			<div style={{display:"flex"}}>
			<SideNav />
			<div style={{flex:"1"}}>
				<div className="main">
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
		Contacts:state.contacts
	}
}
export default connect(mapStateToProps,{Get_contacts,Reply_contact})(AdminContact);



























