import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../img/Logo";

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <div>
                    {logo}
                </div>
                <p>Департамент освіти УЦХВЄ</p>
            </div>
        </Link>
    );
}

export default Logo;