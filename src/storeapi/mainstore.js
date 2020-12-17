import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducerap/allcombinedReducer';
 const store = createStore(allReducers,
    composeWithDevTools(applyMiddleware(thunk)),
      );
export default store;
