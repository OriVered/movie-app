[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7Tmn2VQK)

# Authors

# Explanations

---------------------


# Initializing the template

In order to initialize the project make sure to:

1. When you open the project, if intelliJ propose to "Load Maven Project" do it. You can later reload maven with the "M" icon on the right of the screen,
or by right clicking on the pom.xml file and selecting "Maven -> Reload project".
2. You see red lines in the code? Go to File -> Project Structure -> Project Settings -> Project -> SDK -> and choose your Java SDK
3. Still see red stuff? Open the same dialog and click on "Fix" if you see some
4. Edit your configuration "ex4" at the top right. Make sure the "Main class" is set to "hac.DemoApplication" and that Java is set

Everything ok?
1. Run the SQL server as shown in the video (week 6) and create a database named "ex4". The DB credentials are stored in the application.properties file. You may change them if you want.
2. Run the project, you should not see any errors in IntelliJ console

So far the only route you can check is http://localhost:8080/debug/purchases
that returns a list of all purchases in the DB (empty for now).

## Initializing the React client (movie-app)

Open a terminal in *movie-app* and run `npm install` and then `npm start`. You should see the client running on http://localhost:3000.
You can also open another instance of IntelliJ and open the *movie-app* folder as a project. You can then run the client from there.

## Using the provided code to store purchases in the DB

We provide you with ready-to-use code to store purchases in the DB, in order to give you a taste of what Spring can do for you.
Look at the DebugController class. It has a method called "addPurchase" that receives a Purchase object and stores it in the DB.
When you develop your own controller, you must declare the repository member exactly as it is declared in the DebugController class.
Then you can use it to store purchases in the DB (repository.save(purchase)).

## Still have problems? Come to class.


# Movie E-commerce Website

This is a modern e-commerce website that allows customers to browse movies, add them to a cart, and complete a purchase. The website is built using React on the front end and Spring on the back end. It utilizes the TMDB API (https://www.themoviedb.org/documentation/api) to fetch movie data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Search Attributes](#search-attributes)
- [Cart Management](#cart-management)
- [Checkout](#checkout)
- [Database](#database)
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
   git clone https://github.com/your-username/movie-ecommerce.git

2. Set up the front-end:
   ```shell
    cd movie-ecommerce/frontend
    npm install

3. Set up the back-end:
    ```shell
    cd ../backend
    mvn install
   
---------------------
## Usage

1. Start the front-end server:
    ```shell
    cd movie-ecommerce/frontend
    npm start
   
2. Set up the back-end:
    ```shell
    cd ../backend
    mvn spring-boot:run

3. Access the website at http://localhost:3000.

---------------------
## Search Attributes

The search page allows you to perform searches using different attributes:

- **Title**: Click on Search > Search by Movie Name. In the space to input, enter the title of a movie to search for specific movies.
- **Genre**: Click on Search > Search by Genre. Select from a list of available genres (Animation, Music, Family, Crime, etc.) to filter the search results.
- **Release Date**: Click on Search > Search by Date. Select the exact date that the movie was released. All the movies in TMDB that were released in that date will appear in your screen  
- **Actor Name**: Click on Search > Search by Actor.Enter the name of an actor to search for movies in which they have appeared.

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



