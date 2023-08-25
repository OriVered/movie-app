import React, { useState } from 'react';
import '../../css/CartPage.css';
import PaymentForm from '../checkout/PaymentForm';
import TotalPrice from '../checkout/TotalPrice';

/**
 * Component for the checkout page.
 * @returns {JSX.Element} - CheckoutPage component.
 */
function CheckoutPage() {
    const [cartEmpty, setCartEmpty] = useState(false);
    const [error, setError] = useState(null);

    return (
        <div className="container justify-content-center text-center">
            <h1>Checkout</h1>
            <TotalPrice setCartEmpty={setCartEmpty} setError={setError} />
            {!cartEmpty && !error && <PaymentForm />}
        </div>
    );
}

export default CheckoutPage;
