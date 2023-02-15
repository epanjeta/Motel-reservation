import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import interiorImage from "./images/interior1.jpg";
import exteriorImage from "./images/exterior.jpg";
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        
        <div>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;