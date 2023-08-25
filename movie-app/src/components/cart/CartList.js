import React from 'react';
import CartItem from './CartItem';
/**
 * Renders the list of items in the shopping cart.
 * @param {Array} cartItems - The array of items in the cart.
 * @param {Function} onRemove - Callback function to remove an item from the cart.
 * @returns {JSX.Element} - The rendered cart list component.
 */
const CartList = ({ cartItems, onRemove }) => (
    <div>
        {cartItems.length ? (
            <div className="row">
                {cartItems.map((item) => (
                    <div className="col-lg-6 col-md-6" key={item.id}>
                        <CartItem item={item} onRemove={onRemove} />
                    </div>
                ))}
            </div>
        ) : (
            <p>Your cart is empty.</p>
        )}
    </div>
);

export default CartList;
