import React from 'react';
import FooterLayout from '../components/Layout/FooterLayout';

const Sponsor = () => {
	return (
		<FooterLayout>
			<div className="w-full-screen h-auto bg-white-smoke mt-14 md:px-2 md:py-2 lg:px-48 lg:py-4">
				<div className="w-full h-full bg-white pl-3 py-4 md:border-[1px] md:border-gray-200 md:rounded-lg md:p-12 lg:px-16">
					<div className="my-4">
						<h1 className="font-semibold text-3xl mb-3">Sponsorship Options</h1>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Thank you for your interest in supporting the community and joining the DEV / Forem Ecosystem!
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							To streamline our sponsorship interest process, we have set up the following FAQ.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							If you are simply looking to download our media kit outlining all sponsorship options, you can
							<a
								href="https://drive.google.com/file/d/1R-SpTKHh7h7p_xthN7YJh1m7ySniSNH1/view?usp=sharing"
								className="underline text-main-color"
							>
								download our prospectus here
							</a>
						</p>
					</div>
					<div className="mt-16">
						<h2 className="text-3xl font-semibold mb-3">What is Forem? 🌱</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Forem is the{' '}
							<a className="underline text-main-color" href="https://github.com/forem/forem">
								open source community software
							</a>{' '}
							that powers DEV and other{' '}
							<a className="underline text-main-color" href="https://forem.com/discover">
								growing communities
							</a>
							.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							For more information, please check out <a href="https://forem.com/">Forem.com</a>.
						</p>
					</div>
					<div className="mt-16">
						<h2 className="text-3xl font-semibold mb-3">Can I set up my own Forem community?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Absolutely. Forem provides a powerful and extensible way to engage with your community. Many
							developer-facing organizations are in the process of replacing (or supplementing) their closed and
							synchronous-first developer communities —typically on Slack/Discord — with the open and async-first Forem
							platform.<a href="https://forem.com/">Forem.com</a>.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Forem is also a great platform for organizing your private ambassador communities and even your internal
							teams.<a href="https://forem.com/">Forem.com</a>.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Check out our ”
							<a className="underline text-main-color" href="https://forem.com/get-started">
								Get Started
							</a>
							” that powers DEV page for more information on hosting yourself or getting going immediately with our
							Forem Cloud option.
						</p>
					</div>
					<div className="mt-16">
						<h2 className="text-2xl font-semibold mb-3">Can you tell me more about DEV, CodeNewbie, and CodeLand?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							DEV (
							<a className="underline text-main-color" href="https://dev.to">
								dev.to
							</a>
							) is an online platform where programmers of all backgrounds and experience levels gather to publish
							articles, participate in discussions, and discover products and services.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							<strong>DEV stats</strong>:
						</p>
						<ul className="list-disc pl-4">
							<li className="my-4 text-[14px] leading-8 tracking-widest text-gray-800 font-medium mb-4">
							~830k registered developers 👩‍💻👨‍💻
							</li>
							<li className="my-4 text-[14px] leading-8 tracking-widest text-gray-800 font-medium mb-4">
							~280k email subscribers 📬
							</li>
							<li className="my-4 text-[14px] leading-8 tracking-widest text-gray-800 font-medium mb-4">
							~270k Twitter followers 🐦
							</li>
							<li className="my-4 text-[14px] leading-8 tracking-widest text-gray-800 font-medium mb-4">
							~100k Facebook fans 🤩
							</li>
						</ul>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							We also operate <a className='underline text-main-color' href="https://community.codenewbie.org/">CodeNewbie</a> and{' '}
							<a href="https://www.codelandconf.com/" className="underline text-main-color" >CodeLand</a>. CodeNewbie is the most supportive community of
							programmers and people learning to code, while CodeLand is our annual conference for early-career software
							developers and their champions.
						</p>
					</div>
					<div className="mt-16">
						<h2 className="text-3xl font-semibold mb-3">Does my company need to be a paying sponsor to join the DEV ecosystem?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
						No, we welcome all organizations that are interested in authentically engaging with the developer community to join the ecosystem.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Forem is also a great platform for organizing your private ambassador communities and even your internal
							teams.<a href="https://forem.com/">Forem.com</a>.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
						Over 3,000 groups have already established a free organization account on DEV — you can find more information on how to get going 
						<a href="https://dev.to/organization-info" className='underline text-main-color'>here</a>
						</p>
					</div>
					<div className="mt-16">
						<h2 className="text-2xl font-semibold mb-3">What sponsorship options are available for DEV, CodeNewbie, and CodeLand?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
						We offer three types of sponsorships—
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							<strong>DEV stats</strong>:
						</p>
						<ul className="list-disc pl-4">
							<li className="my-4 text-[14px] leading-8 tracking-widest text-gray-800 font-medium mb-4">
								🎤 Support for our three in-house podcasts —{' '}
								<a href="https://www.codenewbie.org/podcast">CodeNewbie Podcast</a>,{' '}
								<a href="https://dev.to/devdiscuss">DevDiscuss</a>, and <a href="https://dev.to/devnews">DevNews</a>
							</li>
							<li className="my-4 text-[14px] leading-8 tracking-widest text-gray-800 font-medium mb-4">
								🚀 Custom campaigns and hackathons (such as the{' '}
								<a href="https://dev.to/t/actionshackathon/top/infinity">GitHub Actions Hackathon</a>)
							</li>
							<li className="my-4 text-[14px] leading-8 tracking-widest text-gray-800 font-medium mb-4">
								📅 Sponsorship opportunities at our annual <a href="https://codelandconf.com">CodeLand Conference</a>{' '}
								(distributed conference taking place June 16 &amp; 17, 2022)
							</li>
						</ul>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
						For more information on these sponsorship options, <strong><a href="https://drive.google.com/file/d/1R-SpTKHh7h7p_xthN7YJh1m7ySniSNH1/view?usp=sharing" className='underline text-main-color'>please download our bundled prospectus here</a>.</strong>
						</p>
						
					</div>
					<div className="mt-16">
						<h2 className="text-3xl font-semibold mb-3">I’d like to learn more, can I get in touch with someone from the Forem / DEV team?</h2>
						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
						Absolutely.  Please fill out the form below or email 
						<a href="mailto:sponsors@forem.com" className='underline text-main-color'>sponsors@forem.com</a>
						</p>
					</div>
					<div className="mt-24">
						<h2 className="text-3xl font-semibold mb-3 text-center">Sponsorship Interest Form</h2>
					</div>
				</div>
			</div>
		
		</FooterLayout>
	);
};

export default Sponsor;
