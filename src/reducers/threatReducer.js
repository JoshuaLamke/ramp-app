const calculateMetric = (arr) => {
    return Math.round(100* Math.sqrt((Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2) + Math.pow(arr[3],2) + Math.pow(arr[4],2)) / 5))/ 100
}
let initialState = [
    {
        name: "Artifact Insertion - Architecture",
        initialLevels: [2,2,1,1,1],
        levels: [2,2,1,1,1],
        total: calculateMetric([2,2,1,1,1]),
        mitigations: [2,3,4],
        type: 'design',
        id: 't1'
    },
    {
        name: "Artifact Insertion - Synthesis",
        initialLevels: [2,3,3,2,2],
        levels: [2,3,3,2,2],
        total: calculateMetric([2,3,3,2,2]),
        mitigations: [5,6],
        type: 'design',
        id: 't2'
    },
    {
        name: "Artifact Insertion - Physical V&V",
        initialLevels: [1,3,3,2,2],
        levels: [1,3,3,2,2],
        total: calculateMetric([1,3,3,2,2]),
        mitigations: [7,8,9],
        type: 'design',
        id: 't3'
    },
    {
        name: "Artifact Insertion - IO",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'design',
        mitigations: [3,10,11],
        id: 't4'
    },
    {
        name: "Theft Of Design - Architecture",
        initialLevels: [2,2,1,3,2],
        levels: [2,2,1,3,2],
        total: calculateMetric([2,2,1,3,2]),
        type: 'design',
        mitigations: [12,13],
        id: 't5'
    },
    {
        name: "Theft Of Design - RTL",
        initialLevels: [2,2,1,3,2],
        levels: [2,2,1,3,2],
        total: calculateMetric([2,2,1,3,2]),
        type: 'design',
        mitigations: [14],
        id: 't6'
    },
    {
        name: "Theft Of Design - GDS",
        initialLevels: [2,2,1,3,2],
        levels: [2,2,1,3,2],
        total: calculateMetric([2,2,1,3,2]),
        type: 'design',
        mitigations: [15],
        id: 't7'
    },
    {
        name: "Compromise of QoR - Module Design",
        initialLevels: [2,3,3,2,2],
        levels: [2,3,3,2,2],
        total: calculateMetric([2,3,3,2,2]),
        type: 'design',
        mitigations: [16,17],
        id: 't8'
    },
    {
        name: "Artifact Insertion - Integration",
        initialLevels: [1,2,2,2,3],
        levels: [1,2,2,2,3],
        total: calculateMetric([1,2,2,2,3]),
        type: 'design',
        mitigations: [18,19],
        id: 't9'
    },
    {
        name: "Unauthorized Access Through Test Ports",
        initialLevels: [2,2,2,1,1],
        levels: [2,2,2,1,1],
        total: calculateMetric([2,2,2,1,1]),
        type: 'design',
        mitigations: [20],
        id: 't10'
    },
    {
        name: "Artifact Insertion - Design Bill of Materials",
        initialLevels: [2,2,2,3,2],
        levels: [2,2,2,3,2],
        total: calculateMetric([2,2,2,3,2]),
        type: 'design',
        mitigations: [21],
        id: 't11'
    },
    {
        name: "Artifact Insertion - 3rd Party IP",
        initialLevels: [2,3,2,2,2],
        levels: [2,3,2,2,2],
        total: calculateMetric([2,3,2,2,2]),
        type: 'design',
        mitigations: [22,23,24,25,26],
        id: 't12'
    },
    {
        name: "Compromise Of QoR - 3rd Party IP",
        initialLevels: [2,3,2,2,2],
        levels: [2,3,2,2,2],
        total: calculateMetric([2,3,2,2,2]),
        type: 'design',
        mitigations: [27,28,29,30,31],
        id: 't13'
    },
    {
        name: "Artifact Insertion - Logic Library",
        initialLevels: [2,3,2,2,2],
        levels: [2,3,2,2,2],
        total: calculateMetric([2,3,2,2,2]),
        type: 'design',
        mitigations: [32,33,34,35,36],
        id: 't14'
    },
    {
        name: "Compromise Of QoR - GPIO",
        initialLevels: [2,2,1,2,1],
        levels: [2,2,1,2,1],
        total: calculateMetric([2,2,1,2,1]),
        type: 'design',
        mitigations: [32,37,38,33,35],
        id: 't15'
    },
    {
        name: "Artifact Insertion - Memory Compiler",
        initialLevels: [3,3,2,2,2],
        levels: [3,3,2,2,2],
        total: calculateMetric([3,3,2,2,2]),
        type: 'design',
        mitigations: [39,40,0],
        id: 't16'
    },
    {
        name: "Tampered Compiler Uploaded To RAMP",
        initialLevels: [2,2,1,3,2],
        levels: [3,3,2,2,2],
        total: calculateMetric([3,3,2,2,2]),
        type: 'design',
        mitigations: [1],
        id: 't17'
    },
    {
        name: "Artifact Insertion - Mask",
        initialLevels: [2,3,3,3,2],
        levels: [2,3,3,3,2],
        total: calculateMetric([2,3,3,3,2]),
        type: 'fabrication',
        mitigations: [41,42,43],
        id: 't18'
    },
    {
        name: "Theft Of Design - Mask",
        initialLevels: [2,1,1,2,2],
        levels: [2,1,1,2,2],
        total: calculateMetric([2,1,1,2,2]),
        type: 'fabrication',
        mitigations: [44],
        id: 't19'
    },
    {
        name: "Duplication Of Masks",
        initialLevels: [1,1,1,2,2],
        levels: [1,1,1,2,2],
        total: calculateMetric([1,1,1,2,2]),
        type: 'fabrication',
        mitigations: [45,46],
        id: 't20'
    },
    {
        name: "Compromise Of Mask Quality",
        initialLevels: [1,1,1,3,3],
        levels: [1,1,1,3,3],
        total: calculateMetric([1,1,1,3,3]),
        type: 'fabrication',
        mitigations: [47],
        id: 't21'
    },
    {
        name: "Artifact Insertion - Foundry",
        initialLevels: [1,3,3,2,3],
        levels: [1,3,3,2,3],
        total: calculateMetric([1,3,3,2,3]),
        type: 'fabrication',
        mitigations: [48,49],
        id: 't22'
    },
    {
        name: "Theft Of Design - Foundry",
        initialLevels: [2,1,1,3,2],
        levels: [2,1,1,3,2],
        total: calculateMetric([2,1,1,3,2]),
        type: 'fabrication',
        mitigations: [50],
        id: 't23'
    },
    {
        name: "Compromise Of Data Prep Software",
        initialLevels: [2,3,3,2,2],
        levels: [2,3,3,2,2],
        total: calculateMetric([2,3,3,2,2]),
        type: 'fabrication',
        mitigations: [51],
        id: 't24'
    },
    {
        name: "Process Compromise (reliability)",
        initialLevels: [2,2,2,2,3],
        levels: [2,2,2,2,3],
        total: calculateMetric([2,2,2,2,3]),
        type: 'fabrication',
        mitigations: [52],
        id: 't25'
    },
    {
        name: "Process Compromise (performance)",
        initialLevels: [2,1,1,3,2],
        levels: [2,1,1,3,2],
        total: calculateMetric([2,1,1,3,2]),
        type: 'fabrication',
        mitigations: [53],
        id: 't26'
    },
    {
        name: "Duplicate Mask Use",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'fabrication',
        mitigations: [54],
        id: 't27'
    },
    {
        name: "Mask Theft",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'fabrication',
        mitigations: [55],
        id: 't28'
    },
    {
        name: "Wafer Theft",
        initialLevels: [2,1,1,2,2],
        levels: [2,1,1,2,2],
        total: calculateMetric([2,1,1,2,2]),
        type: 'fabrication',
        mitigations: [56,57],
        id: 't29'
    },
    {
        name: "Incoming Material Compromise - Foundry",
        initialLevels: [2,3,3,2,3],
        levels: [2,3,3,2,3],
        total: calculateMetric([2,3,3,2,3]),
        type: 'fabrication',
        mitigations: [58],
        id: 't30'
    },
    {
        name: "QoR Of Wafer Processing",
        initialLevels: [2,2,2,3,2],
        levels: [2,2,2,3,2],
        total: calculateMetric([2,2,2,3,2]),
        type: 'fabrication',
        mitigations: [59],
        id: 't31'
    },
    {
        name: "Excursions In The Fab",
        initialLevels: [2,2,2,3,3],
        levels: [2,2,2,3,3],
        total: calculateMetric([2,2,2,3,3]),
        type: 'fabrication',
        mitigations: [60],
        id: 't32'
    },
    {
        name: "Compromise Of Reliability",
        initialLevels: [2,3,2,2,3],
        levels: [2,3,2,2,3],
        total: calculateMetric([2,3,2,2,3]),
        type: 'fabrication',
        mitigations: [61],
        id: 't33'
    },
    {
        name: "Compromise Of MES - Manufacturing Engineering",
        initialLevels: [2,2,2,2,3],
        levels: [2,2,2,2,3],
        total: calculateMetric([2,2,2,2,3]),
        type: 'fabrication',
        mitigations: [62],
        id: 't34'
    },
    {
        name: "Compromise Of MES - Incoming Material",
        initialLevels: [2,2,2,3,3],
        levels: [2,2,2,3,3],
        total: calculateMetric([2,2,2,3,3]),
        type: 'fabrication',
        mitigations: [63],
        id: 't35'
    },
    {
        name: "Overproduction",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [64],
        id: 't36'
    },
    {
        name: "Component Insertion",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [65],
        id: 't37'
    },
    {
        name: "Interconnect Compromise",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [66,67],
        id: 't38'
    },
    {
        name: "Theft Of Design - Substrate Design",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [68],
        id: 't39'
    },
    {
        name: "Compromise Of Assembly Process",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [69],
        id: 't40'
    },
    {
        name: "Process Compromise",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [70],
        id: 't41'
    },
    {
        name: "Incoming Material Compromise",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [71],
        id: 't42'
    },
    {
        name: "Excusrions In The Fab - Final Shipment",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [72],
        id: 't43'
    },
    {
        name: "QoR Of Initial Packaged Product",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [73],
        id: 't44'
    },
    {
        name: "Requirement for post wafer fab tracking",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [74],
        id: 't45'
    },
    {
        name: "Compromised Operation - Receiving Wrong Substrate",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [76],
        id: 't46'
    },
    {
        name: "Compromised Operation - Receiving Wrong Die",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [75],
        id: 't47'
    },
    {
        name: "Malicious component insertion",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [77],
        id: 't48'
    },
    {
        name: "Removal of test program components",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [78],
        id: 't49'
    },
    {
        name: "Incorrect use of test program",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [79],
        id: 't50'
    },
    {
        name: "Theft of test parameters - Test",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [80,81],
        id: 't51'
    },
    {
        name: "Theft of test data - Test",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [82],
        id: 't52'
    },
    {
        name: "Incomplete test coverage",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [83],
        id: 't53'
    },
    {
        name: "Compromise of design data while shipped to fab",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [84],
        id: 't54'
    },
    {
        name: "Theft of design data while shipped to fab",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [85],
        id: 't55'
    },
    {
        name: "Compromise of design data while shipped to mask shop",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [86],
        id: 't56'
    },
    {
        name: "Theft of design data while shipped  to mask shop",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [87],
        id: 't57'
    },
    {
        name: "Theft of wafers while being shipped  to assembly house",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [88],
        id: 't58'
    },
    {
        name: "Substitution of packages while being shipped to test house",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [89],
        id: 't59'
    },
    {
        name: "Theft of packages while being shipped to test house",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [90],
        id: 't60'
    },
    {
        name: "Substitution of tested packages while being shipped to personalization",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [91],
        id: 't61'
    },
    {
        name: "Theft of tested packages while being shipped to personalization",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [92],
        id: 't62'
    },
    {
        name: "Modification of personalization program components",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [93],
        id: 't63'
    },
    {
        name: "Incorrect use of test program to personalize",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [94],
        id: 't64'
    },
    {
        name: "Theft of test parameters - Personalization",
        initialLevels: [2,2,2,2,2],
        levels: [2,2,2,2,2],
        total: calculateMetric([2,2,2,2,2]),
        type: 'assembly',
        mitigations: [95,96,97],
        id: 't65'
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