import React from "react";

const Book = (props) => {
    const { card } = props;

    return (
        <div className="book-card">
            <div className="d-flex flex-column justify-space-between align-items-center flex-1">
                <div className="book-card-img-container">
                    <img className="book-card-img" src={card.image} alt="book" />
                </div>
                <h3 className="book-card-text">{card.title}</h3>
            </div>
        </div>
    );
}

export default Book;