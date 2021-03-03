const calculateMetric = (arr) => {
    return Math.round(100* Math.sqrt((Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2) + Math.pow(arr[3],2) + Math.pow(arr[4],2)) / 5))/ 100
}
let initialState = [
    {
        name: "Artifact Insertion (Software)",
        mitigationCount: 3,
        initialLevels: [1.50,1.50,1.40,1.30,1.20],
        levels: [1.50,1.50,1.40,1.30,1.20],
        total: calculateMetric([1.50,1.50,1.40,1.30,1.20]),
        type: 'design'
    },
    {
        name: "Compromise (Design data and transit to Fab)",
        mitigationCount: 2,
        initialLevels: [1.50,2.67,1.39,2.30,2.25],
        levels: [1.50,2.67,1.39,2.30,2.25],
        total: calculateMetric([1.50,2.67,1.39,2.30,2.25]),
        type: 'design'
    },
    {
        name: "Threat 3",
        mitigationCount: 2,
        initialLevels: [1.50,2.67,1.39,2.30,2.25],
        levels: [1.50,2.67,1.39,2.30,2.25],
        total: calculateMetric([1.50,2.67,1.39,2.30,2.25]),
        type: 'design'
    },
    {
        name: "Threat 4",
        mitigationCount: 2,
        initialLevels: [1.50,2.67,1.39,2.30,2.25],
        levels: [1.50,2.67,1.39,2.30,2.25],
        total: calculateMetric([1.50,2.67,1.39,2.30,2.25]),
        type: 'fabrication'
    },
    {
        name: "Threat 5",
        mitigationCount: 2,
        initialLevels: [1.50,2.67,1.39,2.30,2.25],
        levels: [1.50,2.67,1.39,2.30,2.25],
        total: calculateMetric([1.50,2.67,1.39,2.30,2.25]),
        type: 'fabrication'
    },
    {
        name: "Threat 6",
        mitigationCount: 2,
        initialLevels: [1.50,2.67,1.39,2.30,2.25],
        levels: [1.50,2.67,1.39,2.30,2.25],
        total: calculateMetric([1.50,2.67,1.39,2.30,2.25]),
        type: 'assembly'
    },
    {
        name: "Threat 7",
        mitigationCount: 2,
        initialLevels: [1.50,2.67,1.39,2.30,2.25],
        levels: [1.50,2.67,1.39,2.30,2.25],
        total: calculateMetric([1.50,2.67,1.39,2.30,2.25]),
        type: 'assembly'
    }
]
const threatReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIAL_THREAT_STATE': 
            return [...initialState];
        case 'CHANGE_THREAT_TOTAL':
            return state.map((item) => {
                if (item.name == action.payload.name) {
                    return {
                        ...item,
                        levels: action.payload.levels,
                        total: action.payload.total
                    }
                }
                return item;
              })
        default:
            return state;
    }
}

export default threatReducer;