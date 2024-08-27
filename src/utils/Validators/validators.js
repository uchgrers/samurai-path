export const required = (value) => {
    return value ? null : 'Value required'
}

export const maxLengthRestrictionCreator = (length) => (value) => {
    return value && value.length > length ?
        `Max length is ${length} symbols` : null
}

export const minLengthRestrictionCreator = (length) => (value) => {
    return value && value.length < length ?
        `Min length is ${length} symbols` : null
}