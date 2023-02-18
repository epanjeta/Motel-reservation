import { useEffect, useState } from "react";
import {
    useSearchParams
  } from "react-router-dom"
function Booking(){
    const [queryParameters] = useSearchParams();
    const roomId = queryParameters.get('roomId');

    const [room, setRoom] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/room/get?id=' + roomId)
        .then(response => response.json())
        .then(data => setRoom(data));
    }, []);

    return(
        <div>Eldar {roomId}, {room.price}</div>
    );
}

export default Booking;