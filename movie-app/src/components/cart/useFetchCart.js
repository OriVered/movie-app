import axios from 'axios';

const IMAGE_STARTING_PATH = "https://image.tmdb.org/t/p/w500";
const DEFAULT_IMAGE = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
const MOVIE_PRICE = 3.99;
const API_URL = '/cart';

/**
 * Checks the status of a movie in the cart.
 * @param {number} movieId - The ID of the movie to check.
 * @returns {Promise} - A promise that resolves to the movie status.
 */
export const checkMovieStatus = async (movieId) => {
    return await axios.get(`${API_URL}/checkMovie/${movieId}`);
};

/**
 * Adds a movie to the cart.
 * @param {Object} movie - The movie object to add to the cart.
 * @returns {Promise} - A promise that resolves when the movie is added to the cart.
 */
export const addToCart = async (movie) => {
    let image = movie.poster_path
        ? `${IMAGE_STARTING_PATH}${movie.poster_path}`
        : DEFAULT_IMAGE;
    return await axios.post(`${API_URL}/add`, {
        id: movie.id,
        image: image,
        title: movie.title,
        releaseDate: movie.release_date,
        price: MOVIE_PRICE
    });
};

/**
 * Retrieves the contents of the cart.
 * @returns {Promise} - A promise that resolves to the cart contents.
 */
export const getCartContents = async () => {
    return await axios.get(`${API_URL}/contents`);
};

/**
 * Removes a movie from the cart.
 * @param {number} movieId - The ID of the movie to remove from the cart.
 * @returns {Promise} - A promise that resolves when the movie is removed from the cart.
 */
export const removeMovieFromCart = async (movieId) => {
    return await axios.delete(`${API_URL}/delete/${movieId}`);
};

/**
 * Empties the cart.
 * @returns {Promise} - A promise that resolves when the cart is emptied.
 */
export const emptyCart = async () => {
    return await axios.post(`${API_URL}/clear`);
};
