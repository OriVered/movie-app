package hac.controller;
import jakarta.validation.Valid;
import hac.entity.Cart;
import hac.entity.Movie;
import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    @Qualifier("cart")
    private Cart shoppingCart;

    @Autowired
    private PurchaseRepository purchaseRepository;

    @PostMapping("/add")
    public void addMovie(@Valid @RequestBody Movie movie) {
//      check correctness of movie parameters
        shoppingCart.addMovie(movie);
    }

    @DeleteMapping("/delete/{id}")
    public void removeMovie(@PathVariable Long id) {
        shoppingCart.removeMovie(id);
    }


    @GetMapping("/total")
    public Double getTotal() {
        return shoppingCart.getTotal();
    }

    @GetMapping("/contents")
    public Set<Movie> getContents() {
        return shoppingCart.getContents();
    }
    @GetMapping("/checkMovie/{movieId}")
    public boolean checkMovieExistsInCart(@PathVariable Long movieId) {
        return shoppingCart.containsMovie(movieId);
    }

    @PostMapping("/clear")
    public void clearCart() {
        shoppingCart.clear();
    }


    @PostMapping("/complete")
    public void completePurchase(@Valid @RequestBody Purchase purchase) {
        // Check the cart total and set it as the payment for the purchase
        Double cartTotal = shoppingCart.getTotal();
        purchase.setPayment(cartTotal);

        purchaseRepository.save(purchase);

        shoppingCart.clear();
    }
}
