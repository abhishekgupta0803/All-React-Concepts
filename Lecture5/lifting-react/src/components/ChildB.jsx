import React from 'react'

const ChildB = (props) => {
  return (
    <div>
        
        <input type="text"
        value={props.text}
        onChange={(e)=>props.setText(e.target.value)}
        placeholder='Enter Anything'
         />
         <p>ChildB Text:{props.text}</p>
    </div>
  )
}

export default ChildB