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

    function stringToDate(_date,_format,_delimiter)
    {
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
    }

    let date1 = stringToDate(checkInDate,"dd-mm-yyyy","-")
    let date2 = stringToDate(checkOutDate,"dd-mm-yyyy","-")
    
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
 
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
                checkInDate: checkInDate,
                checkOutDate: checkOutDate
            }).toString()
        });
    }

    function handleBack(){
        navigate('/');
    }

    return(
        <div className="container">
            <div className="mx-5 mt-4">
                <h2 className="my-3 mx-3">{availableRooms.length} Available rooms</h2>
                <p className="mx-3">From <u>{checkInDate}</u> to <u>{checkOutDate}</u></p>
                <button className="btn btn-secondary mx-3 mb-3" onClick={ () => handleBack()}>Back to Home</button>
            </div>
            <div className="row">
                {availableRooms.map((room, idx)=>(
                    <div className="d-flex justify-content-center">
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
                                
                                <h5  className="card-subtitle mb-2 text-muted">Price per night: {room.price} KM</h5>
                                <h4  className="card-subtitle mb-2 text-muted">Total price: {Number(room.price*numberOfNights)} KM</h4>
                                <button className="btn btn-secondary mt-2" onClick={ () => handleBooking(room.id)}>Book this room!</button>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>

    );
}

export default Rooms;