import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Header = (props) => {
	const prod = props.products?props.products.length:0;
	const cont = props.contacts? props.contacts.length:0;
	const feedb = props.feedbacks?props.feedbacks.length:0;
	return (
		<div className='header'>
		<div className='logoImage'>
			<img className='logoImage' alt='' src='images/helloWorld.jpg' />
		</div>
		<br />
		<h5 className='tc title'>onePay</h5>
		<h6 className='tc bracket'>
		(<span style={{color:'green'}}>
		{prod}
		</span>/<span style={{color:'white'}}>
		{cont}
		</span>/<span style={{color:'red'}}>
		{feedb}
		</span>)</h6>

		<div className='tc'>
		    <Link to='/' className =' links grow'>products</Link>
			<Link to='/contact' className ='links  grow '>
			contact
			</Link>
			<Link to='/feedbacks' className ='links  grow '>
			feedbacks
			</Link>
		</div>
	</div>

	) 
}

const mapStateToProps=(state)=> {
	return {
		products:state.data,
		contacts:state.contacts,
		feedbacks:state.feedbacks
	}
}
export default connect(mapStateToProps,null)(Header);
