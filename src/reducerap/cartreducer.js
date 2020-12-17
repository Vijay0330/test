import * as actionType from '../constants/appconstants';
const initialState ={
    cartdata:[]
}
 const cartpageReducer =(state= initialState , action) => {
     const newState = {...state};
     // eslint-disable-next-line default-case
     switch(action.type) {
        case actionType.UPDATE_CART_DATA :
            return {
                ...state,
                cartdata:state.cartdata.concat(action.payload) ,
            }
        case actionType.REMOVE_CART_DATA :
            return {
                ...state,
                cartdata:state.cartdata.filter(e=> e !== action.payload),
            }
     }
     return newState;
 }
 export default cartpageReducer;