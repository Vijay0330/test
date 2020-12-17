import * as actionType from '../constants/appconstants';
import vivoMobiles from '../productsData/mobilePhones'
const initialState ={
    data:vivoMobiles
}
 const productpageReducer =(state= initialState , action) => {
     const newState = {...state};
     return newState;
 }
 export default productpageReducer;