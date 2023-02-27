package com.motel.motelreservationbackend.controller;

import com.motel.motelreservationbackend.model.Reservation;
import com.motel.motelreservationbackend.model.User;
import com.motel.motelreservationbackend.model.request.ReservationDates;
import com.motel.motelreservationbackend.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/make")
    public Reservation add(@RequestBody @DateTimeFormat(pattern = "dd.MM.yyyy") Reservation reservation){
        Reservation reservation1 = reservationService.makeReservation(reservation);
        return reservation1;
    }

    @GetMapping("/getAll")
    public List<Reservation> getAll(){
        return reservationService.getAll();
    }

    @GetMapping("/getOverlaps")
    public List<Reservation> getOverlaps(@RequestBody @DateTimeFormat(pattern = "dd.MM.yyyy") ReservationDates dates){
        return reservationService.getReservedDate(dates);
    }

    @GetMapping("/get")
    public ResponseEntity<Reservation> get(@RequestParam int id){
        Reservation reservation = reservationService.getReservation(id);
        if(reservation != null){
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
