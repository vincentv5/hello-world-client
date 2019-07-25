import {compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';
const store =createStore(
		reducer,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() :
			f=>f
		)
	);


store.subscribe(test)
export default store;


function test() {
console.log(store.getState());
}