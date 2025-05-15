import React, { useState } from 'react'
const filters = [
	{ label: 'Only original posts', value: 'original' },
	{ label: 'Only reshared posts', value: 'reshared' },
	{ label: 'Posts with video', value: 'video' },
]
const PostFilter = ({ setFilteredPosts, postsData }) => {
	const [selected, setSelected] = useState()

	const handleChange = (e) => {
		if (postsData.loading || postsData.posts.length <= 0) return
		setSelected(e.target.value)

		switch (e.target.value) {
			case 'original':
				setFilteredPosts(postsData.posts.data.items.filter((x) => !x.reposted))
				break
			case 'reshared':
				setFilteredPosts(postsData.posts.data.items.filter((x) => x.reposted))

				break
			case 'video':
				setFilteredPosts(
					postsData.posts.data.items.filter((post) => {
						const hasDirectVideo =
							Array.isArray(post.video) && post.video.length > 0
						const hasResharedVideo =
							Array.isArray(post.resharedPost?.video) &&
							post.resharedPost.video.length > 0
						return hasDirectVideo || hasResharedVideo
					}),
				)
				break
			default:
				break
		}
	}

	function handleClearFilter() {
		if (postsData.loading || postsData.posts.length <= 0) return
		setFilteredPosts(postsData.posts.data.items)
		setSelected()
	}

	return (
		<div className='p-4 bg-[#f7f7f7] border border-gray-300 rounded-md shadow-sm space-y-2 w-full h-full'>
			<div className='flex justify-between'>
				<h3 className='text-sm font-semibold text-gray-700'>Filter posts</h3>
				<button
					onClick={handleClearFilter}
					className='underline text-blue-500 cursor-pointer'>
					Clear Filter
				</button>
			</div>
			{filters.map((filter) => (
				<label
					key={filter.value}
					className='flex items-center space-x-2 cursor-pointer text-sm text-gray-600 hover:text-gray-800'>
					<input
						type='radio'
						name='postFilter'
						value={!postsData.loading ? filter.value : ''}
						checked={selected === filter.value}
						onChange={handleChange}
						className='accent-blue-600'
					/>
					<span>{filter.label}</span>
				</label>
			))}
		</div>
	)
}

export default PostFilter
