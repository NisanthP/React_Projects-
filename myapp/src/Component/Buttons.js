import React from "react";
import './Task3.css';

const Buttons =() => {
    return(
        <>
        <div className="bg">
            <br/>
            <h1 className="text">Social Buttons</h1>
            <div className="buttons">
            <button type="button" class="btn btn-warning">Like</button> &nbsp;&nbsp;
            <button type="button" class="btn btn-light">Comment</button> &nbsp;&nbsp;
            <button type="button" class="btn btn-primary">Share</button>
            </div>
        </div>
        </>
    )
}
export default Buttons;