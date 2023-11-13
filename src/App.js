import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListMovie from "./pages/ListMovie";
import DetailMovie from "./pages/DetailMovie";
import Profile from "./pages/Profile";

// Components
import Header from "./components/header";
import Navbar from "./Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path="/ListMovie" element={<ListMovie />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
