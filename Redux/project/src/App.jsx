
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './features/counter/counterSlice';
import './App.css'
function App() {

 const count =  useSelector((state)=> state.counter.value)
 const dispatch = useDispatch();

  function handelIncrement(){
    dispatch(increment())
  }

  function handelDecerement(){
      dispatch(decrement())
  }

   function handelReset(){
     dispatch(reset())
 }

  return (
    <>
      <button onClick={handelIncrement}>+</button><br />
       <p>count: {count}</p>
      <button onClick={handelDecerement}>-</button><br /><br /><br />
       <button onClick={handelReset}>Reset</button>
    </>
  )
}

export default App
