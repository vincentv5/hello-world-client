import React, {Component} from 'react';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import Card from  './Product';
import { Get_panels } from '../Store/Action';
import { SideNav } from './SideNav';


class Products extends Component {
	constructor(props) {
		super(props);
		this.state={
			loading:true
		}
	}

	componentWillMount() {
		this.setState({
				loading:true
			})
		this.props.Get_panels().then(()=> {
			this.setState({
				loading:false
			})
		});
	}


render() {
const isCard = this.state.loading ? (<Spinner loading={this.state.loading} size={60}/>):(<Card {...this.props}/>);
 return (

		<div style={{display:"flex"}}>

			<SideNav />

		<div style={{flex:"1"}}>

			<div className="Container main">
				<div className="styling1 mt5">
				{isCard}
				</div>
				
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




	