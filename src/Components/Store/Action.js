import { login,create_panel,delete_panel,update_panel,logout,register,get_panels} from './ActionsCreator';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import store from './index';
const base_url = "http://localhost:3001";

export const setAuthorizationHeader=(token)=> {
	if(token) {
		axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
	}else {
		delete axios.defaults.headers.common['Authorization'];
	}
}
let token;
export const Remember_token=()=>{
	localStorage.setItem("jwt",token);
}
export const Login_user =data=>dispatch=> {
	return axios.post(`${base_url}/user/login`,data)
	.then(res=>{
		 token = res.data;
		setAuthorizationHeader(token);
		return dispatch(login(jwtDecode(token)));
	})
	.catch(err=>HandleError(err.message))	
}


export const Create_panel=data=>dispatch=>{
	console.log(data);
return axios.post(`${base_url}/stocks`,data)
.then(res=> dispatch(create_panel(res.data)))
.catch(err=>HandleError(err.message));
}

export const Delete_panel=id=>dispatch=> {
	return axios.delete(`${base_url}/stocks/${id}`)
	.then(res=> dispatch(delete_panel(id)))
	.catch(err=>HandleError(err.message));
}

export const Update_panel =data=>dispatch=> {	
	return axios.patch(`${base_url}/stocks`,data)
	.then(res=> dispatch(update_panel(res.data)))
	.catch(err=>HandleError(err.message)); 
}

export const Logout=()=>dispatch=>{
	setAuthorizationHeader(false);
	localStorage.removeItem('jwt');
	dispatch(logout());
}


function HandleError(message){
	store.dispatch({
		type:'ERROR',
		message,
		
	})
}
export const removeServerError=()=> {
	store.dispatch({
		type:'REMOVE_ERROR',
	})
}
export const Register_user=data=>dispatch=>{
	return axios.post(`${base_url}/user/register`,data).then((res)=> {
		console.log(res);
	}).catch((err)=> {
		HandleError(err.message);
	})

}

export const Get_panels=()=>dispatch=> {
	return axios.get(`${base_url}/stocks`)
	.then(res=> dispatch(get_panels(res.data)))
	.catch(err=>console.log)
}

