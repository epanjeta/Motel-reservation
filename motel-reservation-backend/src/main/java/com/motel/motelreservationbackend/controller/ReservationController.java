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
    public ResponseEntity<Reservation> add(@RequestBody @DateTimeFormat(pattern = "dd.MM.yyyy") Reservation reservation){
        Reservation reservation1 = reservationService.makeReservation(reservation);
        if(reservation1 != null){
            return new ResponseEntity<>(reservation1, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Reservation>> getAll(){
        List<Reservation> reservations = reservationService.getAll();
        if(reservations != null){
            return new ResponseEntity<>(reservations, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getOverlaps")
    public ResponseEntity<List<Reservation>> getOverlaps(@RequestBody @DateTimeFormat(pattern = "dd.MM.yyyy") ReservationDates dates){
        List<Reservation> overpalps = reservationService.getReservedDate(dates);
        if(overpalps != null){
            return new ResponseEntity<>(overpalps, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<Reservation> get(@RequestParam int id){
        Reservation reservation = reservationService.getReservation(id);
        if(reservation != null){
            return new ResponseEntity<>(reservation, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
