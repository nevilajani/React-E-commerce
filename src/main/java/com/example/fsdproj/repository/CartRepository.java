package com.example.fsdproj.repository;

import com.example.fsdproj.entity.Cart;
import com.example.fsdproj.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    Cart findByUser(User user);

}
