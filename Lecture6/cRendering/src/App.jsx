import Logout from './components/Logout.jsx'
import Login from './components/Login.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [isLoggidIN, setisLoggidIN] = useState(true)

  return (
    <>
      {isLoggidIN ? <Login /> : <Logout />}
        <br />
      {isLoggidIN  && <Login />}
    </>
  )
}

export default App
