import {Routes , Route} from 'react-router-dom';
import GymNavBar from "./Components/cssFile/GymNavbar";
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';
import Login from './Components/Pages/Login';
import ForgotPassword from './Components/FogotPassword';

function App() {
  return (
    <div className="App">
      <GymNavBar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/loginPage' element = {<Login/>}/>
        <Route path='/forgotPassword' element = {<ForgotPassword/>}/>
        <Route path='/footer' element = {<Footer/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
