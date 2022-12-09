import {ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME }from './types'
import axios from "axios"; 

//Define y exporta una función llamada addProduct que recibe como parámetro product.
//Esta función debe retornar la propiedad type con el valor ADD_PRODUCT, y la propiedad payload con el valor que recibe por parámetro la función.
 const addProduct = (product) =>{
return({
    type:ADD_PRODUCT,
    payload:product
 })}
//Define y exporta una función llamada deleteProduct que recibe como parámetro id
//Esta función debe retornar la propiedad type con el valor DELETE_PRODUCT, y la propiedad payload con el valor que recibe por parámetro la función.

const  deleteProduct = (id) =>{
return({
    type:DELETE_PRODUCT,
    payload:id
})}

// export const getStoreName = () => {
//     return function (dispatch) {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then((data) => dispatch({ type: GET_USERS, payload: data }));
//     };
//   };
 export async function getStoreName  (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/store");
      return dispatch({ 
        type: GET_STORE_NAME, 
        payload: response 
    }
        
      );
    } catch (error) {
      console.log(error);
    }
  };
  


export{addProduct, deleteProduct}