import React, { useMemo } from 'react'
import Loading from './Loading'
import Post from './Post'

const Timeline = ({ postsData, filteredPosts }) => {
	console.log('FILTERED data', filteredPosts)
	const topPosts = useMemo(() => {
		return [...filteredPosts]
			.filter((post) => post.socialActivityCountsInsight?.totalReactionCount)
			.sort(
				(a, b) =>
					b.socialActivityCountsInsight.totalReactionCount -
					a.socialActivityCountsInsight.totalReactionCount,
			)
			.slice(0, 3)
	}, [filteredPosts])
	return (
		<div className='flex flex-col items-center gap-4'>
			{postsData.loading ? (
				<Loading />
			) : topPosts && topPosts.length > 0 ? (
				topPosts.map((post) => <Post post={post} key={post.urn} />)
			) : (
				<p>No Posts Available</p>
			)}
		</div>
	)
}

export default Timeline
