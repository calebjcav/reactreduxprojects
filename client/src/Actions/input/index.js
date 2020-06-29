import property from './property'
import array from './array'

export default target => ({
    value:property(target,'VALUE'),
    valid:property(target,'VALID'),
    type:property(target,'TYPE'),
    classnames:array(target)
})