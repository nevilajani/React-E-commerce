package com.example.fsdproj.controller;
import java.util.ArrayList;
import com.example.fsdproj.entity.Cart;
import com.example.fsdproj.entity.User;
import com.example.fsdproj.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CartController {

    private final CartRepository cartRepository;

    @Autowired
    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/add-to-cart")
    public ResponseEntity<?> addToCart(@RequestBody Cart cart) {

        User user =cart.getUser();
        Cart cart1= cartRepository.findByUser(user);
        if(cart1!=null)
        {
            List<Long> items =cart1.getItems();
            List<Long> id= cart.getItems();


            List<Long> mergedList = new ArrayList<>();
            mergedList.addAll(items);
            mergedList.addAll(id);

            cart1.setItems(mergedList);
            cartRepository.save(cart1);
        }
        else {
            cartRepository.save(cart);
        }
        return ResponseEntity.ok("Item added to cart successfully");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/remove-from-cart")
    public ResponseEntity<?> removeFromCart(@RequestBody Cart cart) {
        System.out.println(cart.getItems());
        User user =cart.getUser();
        Cart cart1= cartRepository.findByUser(user);

            List<Long> items =cart1.getItems();
            List<Long> id= cart.getItems();
            items.removeAll(id);
            cartRepository.save(cart1);

        return ResponseEntity.ok("Item remove from cart successfully");
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/fetchItems")
    public ResponseEntity<List<Long>> fetchItems(@RequestBody User user) {
        Cart cart = cartRepository.findByUser(user);
        if (cart != null) {
            List<Long> items = cart.getItems();
            return new ResponseEntity<>(items, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
