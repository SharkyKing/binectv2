import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import WaitingRoom from './Forms/WaitingRoom/waitingroom';
import ConferenceRoom from './Forms/ConferenceRoom/conferenceroom';
import Home from './Forms/Home/home';
import Login from './Forms/Login/login';
import Register from './Forms/Register/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Forms/Login" element={<Login/>} />
            <Route path="Forms/Register" element={<Register/>} />
            <Route path="Forms/WaitingRoom" elemlslsent={<WaitingRoom/>} />
            <Route path="Forms/ConferenceRoom" element={<ConferenceRoom/>} />
            <Route component={Home} /> {}
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
