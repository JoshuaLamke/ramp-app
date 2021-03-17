let initialState = [
    {title:'Marginal PICA Model Value', date:'03/10/2021 at 23:26:10', isThreat: false},
    {title:'Artifact Insertion Detected', date:'03/10/2021 at 22:45:31', isThreat: true},
    {title: 'Extraneous 3rd Party IP Check',date:'03/10/2021 at 20:05:08',isThreat: true},
    {title: 'Incoming Material Compromise',date:'02/7/2021 at 12:31:23',isThreat: true},
    {title: 'Compromise Of MES - Manufacturing Engineering',date:'02/01/21 at 10:45:58',isThreat: true},
    {title: 'Compromise Of Data Prep Software',date:'01/21/2021 at 21:05:47',isThreat: true},
    {title: 'Compromise Of Mask Quality',date:'01/13/2021 at 19:07:13',isThreat: true},
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