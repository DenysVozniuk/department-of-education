import React from "react";
import Project from "./components/Project";

const ProjectList = (props) => {
    const { projectList } = props;
    return (
        <div className="project-cards">
            {
                projectList.map((value, index) => {
                    return (
                        <Project
                            key={index}
                            index={index}
                            img={value.photo}
                            text={value.text}
                            href={value.href}
                            isbutton={value.isbutton}
                            isSocialLinks={value.isSocialLinks}
                        />
                    );
                })
            }
        </div>
    );
}

export default ProjectList;