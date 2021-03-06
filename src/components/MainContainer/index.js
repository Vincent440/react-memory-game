import React from 'react'
import './style.css'

function MainContainer (props) {
  return (
    <div className='container p-0'>
      <div className='row no-gutters p-0'>
        {props.children}
      </div>
    </div>
  )
}

export default MainContainer
