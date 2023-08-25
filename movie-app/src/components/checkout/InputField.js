import React from 'react';
/**
 * Renders an input field component.
 * @param {string} type - The type of input field.
 * @param {string} name - The name of the input field.
 * @param {string} value - The value of the input field.
 * @param {Function} handleInputChange - Callback function to handle input changes.
 * @returns {JSX.Element} - The rendered input field component.
 */
const InputField = ({ type, name, value, handleInputChange }) => {
    return (
        <div className="mb-3 row justify-content-center">
            <label htmlFor={name} className="form-label col-sm-12">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <div className="col-sm-12 col-md-4">
                <input
                    type={type}
                    className="form-control"
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </div>
    );
};

export default InputField;
