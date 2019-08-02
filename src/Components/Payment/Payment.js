import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coinbase from './Coinbase';
import Spinner from '../Spinner';
const Payment=(props)=> {
	const title = props.isCoinbase?props.coinbaseInfo.name:'';
	
	const content = props.isCoinbase
	?(<Coinbase/>)
	:props.isError
	?(<p className='tc alert alert-danger'>ooops something went wrong trying to create a charge!!!<br/> please try again !</p>)
	:(<Spinner size={30}/>);

		return (
			<div className=' main shadow-2' style={{backgroundColor:"#F8F8F8"}}>
			<div className='col-sm-7 m-auto'>
			<br />
				<header className='details-header br2'>
					<h6 className='ml3' style={{color:'white'}}>
					{title}
					</h6>
				</header>
					{content}
			</div>
			</div>
		);
	}


const mapStateToProps =(state)=> {
	return {
		coinbaseInfo:state.coinbase,
		isCoinbase:state.isCoinbase,
		isError:state.isError
	}

}
export default connect(mapStateToProps,null)(Payment);


