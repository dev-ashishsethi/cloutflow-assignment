import React, { useEffect, useState } from 'react'
import Timeline from './Timeline'
import Filter from './Filter'
import Navbar from './Navbar'
// import { postsData } from './mockData'
import { useFetchPosts } from '../hooks/useFetchPosts'

const Dashboard = () => {
	const postsData = useFetchPosts()

	const [filteredPosts, setFilteredPosts] = useState([])
	useEffect(() => {
		if (postsData?.posts?.data?.items) {
			setFilteredPosts(postsData.posts.data.items)
		}
	}, [postsData])

	return (
		<div className='min-h-screen bg-gray-50'>
			<Navbar
				postsData={postsData}
				filteredPosts={filteredPosts}
				setFilteredPosts={setFilteredPosts}
			/>
			<div className='max-w-7xl mx-auto py-6 grid grid-cols-1 md:grid-cols-4 gap-6'>
				<div className='md:col-span-1 '>
					<Filter
						postsData={postsData}
						filteredPosts={filteredPosts}
						setFilteredPosts={setFilteredPosts}
					/>
				</div>
				<div className='md:col-span-3'>
					<Timeline postsData={postsData} filteredPosts={filteredPosts} />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
