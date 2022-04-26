import React from 'react';

const EmptyPage = () => {
	return (
		<div className="container max-w-screen-2xl  md:py-2 md:px-1 lg:px-28 bg-white h-[25vh]  lg:h-[50vh] w-full overflow-x-hidden">
			<div className="w-full h-full flex flex-col items-center justify-center px-6">
				<span className="font-semibold block text-lg mb-3">Your reading list is empty</span>
				<p className="max-w-[80%] text-sm text-center leading-7">
					Click the{' '}
					<span className="text-gray-500 font-bold">
						bookmark reaction
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="crayons-icon mx-1 inline-block"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
						>
							<path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
						</svg>
                        
					</span>
                    when viewing a post to add it to your reading list.
				</p>
			</div>
		</div>
	);
};

export default EmptyPage;
