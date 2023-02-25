import { useEffect, useState } from "react";
import {
    useSearchParams, useNavigate, createSearchParams
  } from "react-router-dom"
function Booking(){
    const [queryParameters] = useSearchParams();
    const roomId = queryParameters.get('roomId');

    const [room, setRoom] = useState('');
    const checkInDate = queryParameters.get("checkInDate");
    const checkOutDate = queryParameters.get("checkOutDate");

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/room/get?id=' + roomId)
        .then(response => response.json())
        .then(data => setRoom(data));
    }, []);

    function handleBack(){
        navigate({
            pathname: "/Rooms",
            search: createSearchParams({
                checkInDate: checkInDate,
                checkOutDate: checkOutDate
            }).toString()
        });
    }

    function redirectToDetails(data){
        navigate({
            pathname: "/Reservation",
            search: createSearchParams({
                reservation: data.id
            }).toString()
        });
    }

    function handleSubmit(){

        let data = {
            "roomId":roomId,
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "phoneNumber":phoneNumber,
            "checkInDate":checkInDate,
            "checkOutDate":checkOutDate
        }

        fetch('http://localhost:8080/reservation/make', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(data => redirectToDetails(data));
    }

    return(
        <div className="container">
            <div className="mx-5 mt-4">
                <h2 className="my-3 mx-3">Booking information</h2>
                <p className="mx-3">Room #<u>{room.number}</u></p>
                <p className="mx-3">From <u>{checkInDate}</u> to <u>{checkOutDate}</u></p>
                <button className="btn btn-secondary mx-3 mb-3" onClick={ () => handleBack()}>Back to Available Rooms</button>
            </div>
            <div className="row">
                <div className="col">
                    <div class="form-group">
                        <label >First name</label>
                        <input type="text" class="form-control" placeholder="Enter first name" onChange={e => setFirstName(e.target.value)}/>
                    </div>
                </div>
                <div className="col">
                    <div class="form-group">
                        <label>Last name</label>
                        <input type="text" class="form-control" placeholder="Enter last name" onChange={e => setLastName(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <div className="col">
                    <div class="form-group">
                        <label>Phone number</label>
                        <input type="tel" id="phone" class="form-control" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="061-977-250" onChange={e => setPhoneNumber(e.target.value)}/>
                        <small class="form-text text-muted">We'll never share your phone number with anyone else.</small>
                    </div>
                </div>
            </div>
            
            
            <button class="btn btn-secondary mt-2" onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
}

export default Booking;