import {
	GET_CONTACT,
	GET_FEEDBACK,
	CREATE_CHARGE, 
	CREATE_PANEL,
	UPDATE_PANEL,
	DELETE_PANEL,
	LOGIN, 
	LOGOUT,
	REGISTER,
	GETPANELS
} from './Constants';

const StoreRoom = {
		isAuthenticated:false,
		user:{},
		data:[],
		feedbacks:[],
		contacts:[],
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

			default:
			return state;



	}


}

