import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Navbar,NavbarBrand, Nav, NavItem, Container, } from 'reactstrap';
import Spinner from '../Spinner';
import Cards from  './Cards';
import Header from './Header';
import { Get_panels } from '../Store/Action';

class Products extends Component {
	constructor(props){
		super(props);
		this.state={
			loading:true
		}
	}

	componentDidMount() {
		this.props.Get_panels().then(()=> {
			this.setState({loading:false});
		});
	}
	render() {
		const isCard = this.state.loading?(<Spinner loading={this.state.loading} size={60}/>):(<Cards {...this.props}/>);
		return (
			<div className="">
				<Header />
				<div className="Container main">
					<div className="styling2 mt5">
						{isCard}
					</div>
				</div>
		
			</div>
			)
		}

	}
	 
const mapStateToProps=(state)=> {
	return {
		panel:state.data
	}
}
export default connect(mapStateToProps,{Get_panels})(Products);