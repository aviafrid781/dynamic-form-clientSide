import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home/home'
import Bikeform from './Components/Pages/BikeForm/Bikeform';
import ShowInsertData from './Components/Pages/ShowInsertData/ShowInsertData';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CarData from './Components/CarData/CarData';

import BikesData from './Components/BikesData/BikesData';
import FurnituresData from './Components/FurnituresData/FurnituresData';
function App() {
  return (
    <div className="App">


      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>   
      </Route>
      <Route path="furnituresData" element={<FurnituresData />} />
      <Route path="carData" element={<CarData />} />
      <Route path="bikesData" element={<BikesData />} />
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
