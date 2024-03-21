import React from "react";
import FooterBody from "./components/FooterBody";
import FooterBottom from "./components/FooterBottom";

const Footer = () => {
    return (
        <footer id="contacts" className="footer">
            <div className="footer-wrap">
                <FooterBody />
                <FooterBottom />
            </div>
        </footer>
    );
}

export default Footer;