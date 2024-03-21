import React from "react";
import OrderBody from "./OrderBody";
import OrderBottom from "./OrderBottom";

const OrderPage = () => {
    return (
        <div className="container order-page-container">
            <h1>Замовлення книг</h1>
            <p className="order-page-head-content">Ваше замовлення — це добровільне пожертвування на розвиток Департаменту освіти УЦХВЄ</p>
            <OrderBody />
            <OrderBottom />
        </div>
    );
}

export default OrderPage;