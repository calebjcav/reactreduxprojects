const initialState = []
export default (actionName) => (state = initialState, action) => {
    switch (action.type) {
        case actionName:
            return action.payload
        default:
            return state
    }
}