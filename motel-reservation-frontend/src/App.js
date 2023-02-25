import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import interiorImage from "./images/interior1.jpg";
import exteriorImage from "./images/exterior.jpg";
import Home from './components/Home';
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import ReservationDetails from './components/ReservationDetails';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        
        <div>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/Rooms" element={<Rooms/>}></Route>
              <Route exact path="/Book" element={<Booking/>}></Route>
              <Route exact path="/Reservation" element={<ReservationDetails/>}></Route>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;