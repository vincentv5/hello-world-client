import React from 'react';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

const Cryptos=(props)=>{

	return (
		<div>
		<div style={styles.cryptos}>
			<div style={styles.bitcoin}  >
			<img className='pointer' id='bitcoin' onClick={props.continueWithCrypto}   alt='' width='35' height='35' src='/images/bitcoin.png' />
			<span className='pointer' id='bitcoin' onClick={props.continueWithCrypto} >Bitcoin</span>
			</div>

			<div style={styles.ethereum}  >
			<img className='pointer' id='ethereum' onClick={props.continueWithCrypto}   alt='' width='35' height='35' src='/images/ethereum.png' />
			<span className='pointer' id='ethereum' onClick={props.continueWithCrypto} >Ethereum</span>
			</div>

			<div style={styles.ethereum} className='pointer' id='paypal' onClick={props.continueWithCrypto}>paypal</div>
		</div>
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


const styles ={
	bitcoin:{
		padding:'10px',
		backgroundColor:'#F8F8F8',
		listStyleType:'none',
		display:'flex',
		justifyContent:'space-between',

	},

	ethereum:{
		padding:'10px',
		backgroundColor:'#F8F8F8',
		listStyleType:'none',
		display:'flex',
		justifyContent:'space-between',

	},

	cryptos:{
		display:'flex',
		flexDirection:'column'
	}
}

export default Cryptos;