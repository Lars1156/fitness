import {Routes , Route} from 'react-router-dom';
import GymNavBar from "./Components/cssFile/GymNavbar";
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <GymNavBar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/footer' element = {<Footer/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
