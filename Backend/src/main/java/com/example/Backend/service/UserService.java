package com.example.Backend.service;

import com.example.Backend.model.User;

public interface UserService {

    User registerNewUser(User user);
    User findByEmail(String username);
    boolean validatePassword(String rawPassword, String encodedPassword);
}
