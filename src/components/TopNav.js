import React from "react";
import propTypes from "prop-types";

function TopNav(props){
    return(
        <div className="top-nav">
            <ul>
                <li><a href="#" onClick={(e)=>{e.preventDefault(); props.changeCategory("headlights")}}>Car Lights</a></li>

                <li><a href="#" onClick={(e)=>{e.preventDefault(); props.changeCategory("tires")}}>Car Wheels</a></li>

                <li><a href="#" onClick={(e)=>{e.preventDefault(); props.changeCategory("bumpers")}}>Car and Truck Bumpers</a></li>

                <li><a href="#" onClick={(e)=>{e.preventDefault(); props.changeCategory("audio")}}>Car Audio System</a></li>
                
                <li><a href="contact.html">Feedback</a></li>
                <div className="clear"> </div>
            </ul>
        </div>
    );
}

TopNav.propTypes = {
   changeCategory: propTypes.func.isRequired
}

export default TopNav;