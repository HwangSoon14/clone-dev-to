import React from 'react';
import Footer from '../components/Footer/Footer';
import FooterLayout from '../components/Layout/FooterLayout';

const Contact = () => {
	return (
        <FooterLayout>

		<div className="max-w-screen-xl mx-auto h-auto  mt-14 md:px-2 md:py-2 lg:py-4">
			<div className="w-full h-full bg-white pl-3 py-4 md:border-[1px] md:border-gray-200 md:rounded-lg md:p-12 lg:px-16">
				<h1 className="font-semibold text-3xl mb-3">Contacts</h1>
				<p className='leading-8 tracking-widest text-gray-700 font-medium mb-3'>DEV Community would love to hear from you!</p>
			
    <p className='leading-8 tracking-widest text-gray-700 font-medium mb-3'>
      Email: <a className='underline text-main-color ml-3' href="mailto:yo@dev.to">yo@dev.to</a> 😁
    </p>
    <p className='leading-8 tracking-widest text-gray-700 font-medium mb-3'>
      Twitter: <a className='underline text-main-color ml-3' href="http://twitter.com/thepracticaldev">@thepracticaldev</a> 👻
    </p>
    <p className='leading-8 tracking-widest text-gray-700 font-medium mb-3'>
      Report a vulnerability: <a className='underline text-main-color ml-3' href="https://dev.to/security">dev.to/security</a> 🐛
    </p>
    <p className='leading-8 tracking-widest text-gray-700 font-medium mb-3'>
      To report a bug, please create <a className='underline text-main-color ml-3' href="https://github.com/forem/forem/issues/new/choose">a bug report</a> in our open source repository.
    </p>
    <p className='leading-8 tracking-widest text-gray-700 font-medium mb-3'>
      To request a feature, please <a className='underline text-main-color ml-3' href="https://github.com/forem/forem/discussions">start a new GitHub Discussion</a> in the Forem repo!
    </p>
			</div>
		</div>
       
        </FooterLayout>

	);
};

export default Contact;
