import React, { useState, useEffect } from "react";
import { wave /*vLogo, vText*/ } from "../../../img/Main-screen";
import { projectPhoto6, projectPhoto2 } from "../../../img/Projects";

function MainScreen() {
  const [isScreenWidthLess1025, setIsScreenWidthLess1025] = useState(false);
  useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1025) {
          setIsScreenWidthLess1025(false);
        } else {
          setIsScreenWidthLess1025(true);
        }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
}, []);
  return (
    <div className="main-screen">
        <div className="container main-container">
            <div className="main-screen-content">
              <h2>Пропозиції для вас</h2>
              <div className="main-screen-cards">
                <div className="main-screen-card">
                  <div className="main-screen-card-img">
                    <img src={projectPhoto6} alt="Вірую, обіцяю" />
                  </div>
                  <a href="https://onovlennia.com.ua/courses/viruyu-obitsyayu/">Відкрити</a>
                </div>
                <div className="main-screen-card">
                  <div className="main-screen-card-img">
                    <img src={projectPhoto2} alt="Менахем" />
                  </div>
                  <a href="https://onovlennia.com.ua/">Відкрити</a>
                </div>
              </div>
                {/* <div className="main-screen-logo-container">
                  <div className="main-screen-logo-image-container">{vLogo}</div>
                  <div className="main-screen-logo-text-container">{vText}</div>
                </div>
                <div className="main-screen-container-text">
                  <p>новий навчальний відеокурс</p>
                </div>
                <a href="https://onovlennia.com.ua/courses/viruyu-obitsyayu/" className="main-screen-btn">дивитися</a> */}
            </div>
        </div>
        {
          !isScreenWidthLess1025 && (
            <>
              <div id="wave-container-1" className="wave-container">{wave}</div>
              <div id="wave-container-2" className="wave-container">{wave}</div>
            </>
          )
        }
    </div>
  );
}

export default MainScreen;
