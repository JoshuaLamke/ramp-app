import React, {useState, useEffect} from 'react';
import './threat-description.css';
import ThreatColor from '../threat-color/threat-color';
import Countermeasure from '../countermeasure/countermeasure';
import {toggleCheckedFalse,toggleCheckedTrue} from '../../actions/mitigationActions'
import {changeThreatTotal} from '../../actions/threatActions'
import {useSelector,useDispatch} from 'react-redux'
let Threat = ({levels_, mitigationNames, numOfMitigations, threatName, mitigationLevels, type}) => {
    let dispatch = useDispatch()
    let mitigations = useSelector(state => state.mitigationReducer)
    let mitigationsForThreat = [];
    
    for(let j = 0; j < mitigations.length; j++) {
        for(let i = 0; i < mitigationNames.length; i++) {
            if(mitigations[j].name == mitigationNames[i]){
                mitigationsForThreat.push(mitigations[j])
            }
        }
    }
    const PROPSLEVELS = levels_;
    const [qaMetric, setQaMetric] = useState(0);
    const [visible, setVisible] = useState(false);
    const [buttonSymbol, setButtonSymbol] = useState('+');
    const [levels, setLevels] = useState(levels_);
    const [selected, setSelected] = useState(true);

    useEffect(() => {
        let arr = PROPSLEVELS.map(e => e);
        console.log("initial: " + arr)
        for(let i = 0; i < mitigationsForThreat.length; i++) {
            for(let j = 0; j < 5; j++) {
                if(arr[j] < mitigationsForThreat[i].levels[j] && mitigationsForThreat[i].checked) {
                    arr[j] = mitigationsForThreat[i].levels[j];
                } 
            }
        }
        console.log(arr)
        setQaMetric(Math.round(100* Math.sqrt((Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2) + Math.pow(arr[3],2) + Math.pow(arr[4],2)) / 5))/ 100)
        dispatch(changeThreatTotal({
            name: threatName,
            total: Math.round(100* Math.sqrt((Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2) + Math.pow(arr[3],2) + Math.pow(arr[4],2)) / 5))/ 100,
            levels: arr
        }))
        setLevels(arr)
    },[selected])

    return (
        <div className="container-fluid d-flex flex-column pt-2">
            <div className="d-flex container" id="threat-container">
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn d-flex justify-content-center align-items-center" style={{'fontSize': '25px'}}
                    onClick={
                        () => {
                            setVisible(!visible);
                            if(!visible) {
                                setButtonSymbol('-');
                            }
                            else {
                                setButtonSymbol('+');
                            }
                        }
                    }
                    >{buttonSymbol}</button>
                    <ThreatColor level={qaMetric}/>
                </div>
                <div  style={{'width': '100%'}} className="d-flex justify-content-start align-items-center ml-2">
                    <h6>{threatName}</h6>
                </div>
                <div style={{'position': 'relative','width': '100%'}}>
                    <h6 style={{'position': 'absolute', 'right': '100px', 'top': '12px'}}>{numOfMitigations}</h6>
                </div>
            </div>
            {visible ? 
            <div className="container">
                <div className="container-fluid d-flex flex-column" style={{'background': 'rgb(184, 184, 184)', 'boxShadow': '5px 5px 5px rgb(17, 0, 112)'}}>
                    <h4 className="align-self-center">Current Score</h4>
                    <div className="d-flex justify-content-around flex-wrap" style={{'padding': '5px','borderTop': '3px solid rgb(68, 107, 235)'}}>
                        <div className="d-flex flex-column align-items-center">
                            <h6>Attack Access</h6>
                            <ThreatColor level={levels[0]}/>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h6>Detectability</h6>
                            <ThreatColor level={levels[1]}/>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h6>Investment</h6>
                            <ThreatColor level={levels[2]}/>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h6>Targetability</h6>
                            <ThreatColor level={levels[3]}/>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h6>Technology</h6>
                            <ThreatColor level={levels[4]}/>
                        </div>
                    </div>
                </div>
                {mitigationNames.map((name, index) => 
                <div className="d-flex flex-column align-items-center">
                    <Countermeasure name={name} key={index} select={
                        () => {
                            dispatch(toggleCheckedTrue({
                                name: name,
                                levels: mitigationLevels[index],
                                checked: true
                            }));
                            setSelected(!selected);
                        }
                    } deselect= {
                        () => {
                            dispatch(toggleCheckedFalse({
                                name: name,
                                levels: mitigationLevels[index],
                                checked: false
                            }));
                            setSelected(!selected);
                        }
                    }
                    levels={mitigationLevels[index]} selectedOrNot={mitigationsForThreat[index].checked}/>
                </div>
                )}
            </div> 
            : ''}
        </div>
        
    )
}

export default Threat;