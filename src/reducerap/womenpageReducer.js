
import womenscollection from '../productsData/womensdress';
 
const initialState ={
    womencollection:womenscollection,
}
 const womenpageReducer =(state= initialState , action) => {
     const newState = {...state};
     return newState;
 }
 export default womenpageReducer;
  