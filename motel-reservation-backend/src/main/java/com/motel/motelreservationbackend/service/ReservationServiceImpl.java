package com.motel.motelreservationbackend.service;

import com.motel.motelreservationbackend.model.Reservation;
import com.motel.motelreservationbackend.model.request.ReservationDates;
import com.motel.motelreservationbackend.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Reservation makeReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getAll() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> getReservedDate(ReservationDates dates) {
        Date checkin = dates.getCheckin();
        Date checkout = dates.getCheckout();
        List<Reservation> reservations = reservationRepository.findAll();
        List<Reservation> overlaps = reservations
                .stream()
                .filter(reservation -> reservation.getCheckInDate().compareTo(checkout) <= 0 && checkin.compareTo(reservation.getCheckOutDate()) <= 0)
                .collect(Collectors.toList());
        return overlaps;
        // (StartDate1 <= EndDate2) and (StartDate2 <= EndDate1)
    }

    @Override
    public Reservation getReservation(int id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        if(reservation.isPresent()) return reservation.get();
        else return null;
    }
}
