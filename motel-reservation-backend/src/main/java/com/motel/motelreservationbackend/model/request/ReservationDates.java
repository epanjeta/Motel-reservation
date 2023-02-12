package com.motel.motelreservationbackend.model.request;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class ReservationDates {

    @JsonFormat(pattern="dd-MM-yyyy")
    public Date checkin;

    @JsonFormat(pattern="dd-MM-yyyy")
    public Date checkout;

    public ReservationDates() {
    }

    public Date getCheckin() {
        return checkin;
    }

    public void setCheckin(Date checkin) {
        this.checkin = checkin;
    }

    public Date getCheckout() {
        return checkout;
    }

    public void setCheckout(Date checkout) {
        this.checkout = checkout;
    }
}
