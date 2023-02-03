import logo from './logo.svg';
import './App.css';
import {HashRouter as Router , Routes , Route} from "react-router-dom"
import NavBar from "./Components/Navbar/NavBar";
import LandingPage from './Pages/LandingPage';
import Overview from './Pages/Overview';
import MissionVision from './Pages/MissionVision';
import Recognition from './Pages/Recognition';
import Research from './Pages/Research';
import Team from './Pages/Team';
import Footer from './Components/FooTer/Footer';
import ContactUs from './Pages/ContactUs';


function App() {
  return (
    <div className="">
    <Router>
    <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/overview" element={<Overview/>}></Route>
          <Route path="/missionvision" element={<MissionVision/>}></Route>
          <Route path="/recognition" element={<Recognition/>}></Route>
          <Route path="/research" element={<Research/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
