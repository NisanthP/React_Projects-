import React from 'react'
import './notification.css'
export function Notifications() {
  return (
    <>
    <div className='main'>
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
