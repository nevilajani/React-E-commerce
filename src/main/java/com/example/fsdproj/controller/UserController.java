package com.example.fsdproj.controller;
import com.example.fsdproj.entity.User;
import com.example.fsdproj.repository.UserRepository;
import com.example.fsdproj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        try {
            logger.info("Received signup request for username: {}", user.getEmail());
            System.out.println(user.getPassword());
            if (userRepository.findByEmail(user.getEmail())!=null){
                Map<String, String> response = new HashMap<>();
                response.put("error", "This emailId is already registered");
                return ResponseEntity.badRequest().body(response);
            }

            user.setPassword((user.getPassword()));

            userRepository.save(user);
            Map<String, String> response = new HashMap<>();
            response.put("data", "User registered successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Handle other exceptions if needed
            Map<String, String> response = new HashMap<>();
            response.put("error", "Error during signup");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/checkuser/{username}")
    public User checkUserExistence(@PathVariable String username) {
        User exists = userRepository.findByEmail(username);
        System.out.println(username);
        return exists;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {

        // Check if the username exists in the database
        User user = userRepository.findByEmail(loginRequest.getEmail());

        if (user == null || !loginRequest.getPassword().equals(user.getPassword())) {
            // If username does not exist or password does not match, return an error response
            Map<String, String> response = new HashMap<>();
            response.put("error", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        Map<String, String> response = new HashMap<>();
        response.put("token", "token");
        response.put("message", "Login successful");
        return ResponseEntity.ok(response);
    }
}