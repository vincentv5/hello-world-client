import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const IsAthenticated=(Welcome)=> {

class IsAthenticated extends Component {

		componentWillMount() {
			
			if(this.props.auth === false) {
			this.props.history.push('/admin');
			}
		}

	render() {
		return (
			<div>
				<Welcome {...this.props}/>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		auth:state.isAuthenticated
	}
}
return withRouter(connect(mapStateToProps,null)(IsAthenticated));

} 


export default IsAthenticated;

