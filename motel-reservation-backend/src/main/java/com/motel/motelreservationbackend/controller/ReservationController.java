package com.motel.motelreservationbackend.controller;

import com.motel.motelreservationbackend.model.Reservation;
import com.motel.motelreservationbackend.model.User;
import com.motel.motelreservationbackend.model.request.ReservationDates;
import com.motel.motelreservationbackend.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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
    public Reservation get(@RequestParam int id){
        return reservationService.getReservation(id);
    }
}
