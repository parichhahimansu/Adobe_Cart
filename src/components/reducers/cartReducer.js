import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, GET_ITEMS, SORT_ITEMS, FILTERED_ITEMS, SEARCH_STRING, CLEAR_ITEMS } from '../actions/action-types/cart-actions'


const initState = {
    items: [],
    addedItems:[],
    originalItems: [],
    total: 0,
    sortType: ""

}
const cartReducer= (state = initState,action)=>{

    if(action.type === GET_ITEMS) {
        return {
            ...state,
            items: action.payload
        }
    }

    if(action.type === SORT_ITEMS) {
        return {
            ...state,
            items: action.payload,
            sortType: action.sortType
        }
    }

    if(action.type === FILTERED_ITEMS) {
        return {
            ...state,
            items: action.payload,
            newValue: action.newValue,
            originalItems: action.originalItems
        }
    }

    if(action.type === SEARCH_STRING) {
        return {
            ...state,
            items: action.payload,
            newValue: action.searchString,
            originalItems: action.originalItems
        }
    }

    if(action.type === CLEAR_ITEMS) {
        return {
            ...state,
            addedItems: [],
            total: 0
        }
    }
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

  else{
    return state
    }
    
}

  export default cartReducer
