import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';




const store = createStore(
	reducer,
  	applyMiddleware(thunk)
);





store.subscribe(test)
export default store;


function test() {
console.log(store.getState());
}