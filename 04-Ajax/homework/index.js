const btnamigos = document.querySelector('#boton')
const lsgg = document.querySelector('#lista')
const btnSearch = document.querySelector('#search')


let amigoSearch = document.querySelector('#amigo')
const btndelete = document.querySelector('#delete')
const resdelete = document.querySelector('#success')


let inputsearch= document.querySelector('#input')
let inputdelete = document.querySelector('#inputDelete')

function showFriends(){
  lsgg.innerHTML = ''
   fetch(`http://localhost:5000/amigos`)
   .then(r => r.json())
   .then(amigos =>{
     for (let i = 0; i < amigos.length; i++) {
       let li = `<li>${amigos[i].name} <button onclick='deleteamigos(${amigos[i].id})'>X</button></li>`
       lsgg.innerHTML += li
     }
   })
   .catch(err => lsgg.innerHTML = 'error no tiene amigos')
 }


function deleteamigos(id){
  if(typeof id !== 'number'){
     id = inputdelete.value
  }

  inputdelete.value = ''
  fetch(`http://localhost:5000/amigos/${id}`, {
   method: 'DELETE'
})
.then(r => r.json())
.then(r => {
  resdelete.innerText = 'Amigo borrado de la lista'
  showFriends()
})
}


function searchfriend(){
  let id = inputsearch.value
  inputsearch.value = ''
// ``
  fetch(`http://localhost:5000/amigos/${id}`)
  .then(r => r.json())
  .then(amigo => {
  amigoSearch.innerText = amigo.name
  })
  .catch(err => amigoSearch.innerText= `No se encontro el amigo con el id = ${id}` )
}




btnamigos.addEventListener('click', showFriends)

// 

btnSearch.addEventListener('click', searchfriend)
 // let id = document.querySelector('#input').value
//  let id = inputsearch.value
//   inputsearch.value = ''
// // ``
//   fetch(`http://localhost:5000/amigos/${id}`)
//   .then(r => r.json())
//   .then(amigo => {
//   amigoSearch.innerText = amigo.name
//   })
//   .catch(err => amigoSearch.innerText= `NO se encontro el amigo con el id = ${id}` )
// })
//


btndelete.addEventListener('click', deleteamigos)
//   //let id = document.querySelector('#inputDelete').value
//   let id = inputdelete.value
//   inputdelete.value = ''
//   fetch(`http://localhost:5000/amigos/${id}`, {
//    method: 'DELETE'
// })
// .then(r => r.json())
// .then(r => {
//   resdelete.innerText = 'Amigo borrado de la lista'
//   showFriends()
// })
// })
