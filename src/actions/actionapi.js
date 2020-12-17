import * as actionType from '../constants/appconstants';

export const updatecartitems =(val) => {
    return {
        type:actionType.UPDATE_CART_DATA,
        payload:val,
    }
}
export const removecartitems =(val) => {
    return {
        type:actionType.REMOVE_CART_DATA,
        payload:val,
    }
}