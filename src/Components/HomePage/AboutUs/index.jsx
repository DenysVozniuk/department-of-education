import React, {useContext} from "react";
import Context from "../../../Context";
import LineCircle from "./components/LineCircle";
import { logoIcon } from "../../../img/About-us";

function AboutUs() {
    const contextValue = useContext(Context);
  return (
    <div ref={contextValue.aboutUsSection} id="about-us" className="about-us">
        <div className="about-us-background"></div>
        {/* <div className="line-circle-wrap" style={{top: '606px', left: '-222px'}}>
            <LineCircle rotate={-43} lineWidth={740} />
        </div>
        <div className="line-circle-wrap" style={{top: '-52px', left: '588px'}}>
            <LineCircle rotate={137} lineWidth={289} />
        </div>
        <div className="line-circle-wrap" style={{bottom: '0', left: '318px'}}>
            <LineCircle rotate={-45} lineWidth={105} />
        </div>
        <div className="line-circle-wrap" style={{bottom: '0', right: '428px'}}>
            <LineCircle rotate={-120} lineWidth={101} />
        </div>
        <div className="line-circle-wrap" style={{bottom: '0', right: '262px'}}>
            <LineCircle rotate={-120} lineWidth={156} />
        </div> */}
        <div className="container about-us-container">
            <div className="about-us-logo">
                {logoIcon}
            </div>
            <div className="about-us-body">
                <div className="about-us-title">
                    <h2 className="about-us-h2">Про нас</h2>
                </div>
                <div className="about-us-content">
                    <p className="about-us-text"><span>Департамент освіти УЦХВЄ</span> – це один із підрозділів Церкви Християн Віри Євангельської України, основним завданням якого є поширення здорової євангельської науки у помісні церкви братерства, а також організаційне та методологічне забезпечення цього процесу.</p>
                    <br />
                    <p className="about-us-text">До складу департаменту входять керівники обласних управлінь освіти, керівники навчальних закладів, вчителі братерства.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
