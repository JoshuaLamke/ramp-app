export const initializeThreats = (payload) => {
    return {
        type: 'INITIAL_THREAT_STATE',
        payload
    }
}
export const changeThreatTotal = (payload) => {
    return {
        type: 'CHANGE_THREAT_TOTAL',
        payload
    }
}
