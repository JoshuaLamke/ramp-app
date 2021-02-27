import React from 'react'
import {useDispatch} from 'react-redux'
import {initializeThreats} from '../../actions/threatActions'
import {initializeMitigations} from '../../actions/mitigationActions'
let Initializer = () => {
    let dispatch = useDispatch()
    const calculateMetric = (arr) => {
        return Math.round(100* Math.sqrt((Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2) + Math.pow(arr[3],2) + Math.pow(arr[4],2)) / 5))/ 100
    }
    let threats = [
        {
            name: "Artifact Insertion (Software)",
            mitigationCount: 3,
            levels: [1.50,1.50,1.40,1.30,1.20],
            total: calculateMetric([1.50,1.50,1.40,1.30,1.20])
        },
        {
            name: "Compromise (Design data and transit to Fab)",
            mitigationCount: 2,
            levels: [1.50,2.67,1.39,2.30,2.25],
            total: calculateMetric([1.50,2.67,1.39,2.30,2.25])
        },
        {
            name: "Threat 3",
            mitigationCount: 2,
            levels: [1.50,2.67,1.39,2.30,2.25],
            total: calculateMetric([1.50,2.67,1.39,2.30,2.25])
        },
        {
            name: "Threat 4",
            mitigationCount: 2,
            levels: [1.50,2.67,1.39,2.30,2.25],
            total: calculateMetric([1.50,2.67,1.39,2.30,2.25])
        },
        {
            name: "Threat 5",
            mitigationCount: 2,
            levels: [1.50,2.67,1.39,2.30,2.25],
            total: calculateMetric([1.50,2.67,1.39,2.30,2.25])
        },
        {
            name: "Threat 6",
            mitigationCount: 2,
            levels: [1.50,2.67,1.39,2.30,2.25],
            total: calculateMetric([1.50,2.67,1.39,2.30,2.25])
        },
        {
            name: "Threat 7",
            mitigationCount: 2,
            levels: [1.50,2.67,1.39,2.30,2.25],
            total: calculateMetric([1.50,2.67,1.39,2.30,2.25])
        }
    ]
    let mitigations = [
        {name: "Access & duration (Design database log) using TSS internal metrics​", levels: [1.50,1.50,1.50,3.00,1.00], checked: false},
        {name: "Access & duration using Machine Learning Insider Threat Detection​", levels: [1.00,1.25,1.50,1.75,2.00], checked: false},
        {name: "Mitigation 3", levels: [3.00,3.00,3.00,3.00,1.00], checked: false},
        {name: "Mitigation 4", levels: [2.50,2.78,2.00,3.00,2.67], checked: false}
    ]
      
    dispatch(initializeThreats(threats));
    dispatch(initializeMitigations(mitigations));
    return (
        <div></div>
    );
}
export default Initializer;