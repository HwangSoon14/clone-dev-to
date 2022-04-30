import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import About from "./pages/About";
import ConfirmOTP from "./pages/ConfirmOTP";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ForgotPassWord from "./pages/ForgotPassWord";
import Home from './pages/Home'
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ReadingList from "./pages/ReadingList";
import SignOutConfirm from "./pages/SignOutConfirm";
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
        <Route exact path={AppRoutes.READING_LIST} element={<PrivateRoute>
              <ReadingList />
            </PrivateRoute>} />
        <Route exact path={AppRoutes.ABOUT} element={<About />} />
        <Route exact path={AppRoutes.CONTACT} element={<Contact />} />
        <Route exact path={AppRoutes.SPONSORS} element={<Sponsor />} />
        <Route exact path={AppRoutes.FAQ} element={<FAQ />} />
        <Route exact path={AppRoutes.SIGNOUT_CONFIRM} element={<SignOutConfirm />} />
        <Route exact path={AppRoutes.FORGOT_PASSWORD} element={<ForgotPassWord />} />
        <Route exact path={AppRoutes.CONFIRM_OTP} element={<ConfirmOTP />} />
        <Route exact path={AppRoutes.NEW_PASSWORD} element={<NewPassword />} />
        <Route path="*" element={<NotFound />}/> 

     
    </Routes>
    </div>
  );
}

export default App;
