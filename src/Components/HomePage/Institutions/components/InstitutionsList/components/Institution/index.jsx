import React from "react";

const Institution = (props) => {
    const { index, name, address, href, image } = props;
    return (
        <div className="institution-card">
            <div className="institution-card-content">
                <h3>{name}</h3>
                <p>{address}</p>
                <a href={href} target="_blank" rel="noreferrer">сайт</a>
            </div>
            <div className="institution-card-image">
                <img src={image} alt={`institution-${index}`} />
            </div>
        </div>
    );
}

export default Institution;