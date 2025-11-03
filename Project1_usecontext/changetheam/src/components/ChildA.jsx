import React, { useContext } from 'react'
import { Theam } from '../App'
// import '../components/style.css'


const ChildA = () => {
 const {theme,setTheme} = useContext(Theam);

    function changeTheam(){
        if(theme === "light"){
            setTheme("dark")
        }else{
          setTheme("light")
        }
    }
  return (
    <div >
        <button onClick={changeTheam}>Change Theam </button>
    </div>
  )
}

export default ChildA