import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, GET_ITEMS, SORT_ITEMS, FILTERED_ITEMS, SEARCH_STRING, CLEAR_ITEMS } from './action-types/cart-actions'

// Load intial items
export const getItems = (payload) => {
    return {
        type: GET_ITEMS,
        payload
    }
}

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
// Sort items
export const sortItems = (sortType, payload) => {
    return {
        type: SORT_ITEMS,
        sortType,
        payload
        
    }
}
// Filter items
export const filteredItems = (newValue, payload, originalItems) => {
    return {
        type: FILTERED_ITEMS,
        newValue,
        payload,
        originalItems
    }
}

// Search items
export const searchItems = (searchString, payload, originalItems) => {
    return {
        type: SEARCH_STRING,
        searchString,
        payload,
        originalItems
    }
}

// Clear added items
export const clearCart = (id) => {
    return {
        type: CLEAR_ITEMS,
        id
    }
}
