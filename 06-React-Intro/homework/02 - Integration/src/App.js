import './App.css'

import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters  from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
       <div/>
      <hr />
      <div  >
        <Cards className='ImgReg'
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
