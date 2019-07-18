import React, { Component } from 'react';
import Details from './Details';
import Payment from './Payment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class AllCombined extends Component {

	constructor(props){
		super(props);
		this.state={
			toggle:true,
			email:'',
			isSubmited:false,
			numOfItems:1,
			clientAmount:'200',
			price:'200',
			err:false,
			description:'',
			stock:''	
		}
	}


	componentDidMount() {
			window.scrollTo(0, 0);
			const id = this.props.match.params.id;
			const card = this.props.panel.filter((val,i)=> val._id === id);
			this.setState({
				clientAmount:card[0].price,
				price:card[0].price,
				description:card[0].description,
				stock:card[0].stock
			})




		}
		
		handlePrice =(sign) => {
			if(sign === '-') {
			
				this.setState({clientAmount:eval(`${this.state.clientAmount} - ${this.state.price}`)})

			}else if(sign === '*') {
				this.setState({clientAmount:eval(`${this.state.clientAmount} + ${this.state.price}`)})
			}
			
		}

		handleMinus=()=> {
			if(this.state.numOfItems !== 1) {
			this.setState({numOfItems: --this.state.numOfItems});
				this.handlePrice('-');
			}
		}
		
		handlePlus =()=> {
			this.setState({numOfItems: ++ this.state.numOfItems});
			this.handlePrice('*');
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

export default withRouter(connect(mapStateToProps,null)(AllCombined));