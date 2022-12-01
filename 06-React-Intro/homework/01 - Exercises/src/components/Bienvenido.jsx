import React from "react";
import Botones from "./Botones.jsx";
//import ('./Botones.jsx')

const studentName = "Drax";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

const list = techSkills.map(list => <li  >{list}</li>)

export default function Bienvenido() {
  // el código de tu componente acá
  return (
  <div>
    <h1>soy henry</h1>
    <h3>{studentName}</h3>
    <ul>
      {list}
    </ul>
  <Botones alerts = {alerts} />

  </div>
  
  )
}

// Esto lo exportamos para los tests
export {studentName, techSkills, alerts };
