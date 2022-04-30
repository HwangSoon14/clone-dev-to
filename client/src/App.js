import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
=======
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
import About from "./pages/About";
import ConfirmOTP from "./pages/ConfirmOTP";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ForgotPassWord from "./pages/ForgotPassWord";
<<<<<<< HEAD
import Home from './pages/Home'
import Login from "./pages/Login";
=======
import Home from './pages/Home';
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ReadingList from "./pages/ReadingList";
import SignOutConfirm from "./pages/SignOutConfirm";
import SignUp from "./pages/SignUp";
import Sponsor from "./pages/Sponsor";
import { AppRoutes } from "./routing/AppRoutes";
function App() {
<<<<<<< HEAD
  return (

=======



  return (
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
    <div className="App">
    
    <Navbar />
    <Routes>
        <Route exact path={AppRoutes.HOME} element={<Home />}/> 
        <Route exact path={AppRoutes.PROFILE} element={<Profile />}/> 
        <Route exact path={AppRoutes.LOGIN} element={<Login />}/> 
        <Route exact path={AppRoutes.REGISTER} element={<SignUp />}/> 
<<<<<<< HEAD
        <Route exact path={AppRoutes.READING_LIST} element={<ReadingList />} />
=======
        <Route exact path={AppRoutes.READING_LIST} element={<PrivateRoute>
              <ReadingList />
            </PrivateRoute>} />
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
        <Route exact path={AppRoutes.ABOUT} element={<About />} />
        <Route exact path={AppRoutes.CONTACT} element={<Contact />} />
        <Route exact path={AppRoutes.SPONSORS} element={<Sponsor />} />
        <Route exact path={AppRoutes.FAQ} element={<FAQ />} />
        <Route exact path={AppRoutes.SIGNOUT_CONFIRM} element={<SignOutConfirm />} />
        <Route exact path={AppRoutes.FORGOT_PASSWORD} element={<ForgotPassWord />} />
        <Route exact path={AppRoutes.CONFIRM_OTP} element={<ConfirmOTP />} />
<<<<<<< HEAD
=======
        <Route exact path={AppRoutes.NEW_PASSWORD} element={<NewPassword />} />
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
        <Route path="*" element={<NotFound />}/> 

     
    </Routes>
    </div>
  );
}

export default App;
