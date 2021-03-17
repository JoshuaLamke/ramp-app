let initialState = [
    {name: "Cryptographic Hash Of Compiler", levels: [3,3,3,2,2], checked: false},
    {name: "Examination Of Access Logs​", levels: [2,2,2,3,3], checked: false},
    {name:"Comparing Accessors With Blacklist",levels: [3,2,2,1,1],checked: false},
    {name:"AI/ML Insider Threat Detection",levels: [3,3,3,2,3],checked: false},
    {name:"NLP Analysis Against Historical Data",levels: [2,2,2,3,3],checked: false},
    {name:"AI Design Interpretation",levels: [2,3,3,2,3],checked: false},
    {name:"Automated Schematic Repair",levels: [3,3,3,3,3],checked: false},
    {name:"Dual-Factor Enhanced Authentication ",levels: [3,3,3,2,2],checked: false},
    {name:"Automatic Report Flagging",levels: [3,3,3,2,3],checked: false},
    {name:"NLP Report Processing",levels: [2,3,3,3,3],checked: false},
    {name:"Repeat Simulation Testing",levels: [2,2,2,3,3],checked: false},
    {name:"Human Review Of Report",levels: [3,2,2,2,2],checked: false},
    {name:"Establish Physical Access Controls",levels: [3,3,2,3,2],checked: false},
    {name:"Track Approved Designers",levels: [3,3,3,2,2],checked: false},
    {name:"Multi-Factor Export Approval",levels: [3,3,2,3,2],checked: false},
    {name:"License-Controlled Access",levels: [3,3,2,3,2],checked: false},
    {name:"Timing Path Slack Report",levels: [3,3,3,3,2],checked: false},
    {name:"Simulate Power And Heat Dissipation",levels: [3,3,3,3,3],checked: false},
    {name:"Automated Integration Testing",levels: [2,3,3,3,3],checked: false},
    {name:"Multi-Level Approval Process For Modifications",levels: [3,2,2,2,3],checked: false},
    {name:"JTAG Lockout Records",levels: [3,3,3,3,3],checked: false},
    {name:"Automated review of BOM",levels: [3,3,3,3,3],checked: false},
    {name:"Specification Review - 3rd Party IP",levels: [3,3,3,2,2],checked: false},
    {name:"Schematic Review - 3rd Party IP",levels: [2,3,3,3,3],checked: false},
    {name:"Automated Review of Schematic",levels: [3,3,3,3,3],checked: false},
    {name:"GDS to Schematic Comparison Report - 3rd Party IP",levels: [3,3,3,2,2],checked: false},
    {name:"GDS to Schematic Comparison Report - SoC Integrator",levels: [3,3,3,2,2],checked: false},
    {name:"Timing Path Report - 3rd Party IP",levels: [3,3,3,3,2],checked: false},
    {name:"Timing Path Report - SoC Integrator",levels: [3,3,3,3,2],checked: false},
    {name:"Power Estimation Report - srd Party IP",levels: [3,3,3,3,3],checked: false},
    {name:"Power Estimation Report - SoC Integrator",levels: [3,3,3,3,3],checked: false},
    {name:"LEF Specification",levels: [3,3,3,3,3],checked: false},
    {name:"Specification Review - Foundation IP Provider",levels: [3,3,3,2,2],checked: false},
    {name:"Full GDS Logged",levels: [3,3,2,3,2],checked: false},
    {name:"Specification to Schematic Equivalency Report",levels: [3,3,3,3,3],checked: false},
    {name:"GDS to Schematic Comparison Report - Fdn IP V&V Team",levels: [3,3,3,2,2],checked: false},
    {name:"Node Analysis Report",levels: [2,3,3,3,3],checked: false},
    {name:"Schematic Review - Foundation IP Provider",levels: [3,3,2,2,1],checked: false},
    {name:"Anchor Point Simulation",levels: [3,3,3,3,2],checked: false},
    {name:"IP Provider Report",levels: [2,3,3,2,2],checked: false},
    {name:"Test Report",levels: [2,3,3,2,2],checked: false},
    {name:"CM-FAB-1",levels: [3,3,3,3,2],checked: false},
    {name:"CM-FAB-2",levels: [2,3,3,2,3],checked: false},
    {name:"CM-FAB-3",levels: [2,3,3,3,3],checked: false},
    {name:"CM-FAB-4",levels: [3,2,2,3,3],checked: false},
    {name:"CM-FAB-5",levels: [3,3,3,2,2],checked: false},
    {name:"CM-FAB-6",levels: [2,3,3,3,3],checked: false},
    {name:"CM-FAB-7",levels: [3,3,3,3,3],checked: false},
    {name:"CM-FAB-8",levels: [2,3,3,2,3],checked: false},
    {name:"CM-FAB-9",levels: [3,3,3,2,3],checked: false},
    {name:"CM-FAB-10",levels: [3,2,2,3,2],checked: false},
    {name:"CM-FAB-11",levels: [2,3,3,2,3],checked: false},
    {name:"CM-FAB-12",levels: [2,3,3,3,3],checked: false},
    {name:"CM-FAB-13",levels: [3,2,3,3,3],checked: false},
    {name:"CM-FAB-14",levels: [3,3,2,2,3],checked: false},
    {name:"CM-FAB-16",levels: [3,3,2,2,3],checked: false},
    {name:"CM-FAB-17",levels: [3,3,2,2,3],checked: false},
    {name:"CM-FAB-18",levels: [2,3,3,2,2],checked: false},
    {name:"CM-FAB-22",levels: [3,2,2,3,3],checked: false},
    {name:"CM-FAB-23",levels: [3,3,3,3,3],checked: false},
    {name:"CM-FAB-24",levels: [3,3,3,3,3],checked: false},
    {name:"CM-FAB-25",levels: [3,3,3,3,3],checked: false},
    {name:"CM-FAB-26",levels: [3,3,3,3,3],checked: false},
    {name:"CM-FAB-28",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-1",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-2",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-3",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-4",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-5",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-6",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-7",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-8",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-9",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-10",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-11",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-12",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-13",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-14",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-15",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-16",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-17",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-18",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-19",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-20",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-21",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-22",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-23",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-24",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-25",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-26",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-27",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-28",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-29",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-30",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-31",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-32",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-33",levels: [3,3,3,3,3],checked: false},
    {name:"CM-ASM-34",levels: [3,3,3,3,3],checked: false}
]
const mitigationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIAL_MITIGATION_STATE':
            return [...initialState];
        case 'TOGGLE_MITIGATION_CHECKED_TRUE':
            return state.map((item) => {
                if (item.name == action.payload.name) {
                    return {
                        ...item,
                        checked: true
                    }
                }
                return item;
              })
        case 'TOGGLE_MITIGATION_CHECKED_FALSE':
            return state.map((item) => {
                if (item.name == action.payload.name) {
                  return {
                      ...item,
                      checked: false
                  }
                }
                return item
              })
        default:
            return state;
    }
}

export default mitigationReducer;