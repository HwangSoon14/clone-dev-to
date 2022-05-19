import React from 'react'

export default function Search() {
  return (
    <div className="hidden md:block ml-5 relative">
    <label htmlFor="search-field" className="sr-only">
        Search
    </label>
    <input
        id="search-field"
        name="search"
        type="text"
        autoComplete="text"
        className="appearance-none min-w-[370px] rounded-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 md:rounded-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Search..."
    />

    <div className="absolute right-[10px] top-[50%] translate-y-[-50%] z-20 cursor-pointer">
    <label htmlFor="search-field">
    <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
        </svg>
    </label>
    </div>
</div>
  )
}
