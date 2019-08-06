import React,{Component} from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import Header from '../Products/Header';
import { Get_feedbacks } from '../Store/Action';
import Card from './Card';
class Feedback extends Component {
	constructor(props){
		super(props);
		this.state={
			loading:true
		}
	}

	componentDidMount() {
		this.props.Get_feedbacks().then(()=> {
			this.setState({...this.state,loading:false});
		});
	}


	render() {
		const isCard = this.state.loading?(<Spinner loading={this.state.loading} size={60}/>)
		:(<Card  {...this.props}/>);
		return (
			<div className="">
				<Header />
				<div className="Container main">
					<div className="styling2 mt5">
						{isCard }
					</div>
				</div>
		
			</div>
			)
		}

	}
	 
const mapStateToProps=(state)=> {
	return {
		feedbacks:state.feedbacks
	}
}
export default connect(mapStateToProps,{Get_feedbacks})(Feedback);