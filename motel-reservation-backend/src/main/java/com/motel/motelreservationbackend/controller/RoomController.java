package com.motel.motelreservationbackend.controller;

import com.motel.motelreservationbackend.model.Room;
import com.motel.motelreservationbackend.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/add")
    public String add(@RequestBody Room room){
        roomService.saveRoom(room);
        return "Room added!";
    }

    @GetMapping("/getAll")
    public List<Room> getAll(){
        return roomService.getAll();
    }

    @GetMapping("/get")
    public Room get(@RequestParam int id){
        return roomService.getRoom(id);
    }

    //TODO: Implement getAvailable endpoint
}
