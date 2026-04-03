import React from "react";
import { NavLink } from "react-router-dom";
import { memo } from 'react';

const Button = ( className , text ) => {

    return(
        <a className = {`${className ?? ''} buttons`}>
            <div className="blob1">
             <div className="blob2">
                <p className="inner">{text}</p>
             </div>
            </div>
        </a>
    )
} 
export default memo(Button);