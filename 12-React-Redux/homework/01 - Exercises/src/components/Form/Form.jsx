import React, { useState } from 'react';
import { connect } from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import { addProduct } from '../../redux/actions/actions';

function Form({addProduct}) {
   const [product, setProduct] = useState({ name: '', price: '', id: '' });

   function handleInputChange(e) {
      e.preventDefault();
      setProduct({ ...product, [e.target.name]: e.target.value });
   }

   function handleSubmit (){
         addProduct({...product, id: Date.now() });
   }

   return (
      <div className='formBg'>
         <div className='inputBox'>
            <label>Nombre: </label>
            <input
               name='name'
               onChange={handleInputChange}
               value={product.name}
            />
         </div>
         <div className='inputBox'>
            <label>Precio:</label>
            <input
               type='number'
               name='price'
               onChange={handleInputChange}
               value={product.price}
            />
         </div>
         <button className='formBtn' onClick={handleSubmit} >¡ADD!</button>
         <img src={Caja} alt='' className='logo' />
      </div>
   );
}
// En el cuerpo de la función se debe retornar un objeto con una propiedad llamada "addProduct" que será igual a 
//una función que recibe por parámetro product, y que en su cuerpo hace un dispatch de la action que importaste en
// el paso anterior. Recuerda que esa action recibe por parámetro product.
export function mapDispatchToProps(dispatch) {
return{
   addProduct: (product) => dispatch(addProduct(product))
}

}

export default connect(null, mapDispatchToProps)(Form);
