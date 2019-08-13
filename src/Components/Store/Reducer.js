import {
	GET_CONTACT,
	GET_FEEDBACK,
	CREATE_CHARGE, 
	CREATE_PANEL,
	UPDATE_PANEL,
	DELETE_PANEL,
	LOGIN, 
	LOGOUT,
	GETPANELS
} from './Constants';

const StoreRoom = {
		isAuthenticated:false,
		isUser:false,
		user:{},
		data:null,
		feedbacks:null,
		contacts:null,
		isError:false,
		isCoinbase:false,
		coinbase:null,
		isCrypto:null,
		uploadedFiles:null
}

export default (state=StoreRoom, action)=> {
	switch(action.type) {
		case CREATE_PANEL:
		return {
			...state,
			data:[...state.data,action.payload]
		};
		break;

		case UPDATE_PANEL:
			let idx =null;
			state.data.forEach((val,i)=>{if(val._id === action.payload.id) idx=i; return;})
			if(idx !== null)  state.data.splice(idx,1,action.payload);
			return{...state,data:state.data} 
			 break;


		 case DELETE_PANEL:
			let id =null;
			state.data.forEach((val,i)=>{if(val._id === action.payload)id=i; return;});
			if(id !== null) state.data.splice(id,1);
			return {...state,data:state.data};
			break;


			case LOGIN:

			return {
				...state,
				isAuthenticated:action.payload.body ? true:false ,
				user:action.payload

			}

			break;

			case GETPANELS:
			return {
				...state,
				data:action.payload
			}
			break;


			case LOGOUT:
			return {
				...state,
				isAuthenticated:false,
				user:{}
			}
			break;

			case 'ERROR':
				return {
					...state,
					isError:action.message
				}
				break;

				case 'REMOVE_ERROR':
					return {
						...state,
						isError:false
					}
					break;

					case CREATE_CHARGE:
					return {
						...state,
						isCoinbase:true,
						coinbase:action.data.results,
						isCrypto:action.data.isCrypto

					}

					break;

					case 'UNMOUNTED':
						return {
						...state,
						isCoinbase:false,
						coinbase:null,
						isCrypto:null
					}
					break;

					case GET_CONTACT:
					return {
						...state,
						contacts:action.data
					}
					break;

					case GET_FEEDBACK:
					return {
						...state,
						feedbacks:action.data
					}

					case "GET_UPLOADS":
					return {
						...state,
						uploadedFiles:action.data
					}

					break;

					case "DELETE_UPLOADS":
							let path=null;
							state.uploadedFiles.forEach((val,i)=>{if(val.path === action.data)path=i; return;});
							if(path !== null) state.uploadedFiles.splice(path,1);
					     	return {
					     		...state,
					     		uploadedFiles:state.uploadedFiles
					     	}

					     	break;

					     	case "IS_USER":
					     	return {
					     		...state,
					     		isUser:true
					     	}

					     	break;

					     	case "BULK_CONTACT_DELETE":
					     	const stuff = [];
					     	let len = state.contacts.length;
					     	let len2 = action.data.length;
					     	for(let i =0; i<len; i++) {
					     		for(let j=0; j<len2; j++) {

					     			if(state.contacts[i].email!==action.data[j].email) {

					     				stuff.push(state.contacts[i]);
					     			}
					     		}
					     	}
					     	return {
					     		...state,
					     		contacts:stuff
					     	} 

					     	break;

					     	case "SINGLE_CONTACT_DELETE":
					     	return {
					     		...state,
					     		contacts:state.contacts.filter((val)=>{
									if(val.email !== action.data.email){
										return val;
									}
					     		})
					     	}

					     	break;

					     	case "BULK_FEEDBACK_DELETE":
					     	const newFeedback = [];
					     	let ln = state.feedbacks.length;
					     	let ln2 = action.data.length;
					     	for(let i =0; i<ln; i++) {
					     		for(let j=0; j<ln2; j++) {

					     			if(state.feedbacks[i].email!==action.data[j].email) {

					     				newFeedback.push(state.feedbacks[i]);
					     			}
					     		}
					     	}
					     	return {
					     		...state,
					     		feedbacks:newFeedback
					     	} 

					     	break;

					     	case "SINGLE_FEEDBACK_DELETE":
					     	return {
					     		...state,
					     		feedbacks:state.feedbacks.filter((val)=>{
									if(val.email !== action.data.email){
										return val;
									}
					     		})
					     	}
					     	break;



			default:
			return state;
			
	}

}

