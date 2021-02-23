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
        <div className="container-fluid" id="countermeasure-container">
            <div id="mitigation-info">
                <div className=" d-flex justify-content-center align-items-center flex-wrap">
                    <input id="checkbox" checked={selected} type="checkbox" className="mr-3" value="checkbox" onClick={(e) => {
                                                    setSelected(!selected);
                                                    }}/>
                    <h4>{name}</h4>
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