import React from 'react'
import './login.css'
import Lap from './Images/laptop.png'
import Menu from './Menu'

export function Login() {
  return (
    <>
    <Menu/>
    <div className = "bg-color container-fluid">
        <div className = "sub-container container-fluid">
            <div className = 'round'>
                <img src = {Lap} className='lap-img'/>
            </div>
            <div className='input container-fluid'>
                <h1>Member Login</h1>
                <div className='in-div'>
                <input type='email' id='mail' placeholder='        Email'></input><br/><br/>
                <input type='password' id='pwd' placeholder='       Password'></input><br/><br/>
                <button>LOGIN</button><br/><br/>
                <h6 className='login-h6'><span>Forgot </span>Username / Password ?</h6>
                <h6 className='login-h6'>Create Your Account</h6>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
