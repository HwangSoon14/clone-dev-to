import React from 'react';
import FooterLayout from '../components/Layout/FooterLayout';

const CodeOfConduct = () => {
	return (
		<FooterLayout>
			<div className="w-full-screen h-auto bg-white-smoke mt-14 md:px-2 md:py-2 lg:px-48 lg:py-4">
				<div className="w-full h-full bg-white pl-3 py-4 md:border-[1px] md:border-gray-200 md:rounded-lg md:p-12 lg:px-16">
					<h1 className="font-semibold text-2xl mb-3">CODE OF CONDUCT</h1>
					<p className="leading-8 tracking-widest text-gray-700 font-medium mb-3">
						All participants of DEV Community are expected to abide by our Code of Conduct, both online and during
						in-person events that are hosted and/or associated with DEV Community.
					</p>
					<h1 className="font-semibold text-2xl mb-3">Our Pledge</h1>

					<p className="leading-8 tracking-widest text-gray-700 font-medium mb-3">
						In the interest of fostering an open and welcoming environment, we as moderators of
						<a className="underline inline-block text-main-color ml-3" href="https://dev.to">
							DEV Community
						</a>
						pledge to make participation in our project and our community a harassment-free experience for everyone,
						regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience,
						nationality, personal appearance, race, religion, or sexual identity and orientation.
					</p>
					<h1 className="font-semibold text-2xl mb-3">Our Standards</h1>
					<p className="leading-8 tracking-widest text-gray-700 font-medium mb-3">
						Examples of behavior that contributes to creating a positive environment include:
					</p>
					<ul className="list-disc ml-4">
						<li className="leading-7 tracking-wider">Using welcoming and inclusive language</li>
						<li className="leading-7 tracking-wider">Being respectful of differing viewpoints and experiences</li>
						<li className="leading-7 tracking-wider">
							Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain
						</li>
						<li className="leading-7 tracking-wider">Gracefully accepting constructive criticism</li>
						<li className="leading-7 tracking-wider">Focusing on what is best for the community</li>
						<li className="leading-7 tracking-wider">Showing empathy towards other community members</li>
					</ul>
					<p className="leading-8 tracking-widest text-gray-700 font-medium mb-3">
						Examples of unacceptable behavior by participants include:
					</p>
					<ul className="list-disc ml-4">
						<li className="leading-7 tracking-wider">
							The use of sexualized language or imagery and unwelcome sexual attention or advances
						</li>
						<li className="leading-7 tracking-wider">
							Trolling, insulting/derogatory comments, and personal or political attacks
						</li>
						<li className="leading-7 tracking-wider">Public or private harassment</li>
						<li className="leading-7 tracking-wider">
							Publishing others' private information, such as a physical or electronic address, without explicit
							permission
						</li>
						<li className="leading-7 tracking-wider">
							Other conduct which could reasonably be considered inappropriate in a professional setting
						</li>
						<li className="leading-7 tracking-wider">Dismissing or attacking inclusion-oriented requests</li>
					</ul>
					<h1 className="font-semibold text-2xl mb-3">Enforcement</h1>
					<p className="leading-8 tracking-widest text-gray-700 font-medium mb-3">
						Violations of the Code of Conduct may be reported by contacting the team via the
						<a className="underline inline-block text-main-color ml-3" href="https://dev.to/report-abuse">
							abuse report form
						</a>
						or by sending an email to
						<a className="underline inline-block text-main-color ml-3" href="mailto:yo@dev.to">
							yo@dev.to
						</a>
						. All reports will be reviewed and investigated and will result in a response that is deemed necessary and
						appropriate to the circumstances. Further details of specific enforcement policies may be posted separately.
					</p>
					<p className="leading-8 tracking-widest text-gray-700 font-medium mb-3">
						Moderators have the right and responsibility to remove comments or other contributions that are not aligned
						to this Code of Conduct, or to suspend temporarily or permanently any members for other behaviors that they
						deem inappropriate, threatening, offensive, or harmful.
					</p>
					<h1 className="font-semibold text-2xl mb-3">Attribution</h1>
					<p className="leading-8 tracking-widest text-gray-700 font-medium mb-3">
						This Code of Conduct is adapted from:
					</p>
					<ul className="list-disc ml-4">
						<li className="leading-7 tracking-wider">
							<a
								className="underline inline-block text-main-color ml-3"
								href="http://contributor-covenant.org/version/1/4"
							>
								Contributor Covenant, version 1.4
							</a>
						</li>
						<li className="leading-7 tracking-wider">
							<a
								className="underline inline-block text-main-color ml-3"
								href="http://www.writespeakcode.com/code-of-conduct.html"
							>
								Write/Speak/Code
							</a>
						</li>

						<li className="leading-7 tracking-wider">
							<a
								className="underline inline-block text-main-color ml-3"
								href="https://geekfeminism.org/about/code-of-conduct"
							>
								Geek Feminism
							</a>
						</li>
					</ul>
				</div>
			</div>
		</FooterLayout>
	);
};

export default CodeOfConduct;
