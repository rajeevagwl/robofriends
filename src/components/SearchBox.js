import React from 'react';

function SearchBox({searchField, searchChange}) {
	return (
		<div className = "pa2">
			<input 
				type = "search" 
				placeholder = "Search Robots" 
				className = "pa2 ba bg-lightest-blue"
				onChange = {searchChange}
			/>
		</div>
		);
}

export default SearchBox;