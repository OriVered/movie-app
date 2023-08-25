package hac.entity;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
@Component
public class Cart {
    private Map<Long, Movie> movies;

    public Cart() {
        this.movies = new HashMap<>();
    }

    // Add a movie to the cart
    public void addMovie(Movie movie) {
        // If movie already exists in the cart, prevent adding it again
        if (movies.containsKey(movie.getId())) {
            throw new IllegalArgumentException("Movie already exists in the cart.");
        }

        movies.put(movie.getId(), movie);
    }

    // Remove a movie from the cart
    public void removeMovie(Long movieId) {
        movies.remove(movieId);
    }

    // Calculate the total price of all movies in the cart
    public Double getTotal() {
        double total = 0.0;
        for (Movie movie : movies.values()) {
            total += movie.getPrice();
        }
        return total;
    }

    // Check if a movie is already in the cart
    public boolean containsMovie(Long movieId) {
        return movies.containsKey(movieId);
    }

    // Retrieve the contents of the cart
    public Set<Movie> getContents() {
        return new HashSet<>(movies.values());
    }

    // Clear the cart
    public void clear() {
        movies.clear();
    }
}
