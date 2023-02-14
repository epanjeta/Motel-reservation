package com.motel.motelreservationbackend.service;

import com.motel.motelreservationbackend.model.User;

import java.util.List;

public interface UserService {
    public List<User> getAllUsers();
    public User getUser(int id);
    public User saveUser(User user);

}
