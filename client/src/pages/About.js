import React from 'react';
import Footer from '../components/Footer/Footer';
import FooterLayout from '../components/Layout/FooterLayout';
const About = () => {
	return (

			<FooterLayout>
			<div className='md:px-3 md:py-4 bg-white-smoke  lg:px-48'>
			<div id="page-content" className="wrapper pages pages-about" data-current-page="pages-about">
					<main id="main-content">
						<div className="px-2 py-4 mt-14 mx-auto w-full min-h-screen md:px-12 md:py-16 bg-white border-transparent md:border-2 drop-shadow-sm md:border-gray-200 md:rounded-xl">
							<div className="">
								<h1 className="text-3xl font-bold mb-3 lg:text-5xl">About DEV</h1>

								<p className='font-medium text-gray-700 leading-8 mb-3 tracking-widest'>
									DEV is a community of software developers getting together to help one another out. The software
									industry relies on collaboration and networked learning. We provide a place for that to happen.
								</p>

								<p className='font-medium text-gray-700 leading-8 mb-3 tracking-widest'>
									DEV is built on <a href="https://forem.com" className='underline text-purple-500'>Forem</a>: open source software designed to empower
									communities. Because our application is <a href="https://github.com/forem" className='underline text-purple-500'>open source</a>, you can
									inspect every little detail of the code, or chip in yourself! Forem is available for anyone interested
									in creating similar communities in any niche or passion. Visit our meta Forem,{' '}
									<a href="https://forem.dev" className='underline text-purple-500'>forem.dev</a> for more information.{' '}
								</p>

								<p className='font-medium text-gray-700 leading-8 mb-3 tracking-widest'>
									We believe in transparency and adding value to the ecosystem. We hope you enjoy poking around and
									participating!
								</p>

								<h2 className='mb-3'>
									<a name="leadership" href="#leadership"></a>
									<strong className='text-3xl'>Leadership</strong>
								</h2>

								<p>
									<a
										href="https://res.cloudinary.com/practicaldev/image/fetch/s--2wDjV5jB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--S2Ud7coR--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/0r746whbdtl8uvs98uah.JPG"
										className="article-body-image-wrapper"
									>
										<img
                    className='rounded-xl'
											src="https://res.cloudinary.com/practicaldev/image/fetch/s--2wDjV5jB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--S2Ud7coR--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/0r746whbdtl8uvs98uah.JPG"
											alt="Alt Text"
											loading="lazy"
										></img>
									</a>
								</p>

								<p className='font-medium text-gray-700 leading-8 mb-3 tracking-widest'>
									DEV is led by Forem's co-founders <a href="https://dev.to/ben"  className='underline text-purple-500'>Ben Halpern</a>,{' '}
									<a href="https://dev.to/jess"  className='underline text-purple-500'>Jess Lee</a>, and <a href="https://dev.to/peter"  className='underline text-purple-500'>Peter Frank</a>{' '}
									("PB&amp;J").
								</p>

								<h2 className=' mb-3'>
									<a name="team" href="#team"  className='underline text-purple-500'></a>
									<strong  className='text-3xl'>Team</strong>
								</h2>

								<p>
									<a
										href="https://res.cloudinary.com/practicaldev/image/fetch/s--I9EX-h9C--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/twicegd1crfhbxi3m0iz.png"
										className="article-body-image-wrapper"
									>
										<img
                    className='rounded-xl'
											src="https://res.cloudinary.com/practicaldev/image/fetch/s--I9EX-h9C--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/twicegd1crfhbxi3m0iz.png"
											alt="Zoom team photo"
											loading="lazy"
										></img>
									</a>
								</p>

								<p className='font-medium text-gray-700 leading-8 mb-3 tracking-widest'>
									Our team is distributed around the world. We have no office, but we come together online each day to
									build community and improve the software careers of millions.
								</p>

								<p className='font-medium text-gray-700 leading-8 mb-3 tracking-widest'>Happy coding ❤️</p>
							</div>
						</div>
					</main>
					<div id="IS_CENTERED_PAGE"></div>
				</div>
			</div>
			</FooterLayout>
	

  );
};

export default About;
