import React from 'react'
import './style.css'

function CharacterCard (props) {
  return (
    <div className='card mx-auto'>
      <div onClick={() => props.handleClick(props.id)} className='clickable img-container'>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  )
}

export default CharacterCard
