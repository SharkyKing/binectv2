import React from 'react';
import './sidebarbutton.css'

const SidebarButton = ({ onClick, icon, label }) => {

    return (
        <div>
            <button className="sidebarbtn" onClick={onClick}>
                {icon && <img className = "sidebarbtn-img" src={icon} alt={label} />}
            </button>
        </div>
    );
}

export default SidebarButton;