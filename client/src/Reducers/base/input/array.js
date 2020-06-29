const initialState = []
const ADD = (state, action) =>[...state, action.payload]
const REMOVE = (state, action) => state.filter(i => i !== action.payload)
const DEFAULT = (state, action) => state

const arraySwitch = target => ({
    [`${target}.ADD`]: ADD,
    [`${target}.REMOVE`]: REMOVE
})

export default target => (state = initialState, action) => {
    switch (action.type) {
        case `${target}.ADD`:
            return [...state, action.payload]
        case `${target}.REMOVE`:
            return state.filter(i => {return i !== action.payload})
        default:
            return state
    }
}