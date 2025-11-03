import Button from './components/Button.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function countIncrement(){
     setCount(count + 1);
  }

  return (
    <>
      <Button text="Click" Increment={countIncrement}>
        <p>{count}</p>
      </Button>
    </>
  )
}

export default App
