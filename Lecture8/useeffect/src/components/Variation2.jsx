import React, { useEffect, useState } from 'react'

const Variation2 = () => {

    const [count,setCount] = useState(0)

    //2 . that runs on only first render 
    useEffect(()=>{
        alert("that runs on only 1 render ")
    },[])
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Variation2