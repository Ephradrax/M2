import React from 'react'
import './Contact.modules.css'
import { useState } from 'react';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) =>{
let errors= {};

if(!inputs.name) errors.name = "Se requiere un nombre";
if (!regexEmail.test(inputs.email)) errors.email = 'Debe ser un correo electrónico';
if (inputs.phone <= 0)errors.phone = "Sólo números positivos";
if(!inputs.subject) errors.subject = "Se requiere un asunto";
if(!inputs.message) errors.message = 'Se requiere un mensaje';

return errors;
}



export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name:'',
    email: '',
    phone:0,
    subject:'',
    message:''
  });
  
  const [errors, setErrors] = React.useState({
    name:'',
    email: '',
    phone:'',
    subject:'',
    message:''
  });
  

  const handleChange = e =>{
    setErrors(
      validate({
         ...inputs,
         [e.target.name]: e.target.value,
      })
   );


    setInputs({
    ...inputs,
    [e.target.name]: e.target.value
   } )
  }
  
const handleSubmit = e =>{
  e.preventDefault()
 if(Object.key(errors).length)alert('Debes corregir los errores')
else{
  alert('Datos completos');
   setInputs({
    name:'',
    email: '',
    phone:0,
    subject:'',
    message:''
   })
   setErrors({
    name:'',
    email: '',
    phone:'',
    subject:'',
    message:''
   })

}
 

}


  return  <form onSubmit={handleSubmit} >
    <label>Nombre:</label>
    <input type='text' className={errors.name && 'warning'} name='name' placeholder='Escribe tu nombre...' value={inputs.name} onChange={handleChange} />
    <p className='danger'>{errors.name}</p>
    <label>Correo Electrónico:</label>
    <input type="text" className={errors.email && 'warning'} name='email' placeholder='Escribe tu email...' value={inputs.email} onChange={handleChange} />
    <p className='danger'>{errors.email}</p>
    <label>Teléfono:</label>
    <input type='number' className={errors.phone && 'warning'} name='phone' placeholder='Escribe un teléfono...' value={inputs.phone} onChange={handleChange} />
    <p className='danger'>{errors.phone}</p>
    <label>Asunto:</label>
    <input type='text' className={errors.subject && 'warning'} name='subject' placeholder='Escribe el asunto...' value={inputs.subject} onChange={handleChange} />
    <p className='danger'>{errors.subject}</p>
    <label>Mensaje:</label>
    <textarea type='text' className={errors.message && 'warning'} name='message' placeholder='Escribe tu mensaje...' value={inputs.message} onChange={handleChange} />
    <p className='danger'>{errors.message}</p>
    <button type='submit' >Enviar</button>
  </form>
  
}
