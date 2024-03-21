import React from "react";
import OrderForm from "./components/OrderForm";

const OrderBody = () => {
    return (
        <div className="order-body">
            <div className="order-body-background"></div>
            <div className="order-form-container">
                <OrderForm />
            </div>
        </div>
    );
}

export default OrderBody;