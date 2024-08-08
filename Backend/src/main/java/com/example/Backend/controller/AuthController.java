package com.example.Backend.controller;

import com.example.Backend.DTO.LoginDTO;
import com.example.Backend.model.User;
import com.example.Backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email is already taken");
        }
        return ResponseEntity.ok(userService.registerNewUser(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO user) {
        User foundUser = userService.findByEmail(user.getEmail());
        if (foundUser == null || !userService.validatePassword(user.getPassword(), foundUser.getPassword())) {
            return ResponseEntity.badRequest().body("{\"message\":\"Invalid email or password\"}");
        }
        return ResponseEntity.ok("{\"message\":\"Login successful\"}");
    }
}
