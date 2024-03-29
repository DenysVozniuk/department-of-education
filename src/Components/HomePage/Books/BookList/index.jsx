import React from "react";
import Book from "./components/Book";

const BookList = (props) => {
    const { cardList } = props;

    return (
        <div className="books-cards">
            {
                cardList.map((value, index) => {
                    return ( 
                        <Book key={index} card={value} />
                    )
                })
            }
        </div>
    );
}

export default BookList;