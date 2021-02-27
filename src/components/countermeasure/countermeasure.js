import React, {useEffect, useState} from 'react';
import './countermeasure.css'
import ThreatColor from '../threat-color/threat-color';
import {toggleCheckedTrue,toggleCheckedFalse} from '../../actions/mitigationActions'
import {useDispatch, useSelector} from 'react-redux'
let Countermeasure = ({ name, levels, select, deselect, selectedOrNot}) => {
    const [selected, setSelected] = useState(selectedOrNot)
   
    useEffect(() => {
        if(selected) {
            select();
        }
        else {
            deselect();
        }
    },[selected])

    return (
        <div className="container-fluid" id="countermeasure-container">
            <div id="mitigation-info">
                <div className=" d-flex justify-content-center align-items-center flex-wrap">
                    <input id="checkbox" defaultChecked={selected} type="checkbox" className="mr-auto" value="checkbox" 
                    onClick={() => {
                        setSelected(!selected)
                    }}/>
                    <h4 className="mr-auto">{name}</h4>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
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
        </div>
    )
}

export default Countermeasure;