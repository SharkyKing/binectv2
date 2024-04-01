import { Navbar, Footer, WaitingRoom, ConferenceRoom, Home, Login, Register, Router, Route, Routes } from './AppImports';

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
            <Route path="Forms/WaitingRoom" element={<WaitingRoom/>} />
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
