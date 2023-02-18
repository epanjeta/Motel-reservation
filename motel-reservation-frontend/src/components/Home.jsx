import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import './Home.css'
import interiorImage from "../images/interior1.jpg";
function Home(){

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleSubmit(){
        console.log("Submitovano")
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
                <form class="form-inline" method="GET" action="Rooms">
                  <div class="row mb-3">
                    <div class="col">
                    <div class="form-group mx-sm-3 mb-2">
                      <label class="check-lbl mb-1">Check-in date</label>
                      <input type="date" name="checkInDate" class="form-control" placeholder="dd-mm-yyyy"/>
                    </div>
                    </div>
                    <div class="col">
                      <div class="form-group mx-sm-3 mb-2">
                        <label class="check-lbl mb-1">Check-out date</label>
                        <input type="date" class="form-control" name="checkOutDate" placeholder="dd-mm-yyyy"/>
                      </div>
                    </div>
                  </div>
              <button class="btn btn-outline-light btn-lg" >Check Rooms</button>
            </form>
              </div>
            </div>
          
        </div>
    );
}

export default Home;