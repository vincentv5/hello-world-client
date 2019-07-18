import { login,create_panel,delete_panel,update_panel,logout,register,get_panels} from './ActionsCreator';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
const base_url = "http://localhost:3001";
export function setAuthorizationHeader(token) {
	if(token) {
		axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
	}else {
		delete axios.defaults.headers.common['Authorization'];
	}
}

export const Login_user =data=>dispatch=> {
	return axios.post(`${base_url}/user/login`,data)
	.then(res=>{
		console.log(res);
		const token = res.data;
		localStorage.setItem("jwt",token);
		setAuthorizationHeader(token);
		return dispatch(login(jwtDecode(token)));
	})
	.catch(err=>err)	
}

export const Create_panel=data=>dispatch=>{
return axios.post(`${base_url}/stocks`,data)
.then(res=> {
	const {data }= res;
	console.log(data);
	return dispatch(create_panel(data))
})
.catch(err=>{
	throw new Error("something went wrong unable to create");
});
  
}

export const Delete_panel=(id)=>dispatch=> {
	return axios.delete(`${base_url}/stocks/${id}`)
	.then(()=>dispatch(delete_panel(id)))
	.catch(()=>console.log);
}

export const Update_panel =data=>dispatch=> {	
	return axios.patch(`${base_url}/stocks`,data)
	.then(res=> {
		if(res.data.status === 200) {
			dispatch(update_panel(data));
		}
	})
	.catch(err=> {
		throw new Error('oooopss unable to update');
	});
	 
}

export const Logout=()=>dispatch=>{
	setAuthorizationHeader(false);
	localStorage.removeItem('jwt');
	dispatch(logout());
}

export const Register=(data)=>dispatch=>{
	return axios.post(`${base_url}/register`,data)
	.then(res=>console.log)
	.catch(err=>{
		throw new Error('unable to register')
	});
}

export const Get_panels=()=>dispatch=> {
	return axios.get(`${base_url}/stocks`)
	.then((res)=> {
		return dispatch(get_panels(res.data))
	}).catch((err)=> {
		throw err;
	})
}

