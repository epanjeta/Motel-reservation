import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import './Home.css'
import interiorImage from "../images/interior1.jpg";
import { useNavigate, createSearchParams } from 'react-router-dom';
function Home(){

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const navigate = useNavigate();

    function handleSubmit(){
        let checkInDate = new Date(startDate);
        let checkOutDate = new Date(endDate);
        let presentDate = new Date();
        if(startDate === '' || endDate === '' ||
            checkInDate.getTime() > checkOutDate.getTime() ||
            checkInDate.getTime() < presentDate.getTime() || checkOutDate.getTime() < presentDate.getTime()){
            alert('Please select valid dates!')
        }
        else{
            
            let checkInDateString = checkInDate.getDate() + '-' + (checkInDate.getMonth()+1) + '-' + checkInDate.getFullYear();
            let checkOutDateString = checkOutDate.getDate() + '-' + (checkOutDate.getMonth()+1) + '-' + checkOutDate.getFullYear();
            navigate({
                pathname: "/Rooms",
                search: createSearchParams({
                    checkInDate: checkInDateString,
                    checkOutDate: checkOutDateString
                }).toString()
            });
        }
    }

    return(
        <div
        className='p-5 text-center bg-image '
        style={{ backgroundImage: `url(${interiorImage})`, margin:'auto', height: 800,
         backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition:`center`}}
      >
          
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white bg-dark bg-opacity-50 px-4 py-3' style={{width: `80%`}}>
                <h1 className='mb-3'>MOTEL MONTANA</h1>
                <h4 className='mb-3'>Be The One With The Mountain.</h4>
                <br/>
                
                  <div class="row mb-3">
                    <div class="col">
                    <div class="form-group mx-sm-3 mb-2">
                      <label class="check-lbl mb-1">Check-in date</label>
                      <input type="date" class="form-control" placeholder="dd-mm-yyyy" onChange={e => setStartDate(e.target.value)}/>
                    </div>
                    </div>
                    <div class="col">
                      <div class="form-group mx-sm-3 mb-2">
                        <label class="check-lbl mb-1">Check-out date</label>
                        <input type="date" class="form-control" placeholder="dd-mm-yyyy" onChange={e => setEndDate(e.target.value)}/>
                      </div>
                    </div>
                  </div>
              <button class="btn btn-outline-light btn-lg" onClick={ () => handleSubmit()}>Check Rooms</button>
            
              </div>
            </div>
          
        </div>
    );
}

export default Home;