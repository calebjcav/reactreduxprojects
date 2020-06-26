const initialState = -1
export default (state = initialState, action) => {
    switch (action.type) {
        case 'WATCH_MOVIE':
            return action.payload
        default:
            return state
    }
}