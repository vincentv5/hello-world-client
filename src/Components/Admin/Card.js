import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Get_panels } from '../Store/Action';
class Card extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//this function is comming from the redux action , getting panels;
		this.props.Get_panels();
	}

	render() {
		//mapping through panels and dispplaying thenm all
	const panel = this.props.panel.map((val,i)=> {
		return (
		<Link key={val._id} className = "links2 pa2 center pb3  grow   mb5 pointer" style={{ width:250, height:"auto" }}  to={`/admin/${val._id}/edit`}>
			<div className='panel-image'>
				<img alt="" src ={'/images/helloWorld.jpg'} style ={{width:250, height:80}}/>
			</div>
			<br />
			<h6 className='font tc'>{val.title}</h6>
			<div className='pricing'>
				<p className='first'>{`$${val.price}`}</p>
				<p style={{width:'20px',height:'20px',borderRadius:'100%',border:'2px solid pink'}}></p>
				<p style={{marginLeft:'2px'}}>{val.stock}</p>
			</div>
		</Link> 
		);
	});

	return (
		<React.Fragment>
		{ panel }
		</React.Fragment>
		
		
	)
}
}

function mapStateToProps(state) {
	return {
		panel:state.data
	}
}	

export default withRouter(connect(mapStateToProps,{Get_panels})(Card));