import React, { Component } from 'react';
import PaystackButton from 'react-paystack';

export class Payment extends Component {

constructor(props) {
 		super(props)

 		
 	}
 
	render() {
		const {email, total} = this.props;
		return (
			<div className='container main'>
			<div className='col-sm-6 m-auto'>
			<br />
				<header className='details-header'>
					<h6 className='ml3' style={{color:'white'}}>Enter card details below </h6>
				</header>
				<article >
					<br />
				<p>payment goes here</p>
				</article>
			</div>
			</div>
		);
	}
}

export default Payment;







