package com.motel.motelreservationbackend.service;

import com.motel.motelreservationbackend.model.Reservation;
import com.motel.motelreservationbackend.model.Room;
import com.motel.motelreservationbackend.model.request.ReservationDates;
import com.motel.motelreservationbackend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoomServiceImpl implements RoomService{

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationService reservationService;

    @Override
    public List<Room> getAll() {
        return roomRepository.findAll();
    }

    @Override
    public Room getRoom(int id) {
        Optional<Room> room = roomRepository.findById(id);
        if(room.isPresent()) return room.get();
        else return null;
    }

    @Override
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public List<Room> getAvailableRooms(ReservationDates dates) {

        List<Room> allRooms = roomRepository.findAll();
        List<Reservation> reservations = reservationService.getReservedDate(dates);

        List<Integer> notAvailableRoomIds = reservations
                .stream()
                .map(Reservation::getRoomId).toList();

        List<Room> availableRooms = allRooms.stream()
                .filter(room ->  !notAvailableRoomIds.contains(room.getId()))
                .toList();

        return availableRooms;

    }
}
