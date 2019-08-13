import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import FaAt from 'react-icons/lib/fa/at';

const ProductSales =()=> {

		return (
	<div className="table-responsive">
		  <table className="table">
			 <thead>
			<tr>	
				<th className="th"><FaAt style={styles.icon}/></th>
				<th className="th">Purchase</th>
				<th className="th">Purchase info</th>
				<th className="th"></th>
				<th className="th">Time</th>
				<th className="th">
				<input type="checkbox" />
				</th>
				<th className="th">
					<FaTrash style={styles.icon}/>
				</th>
				<th className="th">
					<input type="button" className="btn btn-primary"  value="unread"/>
				</th>
			</tr>
			</thead>
		  </table>
		</div>
		);

}

const styles={
	link:{
		color:"blue"

	},
	icon:{
		fontSize:"20px",
		fontWeight:"bold"
	}
}

export default ProductSales;