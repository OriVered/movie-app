import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NumOfItemsContext from '../context/NumOfItemsContext';
import LoadingSpinner from './LoadingSpinner';
import * as useFetchCart from '../cart/useFetchCart';

/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} - The rendered navigation bar component.
 */
function Navbar() {
    const { numOfItems, setNumOfItems } = useContext(NumOfItemsContext);
    const [loading, setLoading] = useState(false);
    const [setError] = useState(null);

    useEffect(() => {
        const fetchNumOfItems = async () => {
            try {
                setLoading(true);
                const response = await useFetchCart.getCartContents();
                if (response.status === 200) {
                    setNumOfItems(response.data.length);
                } else {
                    setError('Error fetching number of items');
                }
            } catch (error) {
                setError('Error fetching number of items');
                console.error('Error fetching number of items:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNumOfItems();
    }, [setNumOfItems]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href=".#"></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">
                                SEARCH
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">
                                CART {loading ? <LoadingSpinner /> : `(${numOfItems})`}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/checkout" className="nav-link">
                                CHECKOUT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
