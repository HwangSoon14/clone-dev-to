import React, { Component, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import BallsLoading from '../components/Loading/BallsLoading';
import parser from 'html-react-parser';
import Multiselect from 'multiselect-react-dropdown';
import { useNavigate } from 'react-router-dom';

function uploadAdapter(loader) {
	return {
		upload: () => {	
			return new Promise((resolve, reject) => {
				const body = new FormData();
				loader.file.then((file) => {
					body.append('image', file);	
					fetch(`http://localhost:5000/api/v1/uploads/single`, {
						method: 'post',
						body: body,
					})
						.then((res) => res.json())
						.then((res) => {
							resolve({
								default: res.urlImage,
							});
						})
						.catch((err) => {
							reject(err);
						});
				});
			});
		},
	};
}

function uploadPlugin(editor) {
	editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
		return uploadAdapter(loader);
	};
}

function NewPosts() {
	const imgRef = useRef(null);
	const formData = useRef({
		title: '',
		content: 'Write your post content here...',
		tags: [],
		banner: '',
	});

	const [isTabActive, setTab] = useState(true);
	const [isloading, setLoading] = useState(false);
	const [options, setOptions] = useState([
		{
			name: 'Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code',
			tag: '#javascript',
		},
		{ name: 'The magic behind computers. 💻', tag: '#programming' },
		{
			name: 'Productivity includes tips on how to use tools and software, process optimization, useful references, experience, and mindstate optimization.',
			tag: '#react',
		},
		{
			name: 'Hypertext Markup Language — the standard markup language for documents designed to be displayed in a web browser.',
			tag: '#html',
		},
		{
			name: 'Optional static type-checking for JavaScript.',
			tag: '#typescript',
		},
	]);

	function onSelect(selectedList) {
		formData.current.tags = selectedList;
	}

	function onRemove(selectedList) {
		formData.current.tags = selectedList;
	}
	const navigate = useNavigate();

	return (
		<div className="container mx-auto mt-14">
			{/* tab */}
			<div className="flex justify-between items-center px-4 sm:px-0">
				<button
					className="route-tab"
					onClick={() => {
						setTimeout(() => {
              navigate('/', {replace: true})
            }, 1500);
					}}
				>
					Publish
				</button>
				<div className="flex gap-4">
					<h3
						className={isTabActive ? 'font-bold  py-6 cursor-pointer ' : ' py-6 cursor-pointer'}
						onClick={() => {
							setTab(true);
						}}
					>
						Edit
					</h3>
					<h3
						className={!isTabActive ? 'font-bold py-6 cursor-pointer' : ' py-6 cursor-pointer'}
						onClick={() => {
							setTab(false);
						}}
					>
						Preview
					</h3>
				</div>
			</div>
			{/* content */}
			<div className="flex justify-center">
				{isTabActive ? (
					// Tab edit
					<div className="w-[95%] overflow-hidden">
						<input
							type="file"
							className="hidden"
							id="file_upload"
							accept="image/*"
							onChange={(e) => {
								const form = new FormData();
								form.append('image', e.target.files[0]);
								setLoading(true);
								axios.post('http://localhost:5000/api/v1/uploads/single', form).then((result) => {
									formData.current.banner = result.data.urlImage;
									setLoading(false);
									imgRef.current.src = result.data.urlImage;
								});
							}}
						/>
						<div className="flex gap-6 items-center">
							<label htmlFor="file_upload">
								<div className="border-2 rounded-md border-gray-300 p-2 cursor-pointer">Add a cover image</div>
							</label>
							{isloading && (
								<>
									<BallsLoading /> <p className="pl-6 font-mono text-gray-700">Uploading...</p>
								</>
							)}
						</div>
						<div className={formData.current.banner ? 'h-56 mt-4 w-full sm:w-2/3 lg:w-1/2 rounded-2xl' : 'hidden'}>
							<img
								className=" h-full w-full object-cover rounded-[inherit]"
								src={formData.current.banner}
								alt="can't get image"
								ref={imgRef}
							/>
						</div>
						<input
							type="text"
							placeholder="New post title here..."
							className="focus:outline-0 text-4xl font-bold text-gray-700 placeholder:text-gray-500  h-14 w-full my-7"
							defaultValue={formData.current.title}
							onChange={(e) => {
								formData.current.title = e.target.value;
							}}
						/>

						{/* MultiSelect Dropdown */}
						<div className="mb-8">
							<Multiselect
								options={options}
								selectionLimit={4}
								placeholder="Add up to 4 tags..."
								hidePlaceholder={true}
								displayValue="tag"
								selectedValues={formData.current.tags}
								onSelect={onSelect}
								onRemove={onRemove}
								style={{
									chips: {
										backgroundColor: `rgb(183 24 255)`,
										fontSize: 'medium',
									},
									searchBox: {
										border: 'none',
										padding: '0px',
									},
								}}
								customCloseIcon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								}
							/>
						</div>

						<CKEditor
							editor={ClassicEditor}
							config={{
								extraPlugins: [uploadPlugin],
							}}
							data={formData.current.content}
							onChange={(event, editor) => {
								formData.current.content = editor.getData();
							}}
						/>
					</div>
				) : (
					// Tab Preview
					<div className="post-tab__preview h-[calc(100vh-150px)] w-full overflow-y-auto px-5 pt-4 border-t-2 border-slate-700">
						<img
							className={formData.current.banner ? 'h-[300px] w-full object-cover' : 'hidden'}
							src={formData.current.banner}
							alt=""
						/>
						<h1 className="text-4xl font-bold mt-5 capitalize">{formData.current.title}</h1>
						<ul className="flex gap-4 my-4 flex-wrap">
							{formData.current.tags.map((val, index) => (
								<li key={index} className="px-4 py-1 rounded-3xl border-[1px] border-purple-600">
									{val.tag}
								</li>
							))}
						</ul>
						<div>{parser(formData.current.content)}</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default NewPosts;
