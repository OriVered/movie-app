import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Component for displaying search navigation options.
 * Allows users to navigate to different search pages based on the selected option.
 * @returns {JSX.Element} - SearchNavigator component.
 */
function SearchNavigator() {
    const navigate = useNavigate();

    const searchOptions = [
        { id: 'btnradio1', label: 'Search by Movie Name', path: 'search-bar' },
        { id: 'btnradio2', label: 'Search by Genre', path: 'genre-choose' },
        { id: 'btnradio3', label: 'Search by Date', path: 'date-pick' },
        { id: 'btnradio4', label: 'Search by Actor', path: 'actor-search' }
    ];

    /**
     * Handles the radio button change event.
     * Navigates to the corresponding search page based on the selected option.
     * @param {Object} event - The radio button change event.
     */
    const handleRadioChange = (event) => {
        const selectedOption = searchOptions.find(option => option.id === event.target.id);
        if (selectedOption) {
            navigate(selectedOption.path);
        }
    };

    return (
        <div className="search-navigator row bg-gray py-3 grayscale">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                {searchOptions.map(option => (
                    <React.Fragment key={option.id}>
                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id={option.id}
                            autoComplete="off"
                            defaultChecked={option.id === 'btnradio1'}
                            onChange={handleRadioChange}
                        />
                        <label className="btn btn-outline-primary" htmlFor={option.id}>
                            {option.label}
                        </label>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SearchNavigator;
