import React from "react";
import HeaderButtons from "./components/HeaderButtons";
import Logo from "../Logo";
import Navigation from "../Navigation";
import MobileMenuButton from "../MobileMenuButton";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="header-content">
                    <div style={{marginRight: "19px"}}>
                        <Logo />
                    </div>
                    <div className="horizontal-line-67 first"></div>
                    <Navigation 
                        navClassName={"navigation"}
                        listClassName={"navigation-list"}
                        itemClassName={"navigation-item"}
                        linkClassName={"navigation-link"}
                        isLastClassName={true}
                    />
                    <div className="horizontal-line-67 second"></div>
                    <HeaderButtons />
                </div>
                <MobileMenuButton />
            </div>
        </header>
    );
}

export default Header;