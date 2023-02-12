package com.motel.motelreservationbackend.service;

import com.motel.motelreservationbackend.model.Reservation;
import com.motel.motelreservationbackend.model.request.ReservationDates;

import java.util.Date;
import java.util.List;

public interface ReservationService {

    public Reservation makeReservation(Reservation reservation);

    public List<Reservation> getAll();

    public List<Reservation> getReservedDate(ReservationDates dates);
}
