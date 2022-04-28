import React, { useState } from 'react';
import FooterLayout from '../components/Layout/FooterLayout';

const ConfirmOTP = () => {
	const [state, setState] = useState({
		value: '',
		otp1: '',
		otp2: '',
		otp3: '',
		otp4: '',
		otp5: '',
		disable: true,
	});

	const handleChange = (valueParam, e) => {
		setState({
            ...state,
			[valueParam]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log(state);
	};
	const inputfocus = (elmnt) => {
		if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
			const next = elmnt.target.tabIndex - 1;
			if (next > -1) {
				elmnt.target.form.elements[next].focus();   
			}
		} else {
			console.log('next');

			const next = elmnt.target.tabIndex - 1;
            console.log(next);
			if (next < 5) {
				elmnt.target.form.elements[next].focus();
			}
		}
	};

	return (
		<FooterLayout>
			<div className="w-full-screen bg-white-smoke mt-14 md:px-2 md:py-2 lg:px-48 lg:py-4">
				<div className="w-full h-full bg-white pl-3 pb-6  pt-16 md:border-2 md:border-gray-200 md:rounded-lg md:p-12 lg:px-16">
					<h1 className="text-xl text-center font-semibold">Xác Thực MÃ OTP</h1>
					<p className="text-sm text-center font-medium mt-4">Mã xác nhận đã được gửi qua SDT :</p>
					<span className="block text-center text-sm text-gray-500">096xxxxxx666</span>
					<span className="my-4 block text-center text-sm">Vui Lòng Nhập Mã OTP</span>
					<form onSubmit={handleSubmit} className="my-6">
						<div className="flex gap-x-2 items-center justify-center">
							<input
								name="otp1"
								type="number"
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
								type="number"
								autoComplete="off"
								className="px-2 py-3 border-2 border-gray-200 rounded-lg  w-[50px] h-[50px]"
								value={state.otp5}
								onChange={(e) => handleChange('otp5', e)}
								tabIndex="5"
								maxLength="1"
								onKeyUp={(e) => inputfocus(e)}
							/>
						</div>
                        <div className='flex items-center justify-between px-6 mt-4 md:w-[50%] md:mx-auto md:my-10'>
                            <span className='inline-block text-gray-700 font-semibold text-[12px]'>Bạn chưa nhận được mã ?</span>
                            <button className='inline-block text-[12px] underline font-medium '>Gửi lại mã OTP (1:56)</button>
                        </div>
						<div className='flex items-center justify-center mt-6'>
                        <button className="main-btn px-8" type="submit">
							CONFIRM
						</button>
                        </div>
					</form>
				</div>
			</div>
		</FooterLayout>
	);
};

export default ConfirmOTP;
