import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (

    <div className="App">
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />

    </Routes>
    </div>
  );
}

export default App;
