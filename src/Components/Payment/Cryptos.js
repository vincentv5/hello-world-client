import React from 'react';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
const Cryptos=(props)=>{

	return (
	
		<div>
		<ul>
			<li className='pointer' id='bitcoin' onClick={props.continueWithCrypto}>bitcoin</li>
			<li className='pointer' id='ethereum' onClick={props.continueWithCrypto}>ethereum</li>
			<li className='pointer' id='paypal' onClick={props.continueWithCrypto}>paypal</li>
		</ul>
		<div style={props.spanDiv}>>
		<span 
		style={props.span1}
		className='pointer tc' 
		onClick={props.rejectCrypto}
		>
		<FaAngleLeft />
		</span>
		</div>
		</div>
	
		);

}

export default Cryptos;