import React from "react";
import csk from './Images/csk-img.png';
import rcb from './Images/rcb-img.png';
import './Task2.css'

const Ipl = () =>{
    return(
    <>
    <div className="bgm">
    <br/>
    <h1 className="heading">Super Over League</h1>
    <div className="cont">
    
    <img src={csk} className="csk"/>
    <img src={rcb} className="rcb"/>
    </div>
    </div>
    </>
    )
}

export default Ipl;