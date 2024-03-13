package com.example.fsdproj.controller;

import com.example.fsdproj.entity.Email;
import com.example.fsdproj.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/send-email")
    public String sendEmail(@RequestBody Email email) {
        System.out.println("Sending");
        System.out.println(email.getToEmail());
        System.out.println(email.getText());

        emailService.sendEmail(email);
        return "Email sent successfully!";
    }
}
