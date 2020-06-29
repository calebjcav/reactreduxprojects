const initialState = false
const VALUE = (state, action) => action.payload.length
const VALID = (state, action) => action.payload
const DEFAULT = (state, action) => state

const validSwitch = target => ({
    [`${target}.VALUE`] : VALUE,
    [`${target}.VALID`] : VALID
})

export default target => (state = initialState, action) => {
    switch (action.type) {
        case `${target}.VALUE`:
            return action.payload.length
        case `${target}.VALID`:
            return action.payload
        default:
            return state
    }
}