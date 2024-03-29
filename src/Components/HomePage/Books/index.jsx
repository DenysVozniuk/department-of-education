import React, { useContext } from "react";
import Context from "../../../Context";
import { bookPhoto1, bookPhoto2, bookPhoto3, bookPhoto4, bookPhoto5, bookPhoto6, bookPhoto7, bookPhoto8, bookPhoto9,
     bookPhoto10, bookPhoto11, bookPhoto12, bookPhoto13, bookPhoto14, bookPhoto15, bookPhoto16 } from "../../../img/Books";
import BookList from "./BookList";

const Books = () => {
    const contextValue = useContext(Context);
    let cardList = [
        {
            image: bookPhoto1,
            title: 'Засади віровчення УЦХВЄ',
        },
        {
            image: bookPhoto2,
            title: 'Духовні дари',
        },
        {
            image: bookPhoto14,
            title: 'Вірую, обіцяю',
        },
        {
            image: bookPhoto3,
            title: 'Богослужбова практика УЦХВЄ',
        },
        {
            image: bookPhoto4,
            title: 'Юність в об’єктиві',
        },
        {
            image: bookPhoto5,
            title: 'У домі мого Батька',
        },
        {
            image: bookPhoto6,
            title: 'Основи християнської доктрини',
        },
        {
            image: bookPhoto7,
            title: 'Що треба знати до шлюбу',
        },
        {
            image: bookPhoto15,
            title: 'Подорож довжиною в життя',
        },
        {
            image: bookPhoto9,
            title: 'Новий світанок',
        },
        {
            image: bookPhoto10,
            title: 'Гіркі сливи',
        },
        {
            image: bookPhoto11,
            title: 'Крізь сумніви',
        },
        {
            image: bookPhoto12,
            title: 'Тонка грань',
        },
        {
            image: bookPhoto8,
            title: 'Я і депресія',
        },
        {
            image: bookPhoto13,
            title: 'Перемога над Голіафом',
        },
        {
            image: bookPhoto16,
            title: 'Безпечне місце',
        },
    ];

    return (
        <div ref={contextValue.booksSection} id="books" className="books-section">
            <div className="container books-container">
                <h2>Книги</h2>
                <div className="books-cards-container">
                    <BookList 
                        cardList={cardList}
                    />
                </div>
                <a href="https://renewal.org.ua/" target="_blank" rel="noreferrer">Замовити книги</a>
            </div>
        </div>
    );
}

export default Books;