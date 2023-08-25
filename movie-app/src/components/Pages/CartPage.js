import React, { useState, useEffect, useCallback, useContext } from 'react';
import * as useFetchCart from '../cart/useFetchCart';
import CartList from '../cart/CartList';
import CartFooter from '../cart/CartFooter';
import '../../css/CartPage.css';
import LoadingSpinner from '../home/LoadingSpinner';
import NumOfItemsContext from '../context/NumOfItemsContext';

const ERROR_FETCHING_CART_CONTENTS = 'Error fetching cart contents';
const ERROR_REMOVING_MOVIE_FROM_CART = 'Error removing movie from cart';
const ERROR_EMPTYING_CART = 'Error emptying the cart';

/**
 * Component for the cart page.
 * @returns {JSX.Element} - CartPage component.
 */
function CartPage() {
    const { setNumOfItems } = useContext(NumOfItemsContext);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCartContents = useCallback(async () => {
        try {
            setLoading(true);
            const response = await useFetchCart.getCartContents();
            if (response.status === 200) {
                const cartItems = response.data;
                setCartItems(cartItems);
                setTotal(calculateTotal(cartItems));
            }
        } catch (error) {
            setError(ERROR_FETCHING_CART_CONTENTS);
            console.error('Error fetching cart contents: ', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCartContents();
    }, [fetchCartContents]);

    /**
     * Calculates the total price of the cart items.
     * @param {Array} items - The cart items.
     * @returns {number} - The total price.
     */
    const calculateTotal = (items) => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    /**
     * Removes a movie from the cart.
     * @param {number} movieId - The ID of the movie to remove.
     */
    const removeMovieFromCart = async (movieId) => {
        try {
            await useFetchCart.removeMovieFromCart(movieId);
            setCartItems((cartItems) => cartItems.filter(item => item.id !== movieId));
            setTotal((total) => total - cartItems.find(item => item.id === movieId).price);
            setNumOfItems((prevNumOfItems) => prevNumOfItems - 1);
        } catch (error) {
            setError(ERROR_REMOVING_MOVIE_FROM_CART);
        }
    };

    /**
     * Empties the cart.
     */
    const emptyCart = async () => {
        try {
            await useFetchCart.emptyCart();
            setCartItems([]);
            setTotal(0);
            setNumOfItems(0);
        } catch (error) {
            setError(ERROR_EMPTYING_CART);
        }
    };

    /**
     * Renders the content based on the cart state.
     * @returns {JSX.Element} - The rendered content.
     */
    const renderContent = () => {
        if (loading) {
            return <LoadingSpinner />;
        }
        if (error) {
            return <p>{error}</p>;
        }
        if (!cartItems || cartItems.length === 0) {
            return <p>Your cart is empty.</p>;
        }
        return (
            <>
                <CartList cartItems={cartItems} onRemove={removeMovieFromCart} />
                <div className="row p-2 m-2">
                    <CartFooter total={total} onEmptyCart={emptyCart} />
                </div>
            </>
        );
    };

    return (
        <div className="container">
            <h2>My Cart</h2>
            {renderContent()}
        </div>
    );
}

export default CartPage;
