import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../img/Logo";

const Logo = () => {
    return (
        <div className="logo">
            <div>
                <Link to="/">{logo}</Link>
            </div>
            <p>Департамент освіти УЦХВЄ</p>
        </div>
    );
}

export default Logo;