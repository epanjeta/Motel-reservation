package com.motel.motelreservationbackend.controller;

import com.motel.motelreservationbackend.model.User;
import com.motel.motelreservationbackend.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<User> add(@RequestBody User user){
        User user1 = userService.saveUser(user);
        if(user1 != null){
            return new ResponseEntity<>(user1, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAll(){
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<User> getUser(@RequestParam int id){
        User user = userService.getUser(id);
        if(user != null){
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
