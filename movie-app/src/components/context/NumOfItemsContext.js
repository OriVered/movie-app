import React, { createContext, useState } from 'react';

/**
 * Context to manage the number of items in the cart.
 */
const NumOfItemsContext = createContext();

/**
 * Provider component for the NumOfItemsContext.
 * @param {Object} children - The child components.
 * @returns {JSX.Element} - The rendered NumOfItemsProvider component.
 */
export const NumOfItemsProvider = ({ children }) => {
    const [numOfItems, setNumOfItems] = useState(0);

    return (
        <NumOfItemsContext.Provider value={{ numOfItems, setNumOfItems }}>
            {children}
        </NumOfItemsContext.Provider>
    );
};

export default NumOfItemsContext;
