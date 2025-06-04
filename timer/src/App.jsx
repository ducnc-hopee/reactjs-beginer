import { useState } from 'react'
import './App.css'
import { DEFAULT_START_TIME } from './constants/time'

function App() {
  const [state, setState] = useState({
    name: "name",
    age: 15
  })


  const handleChange = () =>{
    const newState = {...state};
    newState.name = "abc"
    setState(newState)
  }

  return (
    <>
      <div>
        <h1>{DEFAULT_START_TIME} minutes Timer</h1>
        {/* abc: 15 */}
        <p>{state.name}: {state.age}</p>
        <button onClick={handleChange}>change</button>
      </div>
    </>
  )
}

export default App
