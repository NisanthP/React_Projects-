import React from "react";
import Img from './Images/profile.png'
import Watch from './Images/watch.png'
import './Task1.css'
import Menu from "./Menu";
const Congrats=() =>{
    return(
        <>
        <Menu/>
        <div className="back">
        
        <h1 className="heading">Congratulations</h1>
        <div class="text-center">
        <div className="box">
        <img src={Img} className="imagepos"/> <br/>
        <h3 className="cen">Nisanth Perumal </h3><br/>
        <p className="cen">KG College of Arts and Science, Coimbatore</p>
        <img src={Watch} className="imagepos"/> 

        </div>


</div>
<br/><br/>
</div>

</>
    );
}

export default Congrats;