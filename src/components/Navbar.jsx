import React, { useState } from 'react'

const Navbar = ({ postsData, setFilteredPosts }) => {
	const [query, setQuery] = useState('')

	const handleSearch = (e) => {
		if (postsData.loading || postsData.posts.length <= 0) return
		const value = e.target.value.toLowerCase()
		setQuery(value)

		const filtered = postsData.posts.data.items.filter((post) => {
			const repostedAuthor =
				post.resharedPost?.author?.firstName?.toLowerCase() +
					' ' +
					post.resharedPost?.author?.lastName?.toLowerCase() || ''
			const author = post.author?.fullName?.toLowerCase() || ''
			const text = post.text?.toLowerCase() || ''
			const reshared = post.resharedPost?.text?.toLowerCase() || ''
			const companyName = post.resharedPost?.company?.name?.toLowerCase() || ''
			return (
				companyName.includes(value) ||
				repostedAuthor.includes(value) ||
				author.includes(value) ||
				text.includes(value) ||
				reshared.includes(value)
			)
		})

		setFilteredPosts(filtered)
	}

	return (
		<div className='bg-gray-200 w-full py-6 px-4 flex flex-wrap justify-around'>
			<h1 className='text-blue-800 text-2xl font-bold'>Social App</h1>
			<input
				type='text'
				value={query}
				onChange={handleSearch}
				placeholder='Search for author name or keywords'
				className='bg-white w-2xl p-2 rounded-md border border-gray-100 shadow-sm focus-visible:outline-gray-400'
			/>
		</div>
	)
}

export default Navbar
