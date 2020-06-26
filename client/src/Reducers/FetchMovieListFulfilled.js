const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIELIST_FULFILLED':
            return action.payload.files
        default:
            return state
    }
}