package com.example.fsdproj.repository;

import com.example.fsdproj.entity.LoginRequest;
import com.example.fsdproj.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByCity(String specialization);
    User findByEmail(String email);



}