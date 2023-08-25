import React, { useState, useEffect, useCallback, useContext } from 'react';
import * as useFetchCart from '../cart/useFetchCart';
import '../../css/MovieStatusInCart.css';
import NumOfItemsContext from '../context/NumOfItemsContext';
import LoadingSpinner from '../home/LoadingSpinner';

/**
 * Component to display the status of a movie in the cart and handle adding it to the cart.
 * @param {Object} props - Component props.
 * @param {Object} props.movie - The movie object.
 * @returns {JSX.Element} - MovieStatusInCart component.
 */
function MovieStatusInCart({ movie }) {
    const { numOfItems, setNumOfItems } = useContext(NumOfItemsContext);
    const [status, setStatus] = useState('');
    const [isInCart, setIsInCart] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const STATUS_MESSAGES = {
        ALREADY_IN_CART: 'Movie already in cart',
        ERROR_CHECKING_STATUS: 'Error checking movie status',
        ERROR_ADDING_TO_CART: 'Error adding movie to cart.',
        MOVIE_ADDED: 'Movie added',
    };

    /**
     * Check the status of the movie in the cart.
     */
    const checkMovieStatus = useCallback(async () => {
        try {
            setLoading(true); // Start loading
            const response = await useFetchCart.checkMovieStatus(movie.id);
            if (response.status === 200) {
                const exists = response.data;
                if (exists) {
                    setStatus(STATUS_MESSAGES.ALREADY_IN_CART);
                    setIsInCart(true);
                }
            }
        } catch (error) {
            setStatus(STATUS_MESSAGES.ERROR_CHECKING_STATUS);
        } finally {
            setLoading(false); // End loading
        }
    }, [movie.id]);

    useEffect(() => {
        checkMovieStatus();
    }, [checkMovieStatus]);

    useEffect(() => {
        if (error) {
            alert('Error: ' + error);
        }
    }, [error]);

    /**
     * Add the movie to the cart.
     */
    const handleAddToCart = async () => {
        try {
            console.log(movie)
            setLoading(true);
            await useFetchCart.addToCart(movie);
            setStatus(STATUS_MESSAGES.MOVIE_ADDED);
            setIsInCart(true);
            setNumOfItems(prevNumOfItems => prevNumOfItems + 1); // Increment the number of items in cart
        } catch (error) {
            setError(STATUS_MESSAGES.ERROR_ADDING_TO_CART);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                status ? (
                    <p>{status}</p>
                ) : (
                    <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={isInCart}>
                        {isInCart ? 'Already in cart' : 'Add to cart'}
                    </button>
                )
            )}
        </div>
    );
}

export default MovieStatusInCart;
