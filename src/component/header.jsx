import React from "react";
import { NavLink } from "react-router-dom";
import { memo } from 'react';

const Header = () => {

    return(
        <div>
            <div className="navbar">
             <div className="htext ml-10 mt-5">
                <h1 className="mr-580">Ajileye George Portfolio</h1>
             </div>
            </div>
        </div>
    )
}
export default memo(Header);