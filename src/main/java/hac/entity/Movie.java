package hac.entity;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.NotNull;


@Component
public class Movie {
    @NotNull(message = "image is mandatory")
    private Long id;
    @NotEmpty(message = "image is mandatory")
    @Pattern(regexp = "^https://image\\.tmdb\\.org/t/p/w500.*\\.(png|jpe?g|gif)$|^https://www\\.themoviedb\\.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c\\.svg$", message = "Invalid image format")
    private String image;
    @NotEmpty(message = "title is mandatory")
    private String title;


    @PastOrPresent(message = "Date must be in the past or present")
    private LocalDate releaseDate;


    @NotNull(message = "price is mandatory")
    @DecimalMin(value = "3.99", inclusive = true, message = "Price must be 3.99")
    @DecimalMax(value = "3.99", inclusive = true, message = "Price must be 3.99")
    private Double price;

    public Movie() {
    }

    public Movie(Long id, String image, String title, LocalDate releaseDate, Double price) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.releaseDate = releaseDate;
        this.price = price;
    }

    // Getters
    public Long getId() { return id; }

    public String getImage() { return image; }

    public String getTitle() {
        return title;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public Double getPrice() {
        return price;
    }

    // Setters
    public void setId(Long id) { this.id = id; }

    public void setImage(String image) {
        this.image = image;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

}
