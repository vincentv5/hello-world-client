import { CREATE_PANEL,UPDATE_PANEL,DELETE_PANEL,LOGIN, LOGOUT} from './Constants';

export const login =(data)=> {
	return {
		type:LOGIN,
		payload:data
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


