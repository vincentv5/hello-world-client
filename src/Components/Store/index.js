import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';

const store =createStore(
	reducer,
	applyMiddleware(thunk),
	compose(
		Window._DEVTOOLS_EXTENSION_&&Window._DEVTOOLS_EXTENSION_()
		)
	);


store.subscribe(test)
export default store;


function test() {
console.log(store.getState());
}