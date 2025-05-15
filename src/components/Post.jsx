import React from 'react'
import Author from './Author'
import ReactPlayer from 'react-player'
import { PlayIcon } from '../icons'
import VideoPlayer from './VideoPlayer'
import Reactions from './Reactions'

const renderTextWithHashtags = (text) => {
	const parts = text.split(/(\s+)/).map((part, i) => {
		if (/#[\w-]+/.test(part)) {
			return (
				<span key={i} className='text-blue-600 font-semibold '>
					{part}
				</span>
			)
		}
		return part
	})
	return parts
}

const Post = ({ post }) => {
	const shouldShowSocialBlock =
		(post.socialActivityCountsInsight &&
			Object.keys(post.socialActivityCountsInsight).length > 0) ||
		(post.url && post.url !== '')

	return (
		<div className='bg-[#f7f7f7] border rounded-md border-gray-300 w-full p-4 flex flex-col gap-2'>
			<Author authorInfo={post} />
			<p className='text-justify whitespace-pre-wrap'>
				{renderTextWithHashtags(post.text)}
			</p>

			{/* Repost if any */}
			{post.reposted && <Post post={post.resharedPost} />}

			{post.video.length > 0 &&
				post.video.map((media) => (
					<VideoPlayer media={media} key={media.url} />
				))}
			{post.image && post.image.length > 0 && (
				<img
					src={post.image[0].url}
					width={post.image[0].width}
					height={post.image[0].height}
				/>
			)}
			{shouldShowSocialBlock && (
				<div className='pt-4 px-4 flex justify-between'>
					{post.socialActivityCountsInsight &&
						Object.keys(post.socialActivityCountsInsight).length > 0 && (
							<Reactions data={post.socialActivityCountsInsight} />
						)}

					{post.url && post.url != '' && (
						<a
							href={post.url}
							className='text-blue-500 font-semibold cursor-pointer'
							target='__blank'>
							View on linkedIn
						</a>
					)}
				</div>
			)}
		</div>
	)
}

export default Post
