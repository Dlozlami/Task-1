import { useState } from "react";

export default function Menu()
{
    const [toggle,setToggle] = useState(false);

    const iconStyles = {
        width:'15px',
        height:'15px',
        marginRight:'30px'
    }

    const show = ()=>{
        toggle?setToggle(false):setToggle(true);
    }

    let display = toggle?"w3-dropdown-content w3-bar-block w3-border w3-show":"w3-dropdown-content w3-bar-block w3-border";
    
    return(
        <div className="w3-dropdown-click">
            <button className="ButtonUnboxed" onClick={show}>
                <span>Menu </span>
                <img src='menu.png' style={iconStyles} alt='menu icon'/>
            </button>
            <div id="menu-list" className={display}>
                <a href="index.html" className="w3-bar-item w3-button">About us</a>
                <a href="index.html" className="w3-bar-item w3-button">Blog</a>
                <a href="index.html" className="w3-bar-item w3-button">Customer Care</a>
            </div>
        </div>
    );
}

