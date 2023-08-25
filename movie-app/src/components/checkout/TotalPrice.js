import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../home/LoadingSpinner';

/**
 * Renders the total price component.
 * @param {Function} setCartEmpty - Callback function to set the cart empty state.
 * @param {Function} setError - Callback function to set the error state.
 * @returns {JSX.Element} - The rendered total price component.
 */
const TotalPrice = ({ setCartEmpty, setError }) => {
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTotalPrice = async () => {
            try {
                const response = await axios.get('/cart/total');
                if (response.status === 200) {
                    setTotal(response.data);
                    setLoading(false);
                    if (response.data === 0) {
                        setCartEmpty(true);
                    } else {
                        setCartEmpty(false);
                    }
                }
            } catch (error) {
                console.log('Error fetching contents:', error);
                setError(error.message);
                setLoading(false);
            }
        };
        fetchTotalPrice();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (total === 0) {
        return <p>Your cart is empty.</p>;
    }

    return <h4 className="text-warning">Total Price: ${total.toFixed(2)}</h4>;
};

export default TotalPrice;
