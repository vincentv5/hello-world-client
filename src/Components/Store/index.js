import {compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';

let store=null;

if(process.env.NODE_ENV === 'production') {
   store =createStore(
		reducer,
		compose(
			applyMiddleware(thunk),	
		)
	);
} else {
    store =createStore(
		reducer,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() :
			f=>f
		)
	);
}



store.subscribe(test)
export default store;


function test() {
console.log(store.getState());
}