import { useEffect, useState } from "react";
import {
    useSearchParams
  } from "react-router-dom"

import { useNavigate, createSearchParams } from 'react-router-dom';

function Rooms(props){
    const [queryParameters] = useSearchParams();
    const checkInDate = queryParameters.get("checkInDate");
    const checkOutDate = queryParameters.get("checkOutDate");

    const [availableRooms, setAvailableRooms] = useState([]);
 
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:8080/room/getAll')
        .then(response => response.json())
        .then(data => setAvailableRooms(data));
    }, []);
    
    function handleBooking(id){
        console.log(id);
        navigate({
            pathname: "/Book",
            search: createSearchParams({
                roomId: id,
                checkInDate: checkInDate
            }).toString()
        });
    }

    return(
        <div className="container">
            <h1>Availabe rooms: {availableRooms.length}</h1>
            {availableRooms.map((room, idx)=>(
                <div>
                    <div className="card w-75 mb-3" >
                        <div className="card-header">Room #{room.number}</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5  className="card-subtitle mb-2 text-muted">Number of twin beds: {room.twinBeds}</h5>
                                    <h5  className="card-subtitle mb-2 text-muted">Number of queen beds: {room.queenBeds}</h5>
                                    <h5  className="card-subtitle mb-2 text-muted">Number of king beds: {room.kingBeds}</h5>
                                </div>
                                <div className="col">
                                    <h5  className="card-subtitle mb-2 text-muted">TV: {room.tv? 'Yes' : 'No'}</h5>
                                    <h5  className="card-subtitle mb-2 text-muted">Attached bathroom: {room.attachedBathroom ? 'Yes' : 'No'}</h5>
                                    <h5  className="card-subtitle mb-2 text-muted">Airconditiong: {room.airConditiong? 'Yes' : 'No'}</h5>
                                </div>
                            </div>
                            <br/>
                            <h5  className="card-subtitle mb-2 text-muted">Price: {room.price} KM</h5>
                            <button className="btn btn-secondary" onClick={ () => handleBooking(room.id)}>Book this room!</button>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>

    );
}

export default Rooms;