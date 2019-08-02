import {CREATE_CHARGE, CREATE_PANEL,UPDATE_PANEL,DELETE_PANEL,LOGIN, LOGOUT,REGISTER,GETPANELS} from './Constants';

export const login =(data)=> {
	return {
		type:LOGIN,
		payload:data
	}

}


export const get_panels=(data)=> {
	return {
		type:GETPANELS,
		payload:data,
	}
}
export const create_panel =(data)=> {
	return {
		type:CREATE_PANEL,
		payload:data
	}

}


export const update_panel =(data)=> {
	return {
		type:UPDATE_PANEL,
		payload:data
	}

}

export const delete_panel =(id)=> {
	return {
		type:DELETE_PANEL,
		payload:id
	}

}

export const logout=()=> {
	return {
		type:LOGOUT
	}
}

export const register=(data)=> {
	return {
		type:REGISTER,
		payload:data
	}
}


export const coinbase =(data)=> {
	console.log(data);
	return {
		type:CREATE_CHARGE,
		data
	}
}