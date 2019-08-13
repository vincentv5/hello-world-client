import React from "react";
import {Link} from "react-router-dom";
const SettingsNav=(props)=> {
	const {component}=props.state;

	return (
		<React.Fragment>
		<div className="table-responsive rounded">
		  <table className="table ">
		  <thead className="thead ">
			<tr>
				<th><p className={`th tc pointer ${component==="contact"?"bgl":""}`} id ="contact"  onClick={props.handleChange} >Contacts</p></th>
			    <th><p className={`th tc pointer ${component==="feedback"?"bgl":""}`} id ="feedback"  onClick={props.handleChange} >Feedbacks</p></th> 
			    <th><p className={`th tc pointer ${component==="sales"?"bgl":""}`} id ="sales"  onClick={props.handleChange} >Product sales</p></th>
			    <th><p className={`th tc pointer ${component==="profile"?"bgl":""}`} id ="profile"  onClick={props.handleChange}>Profile</p></th>
			  </tr>
			  </thead>
		  </table>
		</div>
		<br />
		<br />
		</React.Fragment>

		)
}


const styles={
	navs:{
		textDecoration:"none"
	}
}


export default SettingsNav;