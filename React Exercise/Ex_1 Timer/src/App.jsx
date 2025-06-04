import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './Stopwatch.jsx'

function App() {
    return(
      <div className='App'>
        {/* <h1> Timer </h1> */}
        <Stopwatch /> {/*renders your stopwatch*/}
      </div>

    )
      /*return of the component */
}

export default App;