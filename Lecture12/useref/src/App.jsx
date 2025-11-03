
import { useRef,useState } from 'react'
import './App.css'

function App() {
  const ref =   useRef(0);
  const [count,setCount ]= useState(0);

  function Increment(){
    setCount(count + 1);
    ref.current = ref.current + 1;
  }

  return (
    <>
      <h3>ref  :{ref.current}</h3>
      <h3>Count : {count}</h3>
      <button onClick={Increment}>Click</button>
    </>
  )
}

export default App
