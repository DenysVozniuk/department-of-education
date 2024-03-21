import React from "react";
import { facebookIcon, instagramIcon, telegramIcon } from "../../img/SocialLinks";

const SocialLinks = (props) => {
    const { isTelegram = true, isInstagram = true, isFacebook = true } = props;
    return (
    <div className="social-buttons-links">
        { isTelegram && (<a href="./" className="social-buttons-link telegram"><span>{telegramIcon}</span></a>)}
        { isInstagram && (<a href="./" className="social-buttons-link instagram"><span>{instagramIcon}</span></a>)}
        { isFacebook && (<a href="./" className="social-buttons-link facebook"><span>{facebookIcon}</span></a>)}
    </div>

    );
}

export default SocialLinks;