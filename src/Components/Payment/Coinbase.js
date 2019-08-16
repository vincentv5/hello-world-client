import React,{Component} from 'react';
import { connect } from 'react-redux';
import FaBtc from 'react-icons/lib/fa/bitcoin';
import {cancel_charge,unmounted} from '../Store/Action';

class Coinbase extends Component{
	constructor(props) {
		super(props);
		this.state={
			intervalId:null,
			mins:'',
			secs:'',
			timeElapse:false,
			endDate:null
		}

	}
	componentDidMount() {
		window.clearInterval(this.state.intervalId);
		if(this.props.isCoinbase) {
			this.setState({
				endDate:this.props.coinbaseInfo.expires_at
			})
		const intervalId= setInterval(this.timer,1000);
		this.setState({
			...this.state,
		intervalId:intervalId
		})
		}
		
	}
	
	componentWillUnmount() {
		window.clearInterval(this.state.intervalId);
		this.props.cancel_charge(this.props.coinbaseInfo.code).then(()=>console.log('canceled'));
		this.props.unmounted();
	}

	timer=()=> {
		 let now = new Date().getTime();
		 let endDate = new Date(this.state.endDate).getTime();
		     let t =endDate-now;
				if (t>=0) {
			        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			        let secs = Math.floor((t % (1000 * 60)) / 1000);
			       this.setState({
			       	mins,
			       	secs
			       });	
			       
			    } else {
				  window.clearInterval(this.state.intervalId);
				   this.setState({
				   	...this.state,
			       	timeElapse:true
			      });
			   
	 }
			    
 }


 handleCopy=()=> {
 	document.getElementById('copy').select();
 	 document.execCommand("copy");
 }
		

	render() {
		const { coinbaseInfo } = this.props;
		const image = this.props.isCrypto ==='bitcoin'?'/images/bitcoin.png'
		:this.props.isCrypto ==='ethereum'?'/images/ethereum.png':'';
		let price=coinbaseInfo.pricing;
		const amount =price[this.props.isCrypto].amount;
		const btc =price[this.props.isCrypto].currency;
		let addresses =coinbaseInfo.addresses;
		const address =addresses[this.props.isCrypto]; 
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
				<p>{`${amount?amount:''} ${btc?btc:''}`}</p>
				</div>

				<div className="paymentDetail" style={{height:'40vh'}}>
				<div className='tc mt4'>
					<img width='50' height='50' src={image}  alt=""/>
				</div>	
				<h6 className='tc mt4'>You are paying with <strong>{btc?btc:''}</strong></h6>
				<p className='tc'><span></span>Order ID: <span style={{backgroundColor:"#e3e1e1"}}>{coinbaseInfo.id}</span></p>
				<div className="tc mt4">
					<button style={{borderRadius:"20%",backgroundColor:"#1c2260",color:'white'}} className='btn' onClick={this.handleCopy}>copy</button>
				</div>
				<p className='tc mt4'>Please send exactly <code style={{backgroundColor:"#e3e1e1"}}>{amount?amount:''}</code> <strong>{btc}</strong></p>
				</div>
				<br />

				<div className="paymentButton" style={{display:'flex'}}>
						<span style={style.btcStyle}><FaBtc /></span>
							<input className='form-control' id='copy' type='text' value={address} readOnly/>
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

export default connect(mapStateToProps,{cancel_charge,unmounted})(Coinbase);