package com.motel.motelreservationbackend.controller;

import com.motel.motelreservationbackend.model.User;
import com.motel.motelreservationbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "User added!";
    }

    @GetMapping("/getAll")
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @GetMapping("/get")
    public User getUser(@RequestParam int id){
        return userService.getUser(id);

    }
}
