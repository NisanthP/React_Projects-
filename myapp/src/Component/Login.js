import React from 'react'
import './login.css'
import Lap from './Images/laptop.png'

export function Login() {
  return (
    <>
    <div className = "bg-color">
        <div className = "sub-container">
            <div className = 'round'>
                <img src = {Lap} className='lap-img'/>
            </div>
            <div className='input'>
                <h1>Member Login</h1>
                <input type='email' id='mail' placeholder='        Email'></input><br/><br/>
                <input type='password' id='pwd' placeholder='       Password'></input><br/><br/>
                <button>LOGIN</button><br/><br/>
                <h6><span>Forgot </span>Username / Password ?</h6>
                <h6>Create Your Account</h6>
            </div>
        </div>
    </div>
    </>
  )
}
