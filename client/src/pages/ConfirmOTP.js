import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { string } from 'yup';
import authApi from '../api/authApi';
import FooterLayout from '../components/Layout/FooterLayout';
import Loading from '../components/Loading/Loading';

const ConfirmOTP = () => {
	const [state, setState] = useState({
		value: '',
		otp1: '',
		otp2: '',
		otp3: '',
		otp4: '',
		otp5: '',
		otp6: '',
		disable: true,
	});
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const Ref = useRef(null);
	const [timer, setTimer] = useState('00:00');
	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (valueParam, e) => {
		setState({
			...state,
			[valueParam]: e.target.value,
		});
	};
	const inputfocus = (elmnt) => {
		if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
			const next = elmnt.target.tabIndex - 1;
			if (next > -1) {
				elmnt.target.form.elements[next].focus();
			}
		} else {
			const next = elmnt.target.tabIndex - 1;
			if (next < 6) {
				elmnt.target.form.elements[next].focus();
			}
		}
	};
	const convertToNumberString = (obj) => {
		let numberString = '';
		for (let key in obj) {
			numberString += obj[key];
		}
		return numberString;
	};

	const handleSendOtpAgain = async () => {
		setIsLoading(true);
		try {
			const res = await authApi.sendMail({ email });
			toast.warn(res.err);
			setIsLoading(false);
		} catch (error) {
			toast.error(error.mess);
			setIsLoading(false);
		}
		onClickReset();
	};

	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		const { otp1, otp2, otp3, otp4, otp5, otp6 } = state;
		const OTPString = convertToNumberString({ otp1, otp2, otp3, otp4, otp5, otp6 });
		try {
			const res = await authApi.confirmOTP(OTPString);

			localStorage.setItem('set-new-pw', true);
			navigate('/users/type-new-password');
			toast.success(res.mess);
			setIsLoading(false);
		} catch (error) {
			localStorage.removeItem('send_mail');
			localStorage.removeItem('send_to_mail');
			toast.error('Your OTP is wrong , please get the new one');
			navigate('/users/password/new');
			setIsLoading(false);
		}
	};

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);

		return {
			total,
			minutes,
			seconds,
		};
	};
	const startTimer = (e) => {
		let { total, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			setTimer((minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds));
		}
	};

	const clearTimer = (e) => {
		setTimer('00:00');
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};
	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 5);
		return deadline;
	};

	const onClickReset = () => {
		clearTimer(getDeadTime());
	};

	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	useEffect(() => {
		const isSendMail = JSON.parse(localStorage.getItem('send_mail'));
		if (!isSendMail) {
			toast.error('you must be send mail first , then back here to enter your OTP');
			return navigate('/users/password/new');
		}
		setEmail(JSON.parse(localStorage.getItem('send_to_mail')).email);
	}, [navigate]);

	return (
		<FooterLayout>
			<div className="w-full-screen bg-white-smoke mt-14 md:px-2 md:py-2 lg:px-48 lg:py-4">
				<div className="w-full h-full bg-white pl-3 pb-6  pt-16 md:border-2 md:border-gray-200 md:rounded-lg md:p-12 lg:px-16">
					<h1 className="text-xl text-center font-semibold">Confirm your OTP</h1>
					<p className="text-sm text-center font-medium mt-4">Your OTP has been send to email: </p>
					{!!email ? (
						<span className="block text-center text-sm text-gray-500">{email}</span>
					) : (
						<span className="block text-center text-sm text-gray-500 animate-bounce200">Wait a minute</span>
					)}
					<span className="my-4 block text-center text-sm">Please enter your OTP</span>
					<form onSubmit={handleSubmit} className="my-6">
						<div className="flex gap-x-2 items-center justify-center">
							<input
								name="otp1"
								type="number"
								min={0}
								max={9}
								autoComplete="off"
								className="px-2 py-3 border-2 border-gray-200 rounded-lg w-[50px] h-[50px]"
								value={state.otp1}
								// onKeyPress={this.keyPresse  w-[50px] h-[50px]d}
								onChange={(e) => handleChange('otp1', e)}
								tabIndex="1"
								maxLength="1"
								onKeyUp={(e) => inputfocus(e)}
							/>
							<input
								name="otp2"
								type="number"
								min={0}
								max={9}
								autoComplete="off"
								className="px-2 py-3 border-2 border-gray-200 rounded-lg  w-[50px] h-[50px]"
								value={state.otp2}
								onChange={(e) => handleChange('otp2', e)}
								tabIndex="2"
								maxLength="1"
								onKeyUp={(e) => inputfocus(e)}
							/>
							<input
								name="otp3"
								min={0}
								max={9}
								type="number"
								autoComplete="off"
								className="px-2 py-3 border-2  border-gray-200 rounded-lg  w-[50px] h-[50px]"
								value={state.otp3}
								onChange={(e) => handleChange('otp3', e)}
								tabIndex="3"
								maxLength="1"
								onKeyUp={(e) => inputfocus(e)}
							/>
							<input
								name="otp4"
								min={0}
								max={9}
								type="number"
								autoComplete="off"
								className="px-2 py-3 border-2 border-gray-200 rounded-lg  w-[50px] h-[50px]"
								value={state.otp4}
								onChange={(e) => handleChange('otp4', e)}
								tabIndex="4"
								maxLength="1"
								onKeyUp={(e) => inputfocus(e)}
							/>

							<input
								name="otp5"
								min={0}
								max={9}
								type="number"
								autoComplete="off"
								className="px-2 py-3 border-2 border-gray-200 rounded-lg  w-[50px] h-[50px]"
								value={state.otp5}
								onChange={(e) => handleChange('otp5', e)}
								tabIndex="5"
								maxLength="1"
								onKeyUp={(e) => inputfocus(e)}
							/>
							<input
								name="otp6"
								min={0}
								max={9}
								type="number"
								autoComplete="off"
								className="px-2 py-3 border-2 border-gray-200 rounded-lg  w-[50px] h-[50px]"
								value={state.otp6}
								onChange={(e) => handleChange('otp6', e)}
								tabIndex="6"
								maxLength="1"
								onKeyUp={(e) => inputfocus(e)}
							/>
						</div>

						<div className="flex items-center justify-center mt-6">
							<button className="main-btn px-8" type="submit">
								CONFIRM
							</button>
						</div>
					</form>
					<div className="flex items-center justify-between px-6 mt-4 md:w-[50%] md:mx-auto md:my-10">
						<button
							disabled={timer !== '00:00' && true}
							onClick={handleSendOtpAgain}
							className="inline-block text-gray-700 font-semibold text-[12px] hover:underline transition-all hover:text-main-color disabled:text-gray-400"
						>
							Your OTP don't work ?
						</button>
						<button className="inline-block text-[12px] underline font-medium ">Send OTP again {timer}</button>
					</div>
				</div>
			</div>
			{isLoading && <Loading />}
		</FooterLayout>
	);
};

export default ConfirmOTP;
