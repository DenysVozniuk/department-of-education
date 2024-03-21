import React from "react";
import { wave, vLogo, vText } from "../../../img/Main-screen";

function MainScreen() {
  return (
    <div className="main-screen">
        <div className="container main-container">
            <div className="main-screen-content">
                <div className="main-screen-logo-container">
                  <div className="main-screen-logo-image-container">{vLogo}</div>
                  <div className="main-screen-logo-text-container">{vText}</div>
                </div>
                <div className="main-screen-container-text">
                  <p>новий навчальний відеокурс</p>
                </div>
                <a href="https://onovlennia.com.ua/courses/viruyu-obitsyayu/" className="main-screen-btn">дивитися</a>
            </div>
        </div>
        <div id="wave-container-1" className="wave-container">{wave}</div>
        <div id="wave-container-2" className="wave-container">{wave}</div>
    </div>
  );
}

export default MainScreen;
