const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");
const { INCREMENTO } = require("./action-types");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store= createStore(contador) ;

// Obtenemos el elemento con el id `valor`.
const valor= document.getElementById('#valor') ;

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const cont = store.getState().contador
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML= cont;
}

// Ejecutamos la función 'renderContador':
 renderContador()
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador)
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
const incrementoButton = document.querySelector('#incremento')
const decrementoButton = document.querySelector('#decremento')
const incrementoImpar = document.querySelector('#incrementoImpar')
const incrementoAsync = document.querySelector('#incrementoAsync')

incrementoButton.addEventListener('click', ()=>{
store.dispatch(incremento())
})
decrementoButton.addEventListener('click', ()=>{
store.dispatch(decremento())
})

incrementoImpar.addEventListener('click', ()=>{
  //valor.innerHTML % 2 !== 0 && store.dispatch(incremento())
  store.getState().contador % 2 !== 0 && store.dispatch(incremento())
  })

incrementoAsync.addEventListener('click', ()=>{
    setTimeout(() =>{store.dispatch(incremento());}, 1000)
    })