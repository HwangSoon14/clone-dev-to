import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import FooterLayout from '../components/Layout/FooterLayout';

const FAQ = () => {
	return (
		<FooterLayout>
			<div className="w-full-screen h-auto bg-white-smoke mt-14 md:px-2 md:py-2 lg:px-48 lg:py-4">
				<div className="w-full h-full bg-white pl-3 py-4 md:border-2 md:border-gray-200 md:rounded-lg md:p-12 lg:px-16">
					<div className="my-4">
						<h1 className="font-semibold text-3xl mb-3">Frequently Asked Questions 🤔</h1>
						<em>
							<p className="leading-8 tracking-widest text-gray-800 font-medium mb-2">
								Some of these are not actually asked frequently, but they're still good to know.
							</p>
						</em>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">Who can post to dev.to?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Anyone! Yes, you have permission to make a new post of any kind as long as it meets our community
							guidelines and gets through common-sense spam filters. Your post is subject to removal at the discretion
							of the moderators if they believe it does not meet the requirements of our
							<a className="underline text-main-color" href="https://dev.to/code-of-conduct">
								code of conduct
							</a>
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">How do I post article on dev.to?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Click on "Write a Post" in the top right corner of the site. Write your article, give it a title, tag it
							with appropriate tags, and fill out any other relevant fields. Then, once you're ready, change
							<code className="bg-gray-200 px-2 py-1 rounded-lg">published: false</code> to{' '}
							<code className="bg-gray-200 px-2 py-1 rounded-lg">published: true</code> in the front matter of the post
							and save. Your post will now be published.
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">Is there a guide for how to use DEV's editor?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Yes! Here is our{' '}
							<a href="https://dev.to/p/editor_guide" className="underline text-main-color">
								editor guide
							</a>
							, you can also find it by clicking the "?" page in the{' '}
							<Link to="/new" className="underline text-main-color">
								editor
							</Link>
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">How do I get featured on the home page?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							The home page is selected by our editorial team. You can email us with any specific questions.
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">
							Can I cross-post something I've already written on my own blog or Medium?
						</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Absolutely, as long as you have the rights you need to do so! And if it's of high quality, we'll feature
							it.
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">How do I change my Twitter/GitHub username?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							You can add or remove Twitter/GitHub associations from
							<a className="underline text-main-color" href="https://dev.to/settings/account">
								your settings
							</a>
							, but note that you can only do this if both Twitter and GitHub are connected to your account. If you have
							any issues with this, email
							<a href="mailto:yo@dev.to" className="underline text-main-color">
								yo@dev.to
							</a>
							and we'll take care of it.
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">What about my post's Google ranking?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							You can set the canonical_url of your post before publishing so that Google knows where to send the link
							juice (that precious, precious link juice).
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">How do I add a canonical URL?</h2>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							In your post editor, click the menu button:
						</p>
						<p>
							<a
								href="https://res.cloudinary.com/practicaldev/image/fetch/s--6IowK_B8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nywq81sq9e2cz46g3yfa.png"
								className="article-body-image-wrapper"
							>
								<img
									src="https://res.cloudinary.com/practicaldev/image/fetch/s--6IowK_B8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nywq81sq9e2cz46g3yfa.png"
									alt=""
									loading="lazy"
									className="rounded-lg"
								></img>
							</a>
						</p>

						<p className="leading-8 tracking-widest text-gray-800 font-medium my-4">Then fill in your canonical URL!</p>
						<p>
							<a
								href="https://res.cloudinary.com/practicaldev/image/fetch/s--vgbE90M2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hbcz7f08a4psiaova7yf.png"
								className="article-body-image-wrapper"
							>
								<img
									src="https://res.cloudinary.com/practicaldev/image/fetch/s--vgbE90M2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hbcz7f08a4psiaova7yf.png"
									alt=""
									loading="lazy"
									className="rounded-lg"
								></img>
							</a>
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium my-4">
							If you're using the basic markdown editor, you can add it inside the triple dashes, like so:
						</p>
						<div className="bg-black text-white overflow-scroll text py-4 px-2 rounded-lg">
							<pre className="highlight plaintext">
								<code>--- title: ---</code>
							</pre>
							<pre className="highlight plaintext">
								<code>--- published: false ---</code>
							</pre>
							<pre className="highlight plaintext">
								<code>--- tags: ---</code>
							</pre>
							<pre className="highlight plaintext">
								<code>--- canonical_url: https://mycoolsite.com/my-post ---</code>
							</pre>
						</div>
					</div>
					
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">
							I found a bug (not a security vulnerability). How do I report it?
						</h2>

						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Please create an issue on
							<a href="https://github.com/thepracticaldev/dev.to" className="underline text-main-color">
								our repo
							</a>
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">I found a security vulnerability. How do I report it?</h2>

						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							Please email
							<a href="mailto:yo@dev.to" className="underline text-main-color">
								sponsors@forem.com
							</a>
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">How do I report spam?</h2>

						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							For a specific comment: navigate to the comment and click the dropdown arrow to report abuse.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							For a specific article: navigate to the article, scroll to the bottom and click report abuse.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							In general, you can fill out the
							<a href="https://dev.to/report-abuse" className="underline text-main-color">
								sponsors@forem.com
							</a>
							from
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">How do I report spam?</h2>

						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							For a specific comment: navigate to the comment and click the dropdown arrow to report abuse.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							For a specific article: navigate to the article, scroll to the bottom and click report abuse.
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
							In general, you can fill out the
							<a href="https://dev.to/report-abuse" className="underline text-main-color">
								sponsors@forem.com
							</a>
							from
						</p>
					</div>
					<div className="mt-8 overflow-auto">
						<h2 className="text-2xl font-semibold mb-3">
  How does dev.to make money?</h2>

						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        Right now, we count on 
							<a href="https://dev.to/listings" className="underline text-main-color">
								sponsors@forem.com
							</a>
                            and <a href="https://dev.to/sponsors" className="underline text-main-color">
								sponsors@forem.com
							</a>
							. We also sell some merchandise on The DEV Shop.
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">
  
                        Do I own the articles that I publish?</h2>

						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        Yes, you own the rights to the content you create and post on dev.to and you have the full authority to post, edit, and remove your content as you see fit. 
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        By posting content on dev.to, you give us a nonexclusive license to publish it, including anything reasonably related to publishing it (like storing, displaying, reformatting, and distributing it).
						</p>
					</div>
					<div className="mt-8 overflow-auto">
						<h2 className="text-2xl font-semibold mb-3">
  
                        Will you put ads on my posts' pages?</h2>

						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        No ad will ever be placed next to a user's post without their consent in the matter.
						</p>
					</div>
					<div className="mt-8 overflow-auto">
						<h2 className="text-2xl font-semibold mb-3">
  
                        
  How does comment threading work?</h2>

						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        Comments are threaded with a maximum depth, and then they become flat. You can respond to flattened-out threads by replying to the last comment in the overall thread.
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">
  
                        Do I own the articles that I publish?</h2>

						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        Yes, you own the rights to the content you create and post on dev.to and you have the full authority to post, edit, and remove your content as you see fit. 
						</p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        By posting content on dev.to, you give us a nonexclusive license to publish it, including anything reasonably related to publishing it (like storing, displaying, reformatting, and distributing it).
						</p>
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">
  

                        Can I use profanity in my posts?</h2>

						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        We don’t disallow profanity in general, but we do have an internal policy of not boosting posts through our social channels that have profanity in the title, so you might want to keep that in mind.
						</p>
						
					</div>
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-3">
  


                        Upon sign in, why do you require authorization to allow the DEV Community to access info on my Twitter account?</h2>

						
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        The authorization page being talked about looks like the following:
						</p>
                        <p><a href="https://res.cloudinary.com/practicaldev/image/fetch/s--LTQiA9Be--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5rkd4thx2y29epj7dt7q.png" className="rounded-lg"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--LTQiA9Be--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5rkd4thx2y29epj7dt7q.png" alt="https://dev-to-uploads.s3.amazonaws.com/i/5rkd4thx2y29epj7dt7q.png" loading="lazy"></img></a></p>
						<p className="leading-8 tracking -widest text-gray-800 font-medium mb-4">
                        This is the default scope for Twitter and to our knowledge we can't get any more granular than this. Here's a picture of our options and what we've chosen:
						</p>
						<p><a href="https://res.cloudinary.com/practicaldev/image/fetch/s--IXC4O-w0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/m3wnwz9rdofwdljyn7w7.png" className="rounded-lg"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--IXC4O-w0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/m3wnwz9rdofwdljyn7w7.png" alt="https://dev-to-uploads.s3.amazonaws.com/i/m3wnwz9rdofwdljyn7w7.png" loading="lazy"></img></a></p>
						<p className="leading-8 tracking-widest text-gray-800 font-medium mb-4">
                        We take a strong stance against collecting unnecessary data on our users as stated on our 
                        <a href="https://dev.to/privacy" className="underline text-main-color">privacy page</a>
						</p>
					</div>
					
				</div>
			</div>
		</FooterLayout>
	
	);
};

export default FAQ;
