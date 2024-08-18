import React from 'react'
import './notification.css'
import Menu from './Menu'
export function Notifications() {
  return (
    <>
    <Menu/>
    <div className='main container-fluid'>
        <span>
        <h1>Notifications</h1>
        <div className = 'inf'>
            <p>Information Message</p>
        </div>
        <div className = 'suc'>
            <p>Success Message</p>

        </div>
        <div className = 'war'>
            <p>Warning Message</p>
        </div>
        <div className = 'err'>
            <p>Error Message</p>
        </div>
        </span>
        
    </div>
    </>
  )
}
