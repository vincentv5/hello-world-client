import { CREATE_PANEL,UPDATE_PANEL,DELETE_PANEL,LOGIN,LOGOUT,GETPANELS} from './Constants';

const StoreRoom = {
		isAuthenticated:false,
		user:{},
		data:[],
		isError:false
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

			default:
			return state;



	}


}

