package com.motel.motelreservationbackend.service;

import com.motel.motelreservationbackend.model.Room;
import com.motel.motelreservationbackend.model.request.ReservationDates;

import java.util.List;

public interface RoomService {

    public List<Room> getAll();

    public Room getRoom(int id);

    public Room saveRoom(Room room);

    public List<Room> getAvailableRooms(ReservationDates dates);
}
