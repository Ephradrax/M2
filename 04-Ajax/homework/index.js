const btnamigos = document.querySelector('#boton')
const lsgg = document.querySelector('lista')
const btnSearch = document.querySelector('#search')
const amigoSearch = document.querySelector('#amigo')
const btndelete = document.querySelector('#delete')
const resdelete = document.querySelector('#success')

let inputsearch= document.querySelector('#input')
let inputdelete = document.querySelector('inputDelete')


btnamigos.addEventListener('click', function (){
//  lsgg.innerHTML = ''
  let id = inputsearch.value
  inputsearch.value = ''
  fetch('http://localhost:5000/amigos')
  .then(r => r.json())
  .then(amigos =>{
    for (let i = 0; i < amigos.length; i++) {
      let li = `<li>${amigos[i].name}</li>`
      lsgg.innerHTML += li
    }
  })
  .catch(err => lsgg.innerHTML = 'error no tiene amigos')
})
// 

btnSearch.addEventListener('click', function(){
 // let id = document.querySelector('#input').value
 let id = inputdelete.value
 inputdelete.value = ''
// ``
  fetch(`http://localhost:5000/amigos${id}`)
  .then(r => r.json())
  .then(amigos =>{
  amigoSearch.innerText = amigos.name
  })
  .catch(err => amigoSearch.innerText= `NO se encontro el amigo con el id = ${id}` )
})

btndelete.addEventListener('click', function(){
  let id = document.querySelector('#inputDelete').value
  

  fetch(`http://localhost:5000/amigos${id}`, {
   method: 'DELETE'
})
.then(r => r.json())
.then(r =>resdelete.innerText = 'amigo borrado de la lista')

})
