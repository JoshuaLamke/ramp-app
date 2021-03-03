export const initializeThreats = () => {
    return {
        type: 'INITIAL_THREAT_STATE'
    }
}
export const changeThreatTotal = (payload) => {
    return {
        type: 'CHANGE_THREAT_TOTAL',
        payload
    }
}

