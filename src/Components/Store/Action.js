import {
	get_feedbacks,
	get_contacts,
	send_feedback,
	contact_us,
	login,
	create_panel,
	delete_panel,
	update_panel,
	logout,
	register,
	get_panels,
	coinbase

}
from './ActionsCreator';

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import store from './index';
const base_url = "http://localhost:3001";
const coinbaseUrl ='https://api.commerce.coinbase.com';
function HandleError(message){
	store.dispatch({
		type:'ERROR',
		message,
		
	})
}
const headersObj=(title,description,price,email)=> {
	return {
		method: "post",
		headers: {
		"Content-type":"application/json",
		"X-CC-Api-Key":"04779eb3-db97-4476-9716-44f11420e132",
		"X-CC-Version":"2018-03-22"
		},
		body:JSON.stringify({
		name:`${title}`,
		description:`${description}`,
		pricing_type:'fixed_price',
		local_price:{
			amount:`${price}`,
			currency:"USD"
		},
		metadata:{
			costumer_name:`${email}`
		},
		redirect_url:"",
		cancel_url:""

		})
		}

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
	return fetch(`${coinbaseUrl}/charges`,headersObj(data.title,data.description,data.clientAmount,data.email))
	.then((res)=> {
		return res.json();
	}).then((values)=> {
		const results =values.data;
		const isCrypto=data.isCrypto;
	return dispatch(coinbase({results,isCrypto}))
		
	})
	.catch((err)=>HandleError(true));
	 
}
export const cancel_charge=(id)=>dispatch=> {
	return fetch(`${coinbaseUrl}/charges/${id}/cancel`,{
		method:'post'
	})
	.then(res=>res.json())
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

export const getUploads=()=>dispatch=>{
	return axios.get(`${base_url}/multiple`)
	.then((res)=>{
		if(res.status === 200) {
			console.log(res.data);
		dispatch({
		type:"GET_UPLOADS",
		data:res.data
	})
	}else {
		HandleError(true)
	}

	}).catch(()=>HandleError(true));
}




