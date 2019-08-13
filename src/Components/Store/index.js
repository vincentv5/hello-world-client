import {compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';

// let store=null;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
));

// if(process.env.NODE_ENV === 'production') {
//    store =createStore(
// 		reducer,
// 		compose(
// 			applyMiddleware(thunk),	
// 		)
// 	);
// } else {
//     store =createStore(
// 		reducer,
// 		compose(
// 			applyMiddleware(thunk),
// 			window.devToolsExtension ? window.devToolsExtension() :
// 			f=>f
// 		)
// 	);
// }



store.subscribe(test)
export default store;


function test() {
console.log(store.getState());
}