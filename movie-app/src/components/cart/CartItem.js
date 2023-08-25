import React from 'react';
/**
 * Renders a single item in the shopping cart.
 * @param {Object} item - The item object containing details.
 * @param {Function} onRemove - Callback function to remove the item from the cart.
 * @returns {JSX.Element} - The rendered cart item component.
 */
const CartItem = ({ item, onRemove }) => {
    return (
        <div className="card bg-dark border-light m-1 rounded-2">
            <div className="card-body">
                <div className="row g-2">
                    <div className="col-md-4">
                        <img src={item.image} className="card-img" alt={item.title} />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-between">
                        <div className="d-flex flex-column p-1">
                            <h6 className="card-text cart-text-space">{item.title}</h6>
                            <p className="card-text cart-text-space">Release date: {item.releaseDate}</p>
                            <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                        </div>
                        <div className="p-2 m-2">
                            <button
                                className="btn btn-secondary"
                                onClick={() => onRemove(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
