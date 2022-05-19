import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlight from '../SyntaxHighlight';
import { timeConvert } from '../../Utils/TimeConvert';
import Comments from './Comments';
import ReadNext from './ReadNext';

function MainPost({ post }) {
	return (
		<div className="md:flex-1 overflow-auto mb-5 md:mb-0">
			{/* content post */}
			<div className="break-words rounded-md border-[1px] mb-5">
				<img className="h-80 w-full rounded-t-md object-cover" src={post.banner} alt="" />
				{/* post info */}
				<div className="p-5 sm:p-10">
					{/* info author */}
					<div className="flex gap-2 mb-5">
						<img className="h-10 w-10 object-cover rounded-full" src={post.userId?.avatar} alt="" />
						<div>
							<h3 className="capitalize font-semibold text-sm leading-4">{post.userId?.userName}</h3>
							<span className="font-light text-xs">Posted on {timeConvert(post.createdAt)}</span>
						</div>
					</div>
					{/* title */}
					<h2 className="font-extrabold text-3xl sm:text-5xl break-words">{post.title}</h2>
					{/* tags */}
					<div className="flex flex-wrap gap-4 mt-3">
						{post.tags?.map((val, index) => (
							<span className="text-sm font-light" key={index}>
								#{val}
							</span>
						))}
					</div>
					{/* content */}
					<div className="custom-highlighter-syntax pt-7 pb-6 sm:pt-10 sm:pb-8">
						<ReactMarkdown children={post.content} components={SyntaxHighlight} />
					</div>
				</div>
				<Comments post={post} />
			</div>

			{/* Read next */}
			<ReadNext post={post.readNext} />
		</div>
	);
}

export default MainPost;
