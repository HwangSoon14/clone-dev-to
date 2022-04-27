import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ReadingList from "./pages/ReadingList";
import SignUp from "./pages/SignUp";
import Sponsor from "./pages/Sponsor";
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
        <Route exact path={AppRoutes.READING_LIST} element={<ReadingList />} />
        <Route exact path={AppRoutes.ABOUT} element={<About />} />
        <Route exact path={AppRoutes.CONTACT} element={<Contact />} />
        <Route exact path={AppRoutes.SPONSORS} element={<Sponsor />} />
        <Route path="*" element={<NotFound />}/> 

     
    </Routes>
    </div>
  );
}

export default App;
