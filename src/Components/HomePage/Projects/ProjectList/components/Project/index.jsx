import React from "react";
import { instagramLink, viberLink, telegramLink } from "../../../../../../img/Projects";

const Project = (props) => {
    const { index, img, text, href, isbutton, isSocialLinks } = props;
    return (
        <div className="project-card">
            <div className="project-card-wrap">
                <div className="project-card-head">
                    <img src={img} alt={`project-${index}`} />
                    {
                        isSocialLinks && (
                            <div className="project-links">
                                <div className="project-link project-link-instagram"><a href="#">{instagramLink}</a></div>
                                <div className="project-link project-link-viber"><a href="#">{viberLink}</a></div>
                                <div className="project-link project-link-telegram"><a href="#">{telegramLink}</a></div>
                            </div>
                        )
                    }
                    {
                        isbutton && <a href={href}>Відкрити</a>
                    }
                    
                </div>
                <div className="project-card-body">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Project;