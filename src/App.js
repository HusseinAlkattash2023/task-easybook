/* import components */
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';

import './App.css';

import car from './assets/car.png';


function App() {
  return (
    <div className="app">
        {/* Sidebar */}
        <Sidebar/>  

        {/* Home */}
        <Home/>

        <div className="car">
          <img src={car} alt=""/>
        </div>
    </div>
  );
}

export default App;
