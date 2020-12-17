import menspageReducer from './menReducer';
import womenpageReducer from './womenpageReducer';
import productpageReducer from './productReducer';
import cartpageReducer from './cartreducer'
import mainReducer from './homepageReducer'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    menspageReducer,
    womenpageReducer,
    productpageReducer,
    cartpageReducer,
    mainReducer,
    
});
export default allReducers;