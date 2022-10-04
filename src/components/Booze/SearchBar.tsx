import React from 'react';

export default function SearchBar({
  placeholderText,
  handleSearch,
}: {
  placeholderText: string;
  handleSearch: (e: { target: { value: string } }) => void;
}) {
  return (
    <input
      className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-theme-500 focus:bg-white focus:outline-none"
      type="search"
      name="Search"
      placeholder={placeholderText}
      onChange={handleSearch}
    />
  );
}
