let initialState = [
    {title:'Marginal PICA Model Value', date:'03/10/2021 at 23:26:10', isThreat: false},
    {title:'Artifact Insertion Detected', date:'03/10/2021 at 22:45:31', isThreat: true},
    {title: 'Extraneous 3rd Party IP Check',date:'03/10/2021 at 20:05:08',isThreat: true}
]
const alertsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIAL_ALERTS_STATE':
            return [...initialState];
        default:
            return state;
    }
}

export default alertsReducer;