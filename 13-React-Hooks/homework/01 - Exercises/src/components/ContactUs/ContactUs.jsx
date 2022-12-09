import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";


const ContactUs = () => {

  const dispatch = useDispatch();

function handleSubmit(){
  dispatch(enviarForm(form))

}

  const [form, setForm] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  
  function handleInput(e){
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
  }
  return (
    <div className="contactBg">
      <input name="nombre" onChange={handleInput} ></input>
      <input name="email" onChange={handleInput} ></input>
      <input name="asunto" onChange={handleInput} ></input>
      <input name="mensaje" onChange={handleInput} ></input>
      <button onClick={handleSubmit} >ENVIAR</button>
    </div>
  );
};

export default ContactUs;
