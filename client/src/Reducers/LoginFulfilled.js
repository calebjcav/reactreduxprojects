const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_FULFILLED':
            return action.payload
        default:
            return state
    }
}