import React from 'react'
import {
	AppreciationIcon,
	EmpathyIcon,
	FunnyIcon,
	InterestIcon,
	LikeIcon,
	MaybeIcon,
	PraiseIcon,
} from '../icons'

const Reactions = ({ data }) => {
	const {
		likeCount,
		appreciationCount,
		empathyCount,
		InterestCount,
		praiseCount,
		funnyCount,
		maybeCount,
		totalReactionCount,
	} = data

	const reactions = [
		{
			name: 'like',
			count: likeCount,
			icon: <LikeIcon />,
			color: 'text-blue-600',
		},
		{
			name: 'appreciation',
			count: appreciationCount,
			icon: <AppreciationIcon />,
			color: 'text-green-500',
		},
		{
			name: 'empathy',
			count: empathyCount,
			icon: <EmpathyIcon />,
			color: 'text-purple-600',
		},
		{
			name: 'interest',
			count: InterestCount,
			icon: <InterestIcon />,
			color: 'text-yellow-500',
		},
		{
			name: 'praise',
			count: praiseCount,
			icon: <PraiseIcon />,
			color: 'text-pink-500',
		},
		{
			name: 'funny',
			count: funnyCount,
			icon: <FunnyIcon />,
			color: 'text-orange-400',
		},
		{
			name: 'maybe',
			count: maybeCount,
			icon: <MaybeIcon />,
			color: 'text-gray-400',
		},
	]

	const filteredReactions = reactions.filter((r) => r.count > 0)

	return (
		<div className='flex flex-wrap items-center space-x-4 text-sm text-gray-600 font-medium'>
			<div className='flex -space-x-1 items-center'>
				{filteredReactions.map(({ name, icon, color }) => (
					<div
						key={name}
						className={`flex items-center border-2 border-white rounded-full bg-white shadow-sm p-0.5 ${color} cursor-pointer`}
						title={`${name.charAt(0).toUpperCase() + name.slice(1)}`}>
						{icon}
					</div>
				))}
			</div>

			<div>
				<span className='font-semibold'>{totalReactionCount}</span> Reactions
			</div>
		</div>
	)
}

export default Reactions
