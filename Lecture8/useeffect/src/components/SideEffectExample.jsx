import React, { useEffect, useState } from 'react'

const SideEffectExample = () => {

    const [count,setCount] = useState(0)

    //1 . Runs on Every Render 
    useEffect(()=>{
        alert("Runs on Every Render")
    })
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default SideEffectExample