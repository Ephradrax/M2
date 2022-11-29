import React from "react";
//import  { alerts }  from "./Bienvenido";
// function Botones() {
//     <div>
//         <button onClick={() => alert('Tu mensaje')} >Módulo 1</button>
//         <button onClick={() => alert('Tu mensaje')} >Módulo 2</button>
//     </div>
// }

class Botones extends React.Component {
    render(){
     return <div>

         <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>

         <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>

     </div>
    }
}
export default Botones
