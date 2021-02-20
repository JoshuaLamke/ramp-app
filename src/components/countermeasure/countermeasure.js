import React, {useEffect, useState} from 'react';
import './countermeasure.css'
import ThreatColor from '../threat-color/threat-color';
let Countermeasure = ({threatTitle, name, levels, select, deselect, selector}) => {
    const [selected, setSelected] = useState(selector);
    let qaMetric = Math.cbrt(levels[0] * (levels[1] + levels[2] + levels[3]) / levels[4]);
    let title = `QAM Details- ${threatTitle}`
    useEffect(() => {
        if(selected) {
            select();
        }
        else {
            deselect();
        }
    },[selected])
    return (
        <div className="container-fluid py-2" id="countermeasure-container">
            <button className="btn btn-primary" onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelected(!selected);
                                                        }}>
                {selected ? 'Deselect Countermeasure' : 'Select Countermeasure'}
            </button>
            <div className="container-fluid d-flex justify-content-center pb-3"><h3>{title}</h3></div>
            <div id="mitigation-info">
                <div className=" d-flex pb-4 justify-content-center"><h4>{name}</h4></div>
                <div className="d-flex justify-content-around">
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
                <div className="d-flex flex-column align-items-center mt-3" style={{'borderTop': '3px solid rgb(68, 107, 235)'}}>
                    <h5 className="pt-3">Total Score For Mitigation</h5>
                    <ThreatColor level={Math.round(100* qaMetric) / 100}/>
                </div>
            </div>
        </div>
    )
}

export default Countermeasure;