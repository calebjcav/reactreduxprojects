export default (target,name) => (value) => ({
    type: `${target}.${name}`,
    payload: value
})