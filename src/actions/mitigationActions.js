export const initializeMitigations = (payload) => {
    return {
        type: 'INITIAL_MITIGATION_STATE',
        payload
    }
}
export const toggleCheckedTrue = (payload) => {
    return {
        type: 'TOGGLE_MITIGATION_CHECKED_TRUE',
        payload
    }
}
export const toggleCheckedFalse = (payload) => {
    return {
        type: 'TOGGLE_MITIGATION_CHECKED_FALSE',
        payload
    }
}