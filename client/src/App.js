import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
function App() {
  return (

    <div className="App">
    
    <Navbar />
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
