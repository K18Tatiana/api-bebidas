import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Drink from './components/Drink'

function App() {

  const [ dataDrinks, setDataDrinks ] = useState( [] )
  const [ nameDrink, setNameDrink ] = useState( "" )

  useEffect( () => {
    getData()
  }, [nameDrink] )

  const getData = () => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameDrink}`)
    .then( resp => {
      console.log(resp.data.drinks)
      setDataDrinks(resp.data.drinks)
    } )
    .catch( error => {
      console.error(error)
      setDataDrinks(error)
    } )
  }

  const searchDrink = (e) => {
    e.preventDefault()
    setNameDrink( e.target[0].value.toLowerCase() )
  }

  return (
    <div className="App">
      <form onSubmit={ (e) => searchDrink(e) }>
        <input type="text" placeholder='Busca una bebida' />
        <button type='submit'>
          <img className='search' src="/champan.png" alt="" />
        </button>
      </form>
      {
        dataDrinks !== null
        ?
        dataDrinks.map( (drink, index) => <Drink
        key={`drink-${index}`} 
        data={ drink }
        /> )
        :
        <>
          <img className='null' src="barra-de-bar.png" alt="" />
          <h1>NO HAY COINCIDENCIAS</h1>
        </>
      }
    </div>
  )
}

export default App
