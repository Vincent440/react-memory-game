import React from 'react'
import './style.css'

function TopNavbar (props) {
  return (
    <div className='container'>
      <nav className='navbar alignment fixed-top black-bg text-white m-0 p-1'>
        <span className='text-left appname display-4'>React <span className='d-none d-md-inline'>Memory </span>Game</span>
        <div className='btn-group btn-group-lg' role='group'>
          <span className='btn btn-lg btn-info navbar-text'>Score: {props.currentScore}</span>
          <span className='btn btn-lg btn-success navbar-text'>Top Score: {props.topScore}</span>
        </div>
        <span className='btn btn-outline-light btn-block disabled text-center message'>{props.message}</span>
      </nav>
    </div>
  )
}

export default TopNavbar
