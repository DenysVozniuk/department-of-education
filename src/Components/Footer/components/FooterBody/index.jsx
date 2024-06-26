import React from "react";
import Logo from "../../../Logo";
import SocialLinks from "../../../SocialLinks";
import { emailIcon, UPCIcon } from "../../../../img/Footer";

const FooterBody = () => {
    return (
        <div className="footer-body">
            <div className="container main-container">
                <div className="footer-body-wrap">
                    <div className="footer-body-wrap-logo">
                        <Logo />
                    </div>
                    <p className="footer-text">3 Oniskevycha st., Kyiv, Ukraine 03115.</p>
                    <div className="footer-body-links">
                        <div className="footer-email-wrap">
                            {emailIcon}
                        </div>
                        <div className="footer-text footer-email-link">info@chveu-osvita.org.ua</div>
                    </div>
                    <a className="footer-body-links" href="https://www.chve.org.ua" target="_blank" rel="noreferrer">
                        <div className="footer-site-wrap">
                            {UPCIcon}
                        </div>
                        <div className="footer-text footer-site-link">сайт УЦХВЄ</div>
                    </a>
                    {/* <div className="footer-body-content">
                        <p className="footer-text">3 Oniskevycha st., Kyiv, Ukraine 03115.</p>
                        <div className="footer-body-links">
                            <div className="footer-email-wrap">
                                {emailIcon}
                            </div>
                            <a className="footer-text footer-email-link" target="_blank" href="/">info@chveu-osvita.org.ua</a>
                        </div>
                        <div className="footer-body-links">
                            <div className="footer-phone-wrap">
                                {phoneIcon}
                            </div>
                            <a className="footer-text footer-phone-link" target="_blank" href="/">(044) 452 21 40</a>
                        </div>
                    </div> */}
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}

export default FooterBody;