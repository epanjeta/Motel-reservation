package com.motel.motelreservationbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int number;

    private int twinBeds;

    private int queenBeds;

    private int kingBeds;

    private boolean attachedBathroom;

    private boolean tv;

    private boolean airConditioning;

    private int price;

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Room() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getTwinBeds() {
        return twinBeds;
    }

    public void setTwinBeds(int twinBeds) {
        this.twinBeds = twinBeds;
    }

    public int getQueenBeds() {
        return queenBeds;
    }

    public void setQueenBeds(int queenBeds) {
        this.queenBeds = queenBeds;
    }

    public int getKingBeds() {
        return kingBeds;
    }

    public void setKingBeds(int kingBeds) {
        this.kingBeds = kingBeds;
    }

    public boolean isAttachedBathroom() {
        return attachedBathroom;
    }

    public void setAttachedBathroom(boolean attachedBathroom) {
        this.attachedBathroom = attachedBathroom;
    }

    public boolean isTv() {
        return tv;
    }

    public void setTv(boolean tv) {
        this.tv = tv;
    }

    public boolean isAirConditioning() {
        return airConditioning;
    }

    public void setAirConditioning(boolean airConditioning) {
        this.airConditioning = airConditioning;
    }
}
