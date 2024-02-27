import React from 'react'
import "./assets/styles.css"

const MkBtn = ({label}) => {
  return (
    
    <div className='mk-btn'>
        <div>{label ? label : "Subscribe"}</div>
    </div>
  )
}

export default MkBtn