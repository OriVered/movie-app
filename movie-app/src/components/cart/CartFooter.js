import React from 'react';
/**
 * Renders the footer component for the shopping cart.
 * @param {number} total - The total amount of the cart.
 * @param {Function} onEmptyCart - Callback function to empty the cart.
 * @returns {JSX.Element} - The rendered footer component.
 */
function CartFooter({ total, onEmptyCart }) {
    return (
        <div className="row">
            <div className="col-4 text-center">
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
            <div className="col-6">
                <button className="btn btn-light" onClick={onEmptyCart}>Empty Cart</button>
            </div>
        </div>
    );
}

export default CartFooter;
