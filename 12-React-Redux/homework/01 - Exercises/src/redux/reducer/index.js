
import {ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME }from './../actions/types.js'

 const initialState = {
    list: [],
    storeName: ''
 };

 const rootReducer = (state= initialState,  action) => {
    switch(action.type){
        case ADD_PRODUCT:
            //const uplist =[...state.list, action.payload]
            return{
            ...state,
            list: [...state.list, action.payload]
            }
        case DELETE_PRODUCT:
            //const uplist =[...state.list, action.payload]
            const newlist = state.list.filter(product => product.id !== action.payload)
            return{
            ...state,
            list: newlist
            }
            case GET_STORE_NAME:
            //const abc = action.payload.map(a, i)
            return{
                ...state,
            storeName: action.payload
            }

        default:
            return {...state};   
    }
 };

 export default rootReducer;
