import React,{Component} from 'react';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import FaBtc from 'react-icons/lib/fa/bitcoin';
import {cancel_charge} from '../Store/Action';

class Coinbase extends Component{
	constructor(props) {
		super(props);
		this.state={
			intervalId:null,
			mins:'',
			secs:'',
			timeElapse:false
		}

	}
	componentDidMount() {
		
		if(this.props.isCoinbase) {
		const intervalId= setInterval(this.timer,1000);
		this.setState({
		intervalId:intervalId
		})
		}
		
	}
	
	componentWillUnmount() {
		clearInterval(this.state.intervalId);
		this.props.cancel_charge(this.props.coinbaseInfo.code).then(()=>console.log('canceled'));
	}

	timer=()=> {
		let endDate = new Date(this.props.coinbaseInfo.expires_at).getTime();
		 let now = new Date().getTime();
		 let t = endDate - now;
				if (t >= 0) {
			        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			        let secs = Math.floor((t % (1000 * 60)) / 1000);
			       this.setState({
			       	mins,
			       	secs
			       });	
			       
			    } else {
				  clearInterval(this.state.intervalId);
				   this.setState({
			       	timeElapse:true
			      });
			   
	 }
			    
 }

 getAmount =()=> {
 	let price=this.props.coinbaseInfo.pricing;
 	if(this.props.coinbaseInfo){

 		return {
 			amount: price[this.props.isCrypto].amount,
 			btc:price[this.props.isCrypto].currency
 		}
 		
 	}		
 }

 getAddress =()=> {
 	let addresses=this.props.coinbaseInfo.addresses
 	if(this.props.coinbaseInfo) {
		return addresses[this.props.isCrypto];
 	}
	
 	
 }

 handleCopy=()=> {
 	document.getElementById('copy').select();
 	 document.execCommand("copy");
 }
		

	render() {
		const { coinbaseInfo } = this.props;
		const { mins , secs , timeElapse }=this.state;
        const isElapseTime= timeElapse?(<p>timeout</p>):(<p>awaiting payment....</p>);
		return (
			<React.Fragment>
			<div className='timer  br2' style={{display:'flex',justifyContent:'space-between'}}>
				{isElapseTime}
				<div style={{padding:'5px'}}>
					{`${mins} : ${secs}`}
				</div>
				</div>


				<div className="price" style={{backgroundColor:'#e3e1e1',padding:'5px'}}>
				<p>{`${this.getAmount().amount} ${this.getAmount().btc}`}</p>
				</div>

				<div className="paymentDetail" style={{height:'40vh'}}>
				<div className='tc mt5'>
					<img src=''  alt="no image yet"/>
				</div>	
				<h6 className='tc mt3'>You are paying with <strong>{this.getAmount().btc}</strong></h6>
				<p className='tc'>{`Order ID: ${coinbaseInfo.id}`}</p>
				<div className="tc">
					<button style={{borderRadius:"20%",backgroundColor:"#1c2260",color:'white'}} className='btn' onClick={this.handleCopy}>copy</button>
				</div>
				<p className='tc'>Please send exactly <code style={{backgroundColor:"#e3e1e1"}}>{this.getAmount().amount}</code> <strong>{this.getAmount().btc}</strong></p>

				</div>

				<div className="paymentButton" style={{display:'flex'}}>
						<span style={style.btcStyle}><FaBtc /></span>
							<input className='form-control' id='copy' type='text' value={this.getAddress()} readOnly/>
						<a className="btn btn-primary" style={style}  
						href={coinbaseInfo.hosted_url} target='blank'>pay
						</a>
				
				</div>
				 
			</React.Fragment>


		)

	}
	
}


const style={
		btcStyle:{fontSize:'22px',padding:'3px',backgroundColor:'#e3e1e1'},
		textDecoration:'non',
		color:'white',
		flex:'1'
	}

const mapStateToProps =(state)=> {
	return {
		coinbaseInfo:state.coinbase,
		isCoinbase:state.isCoinbase,
		isCrypto:state.isCrypto
	}

}

export default connect(mapStateToProps,{cancel_charge})(Coinbase);