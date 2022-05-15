import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import About from './pages/About';
import ConfirmOTP from './pages/ConfirmOTP';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ForgotPassWord from './pages/ForgotPassWord';
import Home from './pages/Home';
import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ReadingList from './pages/ReadingList';
import SignOutConfirm from './pages/SignOutConfirm';
import SignUp from './pages/SignUp';
import Sponsor from './pages/Sponsor';
import { AppRoutes } from './routing/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewPosts from './pages/NewPosts';
import CodeOfConduct from './pages/CodeOfConduct';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DetailPage from './pages/DetailPage';
import Search from './pages/Search';
import Tags from './pages/Tags';
function App() {
	return (
		<div className="App">
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
			<Navbar />
			<Routes>
				<Route exact path={AppRoutes.HOME} element={<Home />} />
				<Route exact path={AppRoutes.PROFILE} element={<Profile />} />
				<Route exact path={AppRoutes.LOGIN} element={<Login />} />
				<Route exact path={AppRoutes.REGISTER} element={<SignUp />} />
				<Route
					exact
					path={AppRoutes.READING_LIST}
					element={
						<PrivateRoute>
							<ReadingList />
						</PrivateRoute>
					}
				/>
				<Route exact path={AppRoutes.ABOUT} element={<About />} />
				<Route exact path={AppRoutes.CONTACT} element={<Contact />} />
				<Route exact path={AppRoutes.SPONSORS} element={<Sponsor />} />
				<Route exact path={AppRoutes.FAQ} element={<FAQ />} />
				<Route exact path={AppRoutes.SIGNOUT_CONFIRM} element={<SignOutConfirm />} />
				<Route exact path={AppRoutes.FORGOT_PASSWORD} element={<ForgotPassWord />} />
				<Route exact path={AppRoutes.CONFIRM_OTP} element={<ConfirmOTP />} />
				<Route exact path={AppRoutes.NEW_PASSWORD} element={<NewPassword />} />
				<Route exact path={AppRoutes.NEW_POST} element={<NewPosts/>} />
				<Route exact path={AppRoutes.CODE_OF_CONDUCT} element={<CodeOfConduct />} />
				<Route exact path={AppRoutes.PRIVACY} element={<Privacy />} />
				<Route exact path={AppRoutes.TERMS} element={<Terms />} />
				<Route exact path={AppRoutes.DETAIL_PAGE} element={<DetailPage/>} />
				<Route exact path={AppRoutes.SEARCH} element={<Search/>} />
				<Route exact path={AppRoutes.TAGS} element={<Tags/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
