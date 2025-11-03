import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   const navgiate = useNavigate()
  function NavgiateFunc(){
    navgiate("/about");
  }
  return (
    <div>
      <button onClick={NavgiateFunc}>Move to About Page</button>
    </div>
  )
}

export default Home