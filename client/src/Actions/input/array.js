export const add = target => value => ({
    type: `${target}.ADD`,
    payload: value
})
export const remove = target => value => ({
    type: `${target}.REMOVE`,
    payload: value
})


export default target => ({
    add:add(target),
    remove:remove(target)
})