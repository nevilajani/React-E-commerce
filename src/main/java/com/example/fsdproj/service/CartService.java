package com.example.fsdproj.service;

import com.example.fsdproj.entity.Cart;
import com.example.fsdproj.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

}
