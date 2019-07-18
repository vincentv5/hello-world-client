import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "tachyons";
import 'bootstrap/dist/css/bootstrap.css';
// import "mdbreact/dist/css/mdb.css";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Components/Store';
import jwtDecode  from 'jwt-decode';
import {setAuthorizationHeader} from './Components/Store/Action';
import { login } from './Components/Store/ActionsCreator';

if(localStorage.getItem('jwt')) {
		setAuthorizationHeader(localStorage.getItem('jwt'));
		try{
			store.dispatch(login(jwtDecode(localStorage.getItem('jwt'))))	

		}catch{
				store.dispatch(login({}))
		}
}





ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
	<App />
	</BrowserRouter>
	</Provider>
	, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
