import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useState } from 'react';

const InfoEnviada = () => {

   const { formulario } = useSelector((state) => {
      return state;
   });

   
   
   const [informacion, setinformacion] = React.useState({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
   });
   React.useEffect(()=>{
      setinformacion: {formulario}
      

   }, [{formulario}]);
   

   return (
      <div>
         <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
          <h3>{formulario.nombre}</h3>
          <h3>{formulario.email}</h3>
          <h3>{informacion.asunto}</h3>
          <h3>{informacion.mensaje}</h3>
      
      </div>
   );
};

export default InfoEnviada;
