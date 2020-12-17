import mainhome from '../productsData/mainHome';
const initialState ={
    homeData:mainhome
}
 const mainReducer =(state= initialState , action) => {
     const newState = {...state};
     return newState;
 }
 export default mainReducer;