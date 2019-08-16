import React,{Component} from 'react';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Get_panels, CoinbaseApiCall,removeServerError,unmounted } from '../Store/Action';
import Cryptos from './Cryptos';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';	
class Details extends Component {
constructor(props){
		super(props);
		this.state={
			toggle:'button',
			email:'',
			isCrypto:'',
			isSubmited:false,
			numOfItems:1,
			clientAmount:0,
			price:0,
			err:false,
			description:'',
			stock:0,
			title:'',	
		}
	}


	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.Get_panels().then(()=>{
			const id = this.props.match.params.id;
			const card = this.props.panel.filter((val,i)=> val._id === id);
			this.setState({
				...this.state,
				clientAmount:card[0].price,
				price:card[0].price,
				description:card[0].description,
				stock:card[0].stock-this.state.numOfItems,
				title:card[0].title
			})
		});
		}
		
		handlePrice =(sign) => {
			if(sign === '-') {
				// const cAmount =this.state.clientAmount -= this.state.price;
				// const theStock =++this.state.stock;
					this.setState(prevState => ({
	      			clientAmount:prevState.clientAmount-= this.state.price,
	      			stock:++prevState.stock
	   			 }));

			}else if(sign === '*') {
				// const cAmount=this.state.clientAmount += this.state.price;
				// const theStock = --this.state.stock;
					this.setState(prevState => ({
	      			clientAmount:prevState.clientAmount+= this.state.price,
	      			stock:--prevState.stock
	   			 }));
	
			}
			
		}

		handleMinus=()=> {
			if(this.state.numOfItems !== 1) {
				this.setState(prevState => ({
	      			numOfItems:--prevState.numOfItems,
	   			 }));
				this.handlePrice('-');	
			}		
			
		}
		
		handlePlus =()=> {
			if(this.state.stock >0){

				this.setState(prevState => ({
	      			numOfItems:++prevState.numOfItems,
	      			
	   			 }));
			this.handlePrice('*');
			}
			
		}
		

		handleChange=()=> {
			this.setState({...this.state,toggle:'crypto'});
		}

		moveBack=()=> {
			this.setState({...this.state,toggle:'moveBackToCrypto'});
		}

		rejectCrypto=()=> {
			this.setState({
				...this.state,
				toggle:'rejectCrypto',
		});
		}

		continueWithCrypto=(e)=> {
			console.log(e.target.id);
			this.setState({
				...this.state,
				toggle:'continueCrypto',
					isCrypto:e.target.id
		});

		}
		
		submitEmail=()=> {
			const {email, clientAmount, description,title,isCrypto} = this.state;
			console.log(isCrypto);
			const regex =new RegExp(/.*[@].*\.com/,'gi');
			if(email.match(regex) !== null) {
			if(this.state.isCrypto ==="paypal") {
				return this.props.history.push('/paypal/purchase');
			}
			this.props.unmounted();
			this.props.removeServerError();
			this.props.CoinbaseApiCall({title,description,clientAmount,email,isCrypto})
			.then(()=> {});
			this.setState({...this.state,isSubmited:true})
			this.props.history.push('/purchase');
		
			
		



			}else if(email.match(regex)=== null) {
				
			this.setState({...this.state,err:true});
			}	
		}




		handleInput=(e)=> {
			this.setState({...this.state,email:e.target.value});
		}

		handlefocus=()=> {
		this.setState({...this.state,err:false});
		}
		
		handleDanamic=()=> {
			let view=null;
			const alertMessage = this.state.err?{border:'2px solid red'}:{border:''};
			 switch(this.state.toggle) {
				case 'button':
				view=(<button onClick={this.handleChange} className='btn form-control' style={styles.button}>purchase</button>);
				break;

				case 'crypto':
				view= ((<Cryptos 
					span1={styles.span1} 
					span2={styles.span2} 
					spanDiv={styles.spanDiv}
					continueWithCrypto={this.continueWithCrypto}
					rejectCrypto={this.rejectCrypto}
					/>));
				break;

				case 'continueCrypto':
				view= (<div>
					<label htmlFor ='email'>Email address</label>
					<input 
					onFocus ={this.handlefocus} 
					style={alertMessage} 
					onChange={this.handleInput} 
					type='email' 
					className='form-control' 
					placeholder='email address'
					/>

					<div style={styles.spanDiv}>
					<span 
					style={styles.span1} 
					className='pointer tc' 
					onClick={this.moveBack}>
					<FaAngleLeft />
					</span>

					<span 
					style={styles.span2} 
					className='pointer tc' 
					onClick={this.submitEmail}>
					<FaAngleRight />
					</span>
					</div>
					</div>)
				break;

				case 'rejectCrypto':
				view=(<button onClick={this.handleChange} className='btn form-control' style={styles.button}>purchase</button>);
				break;

				case 'moveBackToCrypto':
				view=(<Cryptos 
					span1={styles.span1} 
					span2={styles.span2} 
					spanDiv={styles.spanDiv}
					continueWithCrypto={this.continueWithCrypto}
					rejectCrypto={this.rejectCrypto}
					/>);
				break;

				default:
				return '';

			}

			return view;
		}

render() {
return (
	<div className='container main'>
	<br />
	<br />
		<div className='row'>
			<div className='col-sm-8'>
				<header className='details-header'>
					<h6 className='ml3' style={{color:'white'}}>Purchase terms</h6>
				</header>
				<article style={{padding:'10px'}}>
					<p>{this.state.description}</p>
				</article>
			</div>
			<SideBar 
				moveBack={this.moveBack}
				submitEmail={this.submitEmail}
				handleChange={this.handleChange}
				handleInput={this.handleInput}
				state={this.state}
				handleMinus={this.handleMinus}
				handlePlus={this.handlePlus}
				handlefocus={this.handlefocus}
				handleDanamic={this.handleDanamic}
				
			/>

		</div>
	</div>			

	) 
}

}


function mapStateToProps(state){
return {
	panel:state.data,
	isCrypto:state.isCrypto
}
}

export default withRouter(connect(mapStateToProps,{unmounted,Get_panels,CoinbaseApiCall,removeServerError})(Details));



const styles ={
	button:{
		backgroundColor:'#1c2260',color:'white'
	},
	stock:{
		borderRadius:'100%',width:'18px',height:'18px',border:'2px solid pink',marginRight:'2px',
	},

	spanDiv:{
		borderRadius:'2px',display:'flex',flexDirection:'row',padding:'3px',backgroundColor:'#1c2260',
	},

	spanMinus:{
		fontSize:'20px',fontWeight:'bold',margin:'4px',padding:'4px'
	},
	spanPlus:{
		fontSize:'20px',fontWeight:'bold',margin:'4px',padding:'4px',
	},

	span2:{
		marginLeft:'70%',padding:'2px',fontWeight:'bold',fontSize:'20px',color:'white',
	},

	span1:{
		marginLeft:'7%',padding:'2px',fontWeight:'bold',fontSize:'20px',color:'white'
	}


}