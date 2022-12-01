export default function Card(props) {
   return (
      <div>
          <button className="btn" onClick={props.onClose}>X</button>
         <h2 className="editname" >{props.name}</h2>
         <h2 className="editspecies" >{props.species}</h2>
         <h2 className="editgender" >{props.gender}</h2>
         <img className="ImgReg" src={props.image} alt={props.name} /> 
      </div>
   );
}
