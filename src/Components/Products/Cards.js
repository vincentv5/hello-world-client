import React, {Component} from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Get_panels } from '../Store/Action';

class Card extends Component{
	constructor(props) {
		super(props);
		this.state={
			panel:null,
		}
	}

	componentDidMount() {
	this.props.Get_panels();
	}

	

	render() {
		
	const card =this.props.panel.map((val,i)=> (
		<Link key={val._id} className = "links2 pa2 center pb3  grow   mb5 pointer" style={{ width:250, height:"auto" }}  to={`/purchase/${val._id}`}>
			<div className='pa3 panel-image'>
				<img alt="" src ={val.image} style ={{width:250, height:'auto'}}/>
			</div>
			<br />
			<h6 className='font tc'>{val.title}</h6>
			<div className='pricing'>
				<p className='first'>${val.price}</p>
				<p style={{width:'20px',height:'20px',borderRadius:'100%',border:'2px solid pink'}}></p>
				<p style={{marginLeft:'2px'}}>{val.stock}</p>
		</div>
	</Link> 
))

	return (
			<React.Fragment>
			{card}
			</React.Fragment>

		)
}

} 
			
const mapStateToProps=(state)=> {
	return {
		panel:state.data
	}
}
	

export default withRouter(connect(mapStateToProps,{Get_panels})(Card));