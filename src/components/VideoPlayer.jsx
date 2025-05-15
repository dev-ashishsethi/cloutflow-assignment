import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { PlayIcon } from '../icons'

const VideoPlayer = ({ media }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [isBuffering, setIsBuffering] = useState(true)

	const handleError = (e) => {
		console.error('Video playback error:', e)
		setHasError(true)
	}

	return (
		<div className='w-full flex justify-center p-4'>
			<div className='relative w-[400px] h-[225px] rounded-2xl overflow-hidden shadow-lg group transition-all duration-300'>
				{/* Error Message */}
				{hasError && (
					<div className='absolute inset-0 flex items-center justify-center bg-black text-white text-center text-sm font-medium p-4'>
						Something went wrong. We are unable to play this video for you.
					</div>
				)}

				{/* Poster */}
				{!isPlaying && !hasError && (
					<div
						className='absolute inset-0 cursor-pointer transition-opacity duration-300 hover:opacity-90'
						onClick={() => setIsPlaying(true)}>
						<img
							src={media.poster}
							alt='Video thumbnail'
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 flex items-center justify-center'>
							<PlayIcon height={60} width={60} color='white' />
						</div>
					</div>
				)}

				{/* Player */}
				{isPlaying && !hasError && (
					<>
						{isBuffering && (
							<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm font-medium'>
								Loading video...
							</div>
						)}
						<ReactPlayer
							url={media.url}
							controls
							playing
							width='100%'
							height='100%'
							onError={handleError}
							onReady={() => setIsBuffering(false)}
							onStart={() => setIsBuffering(false)}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								borderRadius: '16px',
								overflow: 'hidden',
							}}
							config={{
								youtube: {
									playerVars: { showinfo: 1 },
								},
							}}
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default VideoPlayer
