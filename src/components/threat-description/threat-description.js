import React, {useState, useEffect} from 'react';
import './threat-description.css';
import ThreatColor from '../threat-color/threat-color';
import Countermeasure from '../countermeasure/countermeasure';
let Threat = (props) => {
    const PROPSLEVELS = props.levels;
    const [qaMetric, setQaMetric] = useState(Math.round(100* Math.cbrt(props.levels[0] * (props.levels[1] + props.levels[2] + props.levels[3]) / props.levels[4])) / 100);
    const [visible, setVisible] = useState(false);
    const [buttonSymbol, setButtonSymbol] = useState('+');
    const [levels, setLevels] = useState(props.levels);
    
    let arr = []
    for(let i = 0; i < props.mitigationNames.length; i++) {
        arr.push({
            title: props.mitigationNames[i],
            selected: false,
            levels: props.mitigationLevels[props.mitigationNames[i]]
        })
    }
    const [select, setSelected] = useState(arr);
    useEffect(() => {
        setLevels([...PROPSLEVELS]);
        let arr = [...PROPSLEVELS];
        for(let i = 0; i < select.length; i++) {
            if(select[i].selected) {
                for(let j = 0; j < 5; j ++) {
                    arr[j] = Math.max(arr[j],select[i].levels[j]);
                }
            }
        }
        console.log('arr after loop:', arr)
        console.log('props.levels arr:', PROPSLEVELS)
        setLevels(arr);
        setQaMetric(Math.round(100* Math.cbrt(arr[0] * (arr[1] + arr[2] + arr[3]) / arr[4])) / 100);
        console.log(qaMetric);
    },[select,buttonSymbol])
    if(!props.mitigationNames) {
        return (<div></div>)
    }

    if(props.numOfMitigations != props.mitigationNames.length) {
        return (<div></div>)
    }
    return (
        <div className="container-fluid d-flex flex-column">
            <div className="d-flex container mt-2" id="threat-container">
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn d-flex justify-content-center align-items-center" style={{'fontSize': '25px'}}
                    onClick={
                        (e) => {
                            e.preventDefault();
                            if(props.mitigationNames === undefined) {
                                return;
                            }
                            else if(props.numOfMitigations == 0 || props.mitigationNames.length == 0) {
                                return;
                            }
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
                <div  style={{'width': '100%'}} className="d-flex justify-content-start align-items-center ml-5 mr-5">
                    <h6>{props.threatName}</h6>
                </div>
                <div style={{'position': 'relative','width': '100%'}}>
                    <h6 style={{'position': 'absolute', 'right': '100px', 'top': '12px'}}>{props.numOfMitigations}</h6>
                </div>
            </div>
            {visible && props.mitigationNames.length == props.numOfMitigations ? 
            <div className="container">
                <div className="container-fluid d-flex flex-column pt-3 mt-3" style={{'background': 'rgb(184, 184, 184)', 'boxShadow': '5px 5px 5px rgb(17, 0, 112)'}}>
                    <h4 className="align-self-center">Current Score</h4>
                    <div className="d-flex justify-content-around" style={{'padding': '5px','borderTop': '3px solid rgb(68, 107, 235)'}}>
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
                {props.mitigationNames.map((name, index) => 
                <div className="d-flex flex-column align-items-center pt-5">
                    <Countermeasure threatTitle={props.threatName} select={() => {
                        let i;
                        for(i = 0; i < select.length; i++) {
                            if(select[i].title == name) {
                                break;
                            }
                        }
                        let arr = [...select]
                        arr[i] = {
                            ...select[i],
                            selected: true
                        };
                        setSelected(arr);
                    }} 
                    deselect={
                        () => {
                            let i;
                            for(i = 0; i < select.length; i++) {
                                if(select[i].title == name) {
                                    break;
                                }
                            }
                            let arr = [...select]
                            arr[i] = {
                                ...select[i],
                                selected: false
                            };
                            setSelected(arr);
                        }}
                name={name} key={name} selector={select[index].selected} levels={props.mitigationLevels[name]}/>
                </div>
                )}
            </div> 
            : ''}
        </div>
        
    )
}

export default Threat;