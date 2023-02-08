package com.motel.motelreservationbackend.service;

import com.motel.motelreservationbackend.model.User;
import com.motel.motelreservationbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(int id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            return user.get();
        }
        else return null;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
