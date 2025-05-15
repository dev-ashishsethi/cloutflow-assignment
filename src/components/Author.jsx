import React from 'react'
import { Account } from '../icons'
import { convertToIST } from '../utils'

const Author = ({ authorInfo }) => {
	return (
		<div className='flex gap-2 items-center'>
			{!authorInfo.company || !Object.keys(authorInfo.company).length > 0 ? (
				<>
					{authorInfo.author.profilePictures ? (
						<img
							src={authorInfo.author.profilePictures[0].url}
							className='rounded-full w-14 h-14'
						/>
					) : (
						<Account />
					)}

					<div>
						<p className='text-gray-800 font-semibold'>
							<a href={authorInfo.author.url} target='__blank'>
								{authorInfo.author.fullName ??
									authorInfo.author.firstName +
										' ' +
										authorInfo.author.lastName}
							</a>
						</p>
						{authorInfo.author.headline && (
							<p className='text-gray-500 text-sm'>
								{authorInfo.author.headline}
							</p>
						)}
						<div className='flex gap-2 items-center'>
							{authorInfo.postedAt && (
								<p className='text-gray-500 text-sm'>{authorInfo.postedAt}</p>
							)}
							{authorInfo.postedDate && (
								<p className='text-gray-500 text-sm'>
									Posted At: {convertToIST(authorInfo.postedDate)}
								</p>
							)}
						</div>
					</div>
				</>
			) : (
				<>
					{authorInfo.company.imageUrl ? (
						<img
							src={authorInfo.company.imageUrl}
							className='rounded-full w-14 h-14'
						/>
					) : (
						<Account />
					)}

					<div>
						<a href={authorInfo.company.url} target='__blank'>
							<p className='text-gray-800 font-semibold'>
								{authorInfo.company.name}
							</p>
						</a>
					</div>
				</>
			)}
		</div>
	)
}

export default Author
