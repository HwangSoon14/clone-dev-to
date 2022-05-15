import React, { useEffect, useRef, useState } from 'react';
import Tag from '../components/Tag/Tag';
import tagApi from '../api/tagApi';
import { useSearchParams } from 'react-router-dom'

export default function Tags() {

	const [listTag, setListTag] = useState([]);
	const change = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
		const getTag = async () => {
			const data = await tagApi.getAllTag(searchParams.get("q"));
			setListTag(data);
		};
		getTag();
	}, [searchParams]);


	const handleOnChange = (e) => {
		if (change.current) {
			clearTimeout(change.current);
			change.current = null;
		}
		change.current = setTimeout(async () => {
      if(!e.target.value) return setSearchParams({})
      setSearchParams({q: e.target.value})
		}, 500);
	};

	return (
		<div className="mt-16 max-w-screen-2xl mx-auto px-3 xl:px-5">
			<div className="flex justify-between items-center py-5">
				<h2 className="font-semibold text-xl md:text-3xl">Top tags</h2>
				<div className="flex gap-4">
					<div className="relative">
						<input
							onChange={handleOnChange}
							type="text"
							placeholder="Search for tag"
							className="py-2 placeholder:text-gray-700 border-2 rounded-md pl-2"
						/>
						<div className="absolute right-2 top-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								role="img"
								aria-labelledby="am2dod5o0urw9ixv84u226jb2i6wimak"
								aria-hidden="true"
								className="crayons-icon"
							>
								<title id="am2dod5o0urw9ixv84u226jb2i6wimak">Search</title>
								<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
							</svg>
						</div>
					</div>
					<button>Following tags</button>
				</div>
			</div>
			<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{listTag.map((val, index) => (
					<Tag
						title={val.title}
						key={index}
						description={val.description}
						postCount={val.postCount}
						color={val.color}
						thumbnail={val.thumbnail}
					/>
				))}
			</div>
		</div>
	);
}
