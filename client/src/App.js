import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { AppRoutes } from "./routing/AppRoutes";
function App() {
  return (

    <div className="App">
    
    <Navbar />
    <Routes>
        <Route exact path={AppRoutes.HOME} element={<Home />}/> 
        <Route exact path={AppRoutes.PROFILE} element={<Profile />}/> 
        <Route exact path={AppRoutes.LOGIN} element={<Login />}/> 
        <Route exact path={AppRoutes.REGISTER} element={<SignUp />}/> 
        <Route path="*" element={<NotFound />}/> 

        {/* <Route path="/" exact element={<Home />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </div>
  );
}

export default App;
