import React from 'react';

const TableRow=(props)=>{
	const { 
		target,
		id, 
		bgcolor2, 
		email, 
		name,
		handleView,
		link,
		handleReply,
		year,
		month,
		day,
		hour,
		mins,
		handleReadContact,
		handleSingleDelete,
	
	} =props;
		return (
			<tr  
				style={bgcolor2} 
				className="shadow-1">
					<td className="td pointer"><h6>{email}</h6></td>
					<td className="td">{name}</td>
					<td style={link} 
					className="td pointer"   
					data-toggle="modal" 
					data-target="#MessageModal" 
					id={id} 
					onClick={handleView}>
					view
					</td>
					<td style={link} 
					className="td pointer"   
					data-toggle="modal" 
					data-target={target}
					id={email} 
					onClick={handleReply}>
					reply
					</td>
					<td className="td pointer">{`${year}/${month}/${day}  ${hour}:${mins}`}</td>
					<td className="td"><input type="checkbox" className="box" id={id}/></td>
					<td className="td" >
					<button className="btn btn-danger"  onClick={handleSingleDelete} id={id}>
						X
					</button>
					</td>
					<td className="td">
					<input 
					onClick={handleReadContact} 
					type="button" className="btn btn-primary"  
					value="read" id={id}/>
					</td>
				</tr>
		);

}

export default TableRow;
