import React, { Component } from 'react';
import Details from './Details';
import Payment from './Payment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Get_panels } from '../Store/Action';

export class AllCombined extends Component {
	constructor(props){
		super(props);
		this.state={
			toggle:true,
			email:'',
			isSubmited:false,
			numOfItems:1,
			clientAmount:0,
			price:0,
			err:false,
			description:'',
			stock:0	
		}
	}


	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.Get_panels().then(()=>{
			const id = this.props.match.params.id;
			console.log(id);
			const card = this.props.panel.filter((val,i)=> val._id === id);
			console.log(card);
			this.setState({
				clientAmount:card[0].price,
				price:card[0].price,
				description:card[0].description,
				stock:card[0].stock-this.state.numOfItems
			})
		});


		}
		
		handlePrice =(sign) => {
			if(sign === '-') {
				this.setState({
					clientAmount:this.state.clientAmount -= this.state.price,
					stock:++this.state.stock
				})

			}else if(sign === '*') {
				this.setState({
					clientAmount:this.state.clientAmount += this.state.price,
					stock:--this.state.stock
				})
				

				

				
				
			}
			
		}

		handleMinus=()=> {
			if(this.state.numOfItems !== 1) {
				this.setState({numOfItems: --this.state.numOfItems});
				this.handlePrice('-');	
			}
			
		}
		
		handlePlus =()=> {
			if(this.state.stock >0){
			this.setState({numOfItems: ++ this.state.numOfItems});
			this.handlePrice('*');
			}
			
		}
		

		handleChange=()=> {
			this.setState({toggle:false});
		}

		moveBack=()=> {
			this.setState({toggle:true});
		}

		submitEmail=()=> {
			const { email } = this.state;
			const regex =new RegExp(/.*[@].*\.com/,'gi');
			if(email.match(regex) !== null) {
			this.setState({isSubmited:true})

			}else if(email.match(regex)=== null) {
				
			this.setState({err:true});
			}	
		}

		handleInput=(e)=> {
			this.setState({email:e.target.value});
		}

		handlefocus=()=> {
		this.setState({err:false});
		}


	render() {

		const danamicRender = this.state.isSubmited ? (<Payment state={this.state}/>) :(
			<Details
				handleInput={this.handleInput}
				moveBack={this.moveBack}
				submitEmail={this.submitEmail}
				handleChange={this.handleChange}
				state={this.state}
				handleMinus={this.handleMinus}
				handlePlus={this.handlePlus}
				handlefocus={this.handlefocus}
			/>);

		return (
			<div ref='container' >
			{danamicRender}
			</div>
		);
	}
}

function mapStateToProps(state){
return {
	panel:state.data
}
}

export default withRouter(connect(mapStateToProps,{Get_panels})(AllCombined));