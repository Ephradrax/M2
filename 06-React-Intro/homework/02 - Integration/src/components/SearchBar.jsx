export default function SearchBar(props) {
   return (
      <div>
          <input type='search' name='search' id=''/>
      <button onClick={() =>props.onSearch('esto va a ser un id') }>Agregar</button> 
      </div>
   );
}
