export const required = (value) => {
    return value ? null : 'Value required'
}

export const lengthRestrictionCreator = (length) => (value) => {
    return value && value.length > length ?
        `Max length is ${length} symbols` : null
}

export const lengthRestriction10 = (value) => {
    return value && value.length > 10 ?
        `Max length is ${10} symbols` : null
}