export function postsReducer(state, action) {
	switch (action.type) {
		case 'FETCH_INIT':
			return { ...state, loading: true, error: null }
		case 'FETCH_SUCCESS':
			return { ...state, loading: false, posts: action.payload }
		case 'FETCH_FAILURE':
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
