import {Routes , Route} from 'react-router-dom';
import GymNavBar from "./Components/cssFile/GymNavbar";
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';
import Login from './Components/Pages/Login';

function App() {
  return (
    <div className="App">
      <GymNavBar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/loginPage' element = {<Login/>}/>
        <Route path='/footer' element = {<Footer/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
