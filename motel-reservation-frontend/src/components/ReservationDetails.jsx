import { useEffect, useState } from "react";
import {
    useSearchParams
  } from "react-router-dom"

import { useNavigate, createSearchParams } from 'react-router-dom';



function ReservationDetails(){

    const [queryParameters] = useSearchParams();
    const reservationId = queryParameters.get("reservation");
    const [reservation, setReservation] = useState('');
    const [room, setRoom] = useState('');

    const [okResponse, setOkResponse] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/reservation/get?id=' + reservationId)
        .then(response => {
            if(response.status === 200){
                setOkResponse(true)
            }
            return response.json()
        })
        .then(data => {
            setReservation(data);
            const roomId1 = data.roomId;
            return fetch('http://localhost:8080/room/get?id=' + roomId1)
                    .then(response => response.json())
                    .then(data => setRoom(data))
        }) 
    }, []);

    function handleBack(){
        navigate('/');
    }

    return(
        
        <div className="container">
                {okResponse && 
                    <div className="mx-5 mt-4">
                    <h2 className="my-3 mx-3">Reservation successful!</h2>
                    <p className="mx-3">Room #<u>{room.number}</u></p>
                    <p className="mx-3">From <u>{reservation.checkInDate}</u> to <u>{reservation.checkOutDate}</u></p>
                    <p className="mx-3">First name: {reservation.firstName}</p>
                    <p className="mx-3">Last name: {reservation.lastName}</p>
                    <p className="mx-3">E-mail: {reservation.email}</p>
                    <p className="mx-3">Phone number: {reservation.phoneNumber}</p>
                    <button className="btn btn-secondary mx-3 mb-3" onClick={ () => handleBack()}>Back to Home</button>
                </div>
                }
                {!okResponse &&
                <h2 className="my-3 mx-3">Reservation not found!</h2>
                }
        </div>
        
        
    );
}

export default ReservationDetails;