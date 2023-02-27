package com.motel.motelreservationbackend.controller;

import com.motel.motelreservationbackend.model.Room;
import com.motel.motelreservationbackend.model.request.ReservationDates;
import com.motel.motelreservationbackend.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/add")
    public ResponseEntity<Room> add(@RequestBody Room room){
        Room room1 = roomService.saveRoom(room);
        if(room1 != null){
            return new ResponseEntity<>(room1, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Room>> getAll(){
        List<Room> rooms = roomService.getAll();
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<Room> get(@RequestParam int id){
        Room room = roomService.getRoom(id);
        if(room != null){
            return new ResponseEntity<>(room, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getAvailable")
    public ResponseEntity<List<Room>> getAvailable(@RequestBody ReservationDates dates){
        List<Room> rooms = roomService.getAvailableRooms(dates);
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }
}
