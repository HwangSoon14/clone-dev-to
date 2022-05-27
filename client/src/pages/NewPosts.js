import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import BallsLoading from '../components/Loading/BallsLoading';
import Multiselect from 'multiselect-react-dropdown';
import { useNavigate } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import uploadApi from '../api/uploadApi';
import userApi from '../api/userApi';
import { toast } from 'react-toastify';
import tagApi from '../api/tagApi';

function onImageUpload(file) {
	return new Promise(async (resolve, reject) => {
		try {
			const body = new FormData();
			body.append('image', file);
			const result = await uploadApi.uploadSingle(body);
			resolve(result.urlImage);
		} catch (error) {
			reject(error);
		}
	});
}
const mdParser = new MarkdownIt();

function NewPosts() {
	const navigate = useNavigate();
	const imgRef = useRef(null);
	const formData = useRef({
		title: '',
		content: 'Write your post content here...',
		tags: [],
		banner: '',
	});
	const [isloading, setLoading] = useState(false);
	const [options, setOptions] = useState([]);

	function handleEditorChange({ html, text }) {
		formData.current.content = text;
	}

	function onSelect(selectedList) {
		formData.current.tags = selectedList;
	}

	function onRemove(selectedList) {
		formData.current.tags = selectedList;
	}
	async function upLoadPost() {
		const tags = formData.current.tags.map((val) => {
			return val.title.split('#')[1];
		});
		try {
			await userApi.createPost({ ...formData.current, tags });
			toast.success(`add new post`);
			setTimeout(() => {
				navigate("/", {replace: true})
			}, 1000);
		} catch (error) {
			toast.error(error);
		}
	}

	useEffect(() => {
		(async () => {
			const tagList = await tagApi.getAllTag();

			tagList.forEach(item => {
				for(let key in item) {
					if(key !== "title") {
						delete(item[key])
					}
					else {
						let temp = item[key];
						item[key]= "";
						item[key] = "#" + temp; 
					}
				}
			})
			setOptions(tagList)
		})()
	} , [])
	return (
		<div className="mt-20">
			<div className="w-[95%] mx-auto overflow-hidden">
				<input
					type="file"
					className="hidden"
					id="file_upload"
					accept="image/*"
					onChange={(e) => {
						const form = new FormData();
						form.append('image', e.target.files[0]);
						setLoading(true);
						axios.post('https://devvn-api.herokuapp.com/api/v1/uploads/single', form).then((result) => {
							formData.current.banner = result.data.urlImage;
							setLoading(false);
							imgRef.current.src = result.data.urlImage;
						});
					}}
				/>
				<div className="flex gap-6 items-center">
					<label htmlFor="file_upload">
						<div className="main-btn">Add a cover image</div>
					</label>
					{isloading && (
						<>
							<BallsLoading /> <p className="pl-6 font-mono text-gray-700">Uploading...</p>
						</>
					)}
				</div>
				<button className="fixed top-20 right-10 underline text-base route-tab" onClick={upLoadPost}>
					Publish
				</button>
				<div
					className={
						formData.current.banner
							? 'h-36 sm:h-40 mt-4 w-full sm:w-2/3 lg:w-1/4 rounded-tl-2xl rounded-br-2xl'
							: 'hidden'
					}
				>
					<img
						className=" h-full w-full object-cover rounded-tl-2xl rounded-br-2xl"

						src={formData.current.banner}
						alt="can't get"
						ref={imgRef}
					/>
				</div>
				<input
					type="text"
					placeholder="New post title here..."
					className="focus:outline-0 text-4xl font-bold text-gray-700 placeholder:text-gray-500  h-14 w-full my-6"
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
						displayValue="title"
						selectedValues={formData.current.tags}
						onSelect={onSelect}
						onRemove={onRemove}
						style={{
							chips: {
								backgroundColor: `rgb(183 24 255)`,
								fontSize: 'bold',
								cursor: 'pointer'
							},
							searchBox: {
								border: 'none',
								padding: '0px',
							},
							option: {
								transition: 'all 0.15s ease',
							}
						}}
						customCloseIcon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
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

				<MdEditor
					style={{ height: '450px' }}
					placeholder="Write your post content here..."
					onImageUpload={onImageUpload}
					renderHTML={(text) => mdParser.render(text)}
					onChange={handleEditorChange}
					imageAccept=".jpg,.png"
					className='custom-highlighter-syntax'
				/>
			</div>
		</div>
	);
}

export default NewPosts;
