import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <>
      <div>
      <h1>Counter Application</h1>
      <p>Description: This application iterates a counter
        when a button is clicked.
      </p>
      <h3>In Fulfillment of ISCS 30.23 - Containerization</h3>
      </div>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Click to Iterate</button>
      <div className="card">
        <h1>Count: {count}</h1>
      </div>
    </>
    </>
  )
}

export default App
