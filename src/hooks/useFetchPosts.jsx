// import { useEffect } from 'react'

import { useEffect, useReducer } from 'react'
import { postsReducer } from '../reducers/postsReducer'

const initialState = {
	posts: [],
	loading: false,
	error: null,
}

export function useFetchPosts() {
	const [posts, dispatch] = useReducer(postsReducer, initialState)

	async function fetchPosts() {
		dispatch({ type: 'FETCH_INIT' })
		try {
			const response = await fetch(
				'https://linkedin-api8.p.rapidapi.com/search-posts',
				{
					method: 'POST',
					headers: {
						'x-rapidapi-host': 'linkedin-api8.p.rapidapi.com',
						'Content-Type': 'application/json',
						'x-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
					},
					body: JSON.stringify({
						keyword: 'microsoft',
						sortBy: 'date_posted',
						datePosted: '',
						page: 1,
						contentType: '',
						fromMember: [
							'ACoAAAEkwwAB9KEc2TrQgOLEQ-vzRyZeCDyc6DQ',
							'ACoAAANuWM8BtmA18VYdgqPtIWt6GhBCTDXToV4',
							'ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc',
						],
						fromCompany: [1441, 1035],
						mentionsMember: [
							'ACoAAAEkwwAB9KEc2TrQgOLEQ-vzRyZeCDyc6DQ',
							'ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc',
						],
						mentionsOrganization: [1441, 1035],
						authorIndustry: [96, 4],
						authorCompany: [1035],
						authorTitle: '',
					}),
				},
			)
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			const res = await response.json()
			dispatch({ type: 'FETCH_SUCCESS', payload: res })
		} catch (error) {
			dispatch({ type: 'FETCH_FAILURE', payload: error.message })
		}
	}
	useEffect(() => {
		fetchPosts()
	}, [])
	return posts
}
