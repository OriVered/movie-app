# Movie E-commerce Website

This is a modern e-commerce website that allows customers to browse movies, add them to a cart, and complete a purchase. The website is built using React on the front end and Spring on the back end. It utilizes the TMDB API (https://www.themoviedb.org/documentation/api) to fetch movie data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Search Attributes](#search-attributes)
- [Cart Management](#cart-management)
- [Screen Previews](#screen-previews)
---------------------
## Features

- Search movies by title, genre, release date, and actor name.
- View search results and select movies to add to the shopping cart.
- Manage the shopping cart by adding or removing items.
- Calculate the total cost of the cart.
- Complete a purchase by providing customer information.
- View and manage the purchase history.
---------------------
## Prerequisites

Before getting started, make sure you have the following:

- TMDB API key: Register on the TMDB website (https://www.themoviedb.org/settings/api) to obtain an API key.
- SQL Server: Set up a SQL Server and create a database named "ex4" for storing completed orders.
---------------------
## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Solange-s-Courses/ex4-java-neviim-ex4_ori_vered_and_damian_tissembaum.git

2. Set up the front-end:
   ```shell
   cd movie-app
   npm install
   npm install bootstrap
   npm install bootstrap-icons

3. Set up the back-end:
   - Start Xampp apache server
   - Start Xampp MySQL server 
   - Start IntelliJ server

---------------------
## Usage

1. Start the front-end server:
   ```shell
   cd movie-app
   npm start

2. Set up the back-end:
   Start Xampp apache server
   Start Xampp MySQL server
   Start IntelliJ server

3. Access the website at http://localhost:3000.

---------------------
## Search Attributes

The search page allows you to perform searches using different attributes:

- *Title*: Click on Search > Search by Movie Name. In the space to input, enter the title of a movie to search for specific movies.
- *Genre*: Click on Search > Search by Genre. Select from a list of available genres (Animation, Music, Family, Crime, etc.) to filter the search results.
- *Release Date*: Click on Search > Search by Date. Select the exact date that the movie was released. All the movies in TMDB that were released in that date will appear in your screen
- *Actor Name*: Click on Search > Search by Actor.Enter the name of an actor to search for movies in which they have appeared.

Each movie that appears in the screen has a button that by clicking it, it will add the movie to your card. If the movie is already in your cart, a message will be shown

---------------------
## Cart Management

The website provides a shopping cart feature for adding selected movies. The cart page allows you to:

- View all items in the cart, including their image, title, release date, and price.
- Remove individual items from the cart.
- Empty the entire cart at once.
- The number of items in the shopping cart is displayed on the search page.

---------------------
## Checkout

The checkout page allows customers to complete their purchase. It includes a form where users can enter their information,
including first name, last name, and email. All fields are mandatory and undergo validation.
Upon submission, the purchase details are saved in the database and the user is returned to the home page

Please note that this is a simulated checkout process and does not involve actual payment.

---------------------
## Database

The completed orders are stored in a SQL Server database. The provided code in the template handles the connection and
saving of purchases. For debugging and grading purposes, you can access the full list of purchases by visiting
the URL http://localhost:8080/debug/purchases.



## Screen Previews

### Video Preview
https://github.com/OriVered/movie-app/assets/76990617/fed6ad3d-8e97-4c45-b38f-33054e47341c


### Home Page
The Home Page fetchTMDB top movie:

![Home Page](./src/main/resources/static/assets/home.jpg)

### Search Movie Page
Here is a preview of the Search by movie name:

![Search Movie Page](./src/main/resources/static/assets/search-movie.jpg)


### Genre Choose Page
Here is a preview of the movies picked by genre name:

![Genre Choose Page](./src/main/resources/static/assets/genere-choose.jpg)

### Cart Page
The Cart Page provides cart items, user can delete items and clear cart:

![Cart Page](./src/main/resources/static/assets/cart.jpg)


### Checkout Page
Finally, this is the Checkout Page, where users can complete payment cart items:

![Checkout Page](./src/main/resources/static/assets/checkout.jpg)


