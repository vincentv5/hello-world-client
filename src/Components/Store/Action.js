import { login,create_panel,delete_panel,update_panel,logout} from './ActionsCreator';

export const Login_user =data=>dispatch=> {
//posting into  db server
  dispatch(login(data));	
}

export const Create_panel=data=>dispatch=>{
//posting date into db server
  dispatch(create_panel(data))
}

export const Delete_panel=id=>dispatch=> {
	// deleting with id in db server
	dispatch(delete_panel(id));
}

export const Update_panel =data=>dispatch=> {	
	// updating with id in db server
	 dispatch(update_panel(data));
}

export const Logout=()=>dispatch=>{
	dispatch(logout());
}


