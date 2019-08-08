import React,{Component} from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import Cards from  './Cards';
import Header from './Header';
import { Get_panels,Get_contacts,Get_feedbacks } from '../Store/Action';

class Products extends Component {
	constructor(props){
		super(props);
		this.state={
			loading:true
		}
	}

	componentDidMount() {
		this.props.Get_feedbacks();
		this.props.Get_contacts();
		this.props.Get_panels().then(()=> {
			this.setState({...this.state,loading:false});
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
export default connect(mapStateToProps,{Get_panels,Get_contacts,Get_feedbacks})(Products);