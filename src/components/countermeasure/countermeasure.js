import React, {useEffect, useState} from 'react';
import './countermeasure.css'
import ThreatColor from '../threat-color/threat-color';
import {toggleCheckedTrue,toggleCheckedFalse} from '../../actions/mitigationActions'
import {useDispatch, useSelector} from 'react-redux'
let Countermeasure = ({ name, levels, select, deselect}) => {
    let mitigations = useSelector(state => state.mitigationReducer)
    const dispatch = useDispatch()
    let selectedOrNot;
    let i;
    for(i = 0; i < mitigations.length; i++) {
        if(mitigations[i].name == name) {
            selectedOrNot = mitigations[i].checked;
            break;
        }
    }
    const [selected, setSelected] = useState(selectedOrNot);
    useEffect(() => {
        setSelected(mitigations[i].checked);
    },[mitigations])

    return (
        <div className="container-fluid" id="countermeasure-container">
            <div id="mitigation-info">
                <div className=" d-flex justify-content-center align-items-center flex-wrap">
                    <input id="checkbox" onChange={() => {
                        if(selected) {
                            dispatch(toggleCheckedFalse({
                                name: name,
                                levels,
                                checked: false
                            }));
                            deselect();
                        }
                        else {
                            dispatch(toggleCheckedTrue({
                                name: name,
                                levels,
                                checked: true
                            }));
                            select();
                        }
                    }} checked={selected} type="checkbox" className="mr-auto btn btn-outline-success" value="checkbox" />
                    <h4 className="mr-auto">{name}</h4>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                    <div className="d-flex flex-column align-items-center">
                        <h6>Attack Access</h6>
                        <ThreatColor level={levels[0]}/>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <h6>Technology</h6>
                        <ThreatColor level={levels[1]}/>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <h6>Investment</h6>
                        <ThreatColor level={levels[2]}/>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <h6>Value of Effect</h6>
                        <ThreatColor level={levels[3]}/>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <h6>Targetability</h6>
                        <ThreatColor level={levels[4]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countermeasure;