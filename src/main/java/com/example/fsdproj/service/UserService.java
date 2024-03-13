package com.example.fsdproj.service;


import com.example.fsdproj.entity.User;
import com.example.fsdproj.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getDoctorById(Long doctorId) {
        Optional<User> optionalDoctor = userRepository.findById(doctorId);
        return optionalDoctor.orElse(null);
    }

    public List<User> getDoctorsByCity(String city) {
        return userRepository.findByCity(city);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }



}