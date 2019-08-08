import {
	get_feedbacks,
	get_contacts,
	send_feedback,
	login,
	create_panel,
	delete_panel,
	update_panel,
	logout,
	get_panels,
	coinbase

}
from './ActionsCreator';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import store from './index';
const base_url = "http://localhost:3001";

function HandleError(message){
	store.dispatch({
		type:'ERROR',
		message,
		
	})
}



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
	.catch(err=>HandleError(true))	
}



export const Create_panel=(data)=>dispatch=>{
return axios.post(`${base_url}/stocks`,data)
.then(res=>{
	if(res.status === 200){
		return dispatch(create_panel(res.data))
	}else {
		HandleError(true)
	}
})
.catch(err=>HandleError(true));
}

export const Delete_panel=id=>dispatch=> {
	return axios.delete(`${base_url}/stocks/${id}`)
	.then(res=> {
		console.log(res.data);
		return dispatch(delete_panel(id))
	})
	.catch(err=>HandleError(true));
}

export const Update_panel =data=>dispatch=> {	
	return axios.patch(`${base_url}/stocks`,data)
	.then(res=>{
		if(res.status ===200){
			return dispatch(update_panel(res.data));
		}else {
			HandleError(true);
		}
	})
	.catch(err=>HandleError(true)); 
}

export const Logout=()=>dispatch=>{
	setAuthorizationHeader(false);
	localStorage.removeItem('jwt');
	dispatch(logout());
}

export const removeServerError=()=>dispatch=> {
	return dispatch({
		type:'REMOVE_ERROR',
	})
}
export const Register_user=data=>dispatch=>{
	return axios.post(`${base_url}/user/register`,data).then((res)=> {
		console.log(res);
	}).catch((err)=> HandleError(true));
}

export const Get_panels=()=>dispatch=> {
	return axios.get(`${base_url}/stocks`)
	.then(res=> dispatch(get_panels(res.data)))
	.catch(err=>HandleError(true));
}

export const CoinbaseApiCall=(data)=>dispatch=>{
	return axios.post(`${base_url}/charges`,data)
	.then((res)=> {
		if(res.status === 200) {
		const results =res.data;
		const isCrypto=data.isCrypto;
		return dispatch(coinbase({results,isCrypto}))
		}
		
		HandleError(true)
		
	})
	.catch((err)=>HandleError(true))

	 
}
export const cancel_charge=(id)=>dispatch=> {
	return axios.post(`${base_url}/charges/${id}/cancel`)
	.then(result=>console.log)
	.catch(err=>HandleError(true));
}

export const Contact_us=(data)=>dispatch=>{
	return axios.post(`${base_url}/contact`,data)
	.then((res)=>{
		if(res.status === 200){
			return dispatch(true)
		} 
			
	})
	.catch((err)=>HandleError(true));
}

export const Send_feedback=(data)=>dispatch=>{
	return axios.post(`${base_url}/feedback`,data)
	.then((res)=>{
		if(res.status === 200) {
			return dispatch(send_feedback(true))
		}
	})
	.catch((err)=>HandleError(true));
}

export const Get_contacts=()=>dispatch=>{
	return axios.get(`${base_url}/contact`)
	.then((res)=>{
		if(res.status === 200){
			return dispatch(get_contacts(res.data))
		}
	})
	.catch((err)=>HandleError(err))
}

export const Get_feedbacks=()=>dispatch=>{
	return axios.get(`${base_url}/feedback`)
	.then((res)=>{
		if(res.status === 200){
			return dispatch(get_feedbacks(res.data))
		}
	})
	.catch((err)=>HandleError)
}


export const unmounted=()=>dispatch=> {
	return dispatch({
		type:'UNMOUNTED'
	})
};

 
export const handleUpload=(pictures)=>dispatch=>{
		const data =new FormData();
        for(let i =0; i<pictures.length;i++) {
            data.append('file',pictures[i]);
        }
       return axios.post(`${base_url}/multiple`,data)
        .then((res)=>{
        	if(res.status === 200) {
        		return true;
        	}else {
        		HandleError(true);
        	}
        })
        .catch((err)=>HandleError(true)); 
        
}

export const getUploads=(data)=>dispatch=>{
	return axios.get(`${base_url}/multiple`)
	.then((res)=>{
		if(res.status === 200 && res.data !==null) {
			return dispatch({
				type:"GET_UPLOADS",
				data:res.data
			})
		}else {
			HandleError(true)
		}
	}).catch(()=>HandleError(true));
}


export const deleteUploads=(data)=>dispatch=> {
	return axios.post(`${base_url}/multiple/delete`,{file:data})
	.then((res)=>{
		if(res.status === 200) return dispatch({
			type:"DELETE_UPLOADS",
			data:data.file
		});
		return HandleError(true);
	})
	.catch((err)=> {
		return HandleError(true)
	})
}

