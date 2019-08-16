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
	let render=null;
	switch(action.type) {
		case CREATE_PANEL:
		render= {
			...state,
			data:[...state.data,action.payload]
		};
		break;

		case UPDATE_PANEL:
			let idx =null;
			state.data.forEach((val,i)=>{if(val._id === action.payload.id) idx=i; return;})
			if(idx !== null)  state.data.splice(idx,1,action.payload);
			render= {...state,data:state.data} 
			 break;


		 case DELETE_PANEL:
			let id =null;
			state.data.forEach((val,i)=>{if(val._id === action.payload)id=i; return;});
			if(id !== null) state.data.splice(id,1);
			render= {...state,data:state.data};
			break;


			case LOGIN:

			render= {
				...state,
				isAuthenticated:action.payload.body ? true:false ,
				user:action.payload

			}

			break;

			case GETPANELS:
			render= {
				...state,
				data:action.payload
			}
			break;


			case LOGOUT:
			render={
				...state,
				isAuthenticated:false,
				user:{}
			}
			break;

			case 'ERROR':
				render={
					...state,
					isError:action.message
				}
				break;

				case 'REMOVE_ERROR':
					render={
						...state,
						isError:false
					}
					break;

					case CREATE_CHARGE:
					render={
						...state,
						isCoinbase:true,
						coinbase:action.data.results,
						isCrypto:action.data.isCrypto

					}

					break;

					case 'UNMOUNTED':
						render= {
						...state,
						isCoinbase:false,
						coinbase:null,
						isCrypto:null
					}
					break;

					case GET_CONTACT:
					render=  {
						...state,
						contacts:action.data
					}
					break;

					case GET_FEEDBACK:
					render={
						...state,
						feedbacks:action.data
					}

					break;

					case "GET_UPLOADS":
					render={
						...state,
						uploadedFiles:action.data
					}

					break;

					case "DELETE_UPLOADS":
							let path=null;
							state.uploadedFiles.forEach((val,i)=>{if(val.path === action.data)path=i; return;});
							if(path !== null) state.uploadedFiles.splice(path,1);
					     	render=  {
					     		...state,
					     		uploadedFiles:state.uploadedFiles
					     	}

					     	break;

					     	case "IS_USER":
					     	render=  {
					     		...state,
					     		isUser:true
					     	}

					     	break;

					     	

					     	

			default:
			return state;
		
			
	}

	return render;

}

