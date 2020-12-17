import menstshirt from '../productsData/menstShirts';
const initialState ={
    menstshirtdata:menstshirt
}
 const menspageReducer =(state= initialState , action) => {
     const newState = {...state};
     return newState;
 }
 export default menspageReducer;