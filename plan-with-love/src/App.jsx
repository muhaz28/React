import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data.js"
import Tours from './components/Tours.jsx'

function App() {

  const [tours,setTours] = useState(data);

  function handleRemoveTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h3>No Tours Left</h3>
        <button className='btn-white' onClick={()=> setTours(data)}>Refresh </button>
      </div>
    )
  }

  return (
    <div className='App'>
      <h2>Plan With Love</h2>
      <Tours tours={tours} remove={handleRemoveTour}/>
    </div>
  )
}

export default App
