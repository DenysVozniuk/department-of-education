import React from "react";
import { facebookIcon, instagramIcon, telegramIcon } from "../../img/SocialLinks";

const SocialLinks = (props) => {
    const { isTelegram = true, isInstagram = true, isFacebook = true } = props;
    return (
    <div className="social-buttons-links">
        { isTelegram && (<a href="https://t.me/departament_osvity_UK" className="social-buttons-link telegram"><span>{telegramIcon}</span></a>)}
        { isInstagram && (<a href="https://www.instagram.com/departament_osvity/" className="social-buttons-link instagram"><span>{instagramIcon}</span></a>)}
        { isFacebook && (<a href="https://www.facebook.com/education.pentecostal.church" className="social-buttons-link facebook"><span>{facebookIcon}</span></a>)}
    </div>

    );
}

export default SocialLinks;