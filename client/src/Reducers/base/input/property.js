const initialState = ''

export default (target,name) => (state = initialState, action) => {
    switch (action.type) {
        case `${target}.${name}`:
            return action.payload
        default:
            return state
    }
}