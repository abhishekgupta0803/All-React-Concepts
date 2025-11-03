import React from 'react'

const ChildA = (props) => {
  return (
    <div>
        
        <input type="text"
        value={props.text}
        onChange={(e)=>props.setText(e.target.value)}
        placeholder='Enter Anything'
         />
         <p>ChildA Text:{props.text}</p>
    </div>
  )
}

export default ChildA