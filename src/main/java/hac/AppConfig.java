package hac;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;
import hac.entity.Cart;

@Configuration
public class AppConfig {

    @Bean
    @SessionScope
    public Cart shopingCart() {
        return new Cart();
    }
}
