import './project-card.css'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ThreatColor from '../threat-color/threat-color'
import ResetButton from '../reset-button/resetButton'
let ProjectCard = (props) => {
    const [page, setPage] = useState(0);
    const [pageType, setPageType] = useState(props.pageType);
    let threatTotals = useSelector(state => state.threatReducer.map(e => e.total));
    let threatTypes = useSelector(state => state.threatReducer.map(e => e.type));
    let minTotal = 3;
    let minTotalDesign = 3;
    let minTotalFab = 3;
    let minTotalAssembly = 3;
    for(let i = 0; i < threatTotals.length; i++) {
        if(minTotal > threatTotals[i]) {
            minTotal = threatTotals[i];
        }
        if(threatTypes[i] == 'design' && threatTotals[i] < minTotalDesign) {
            minTotalDesign = threatTotals[i];
        }
        if(threatTypes[i] == 'fabrication' && threatTotals[i] < minTotalFab) {
            minTotalFab = threatTotals[i];
        }
        if(threatTypes[i] == 'assembly' && threatTotals[i] < minTotalAssembly) {
            minTotalAssembly = threatTotals[i];
        }
    }
    useEffect(() => {
        minTotal = 3;
        minTotalDesign = 3;
        minTotalFab = 3;
        minTotalAssembly = 3;
        for(let i = 0; i < threatTotals.length; i++) {
            if(minTotal > threatTotals[i]) {
                minTotal = threatTotals[i];
            }
            if(threatTypes[i] == 'design' && threatTotals[i] < minTotalDesign) {
                minTotalDesign = threatTotals[i];
            }
            if(threatTypes[i] == 'fabrication' && threatTotals[i] < minTotalFab) {
                minTotalFab = threatTotals[i];
            }
            if(threatTypes[i] == 'assembly' && threatTotals[i] < minTotalAssembly) {
                minTotalAssembly = threatTotals[i];
            }
        }
    },[threatTotals])
    return (
        <div className="container-fluid">
            <div className="container project-card-container mt-5 py-2" style={{'background': 'rgb(255,255,255)'}}>
                <div className="d-flex justify-content-between">
                    <div className="row d-flex flex-column pl-3">
                        <h1>Falcon</h1>
                        <p>Cortex M0 design for embedded controllers and intelligent sensors</p>
                    </div>
                    <div>
                        <ResetButton />
                    </div>
                </div>
                <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div className="d-flex flex-fill flex-column align-items-center pb-2">
                        <h3>Threat Total:</h3>
                        <ThreatColor level={minTotal} size={{width: '50%', height: '100%'}}/>
                    </div>
                    <div className="col-5 mb-2 col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='build') ? 'rgb(32, 122, 97)' : 'rgb(171, 219, 206)' }}
                    onClick=
                    {
                        (e) => {
                            e.preventDefault();
                            if(page === 1) {
                                return;
                            }
                            setPage(1);
                        }
                    }>
                        <p style={{'fontSize': '15px'}}><b>Design</b></p>
                        <div className="d-flex justify-content-between">
                            <p>status</p>
                            <ThreatColor level={minTotalDesign}/>
                        </div>
                    </div>
                    <div className="col-5 mb-2 col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='fabrication') ? 'rgb(32, 122, 97)' : 'rgb(171, 219, 206)' }}
                    onClick=
                    {
                        (e) => {
                            e.preventDefault();
                            if(page === 2) {
                                return;
                            }
                            setPage(2);
                        }
                    }>
                        <p style={{'fontSize': '15px'}}><b>Fabrication</b></p>
                        <div className="d-flex justify-content-between">
                            <p>status</p>
                            <ThreatColor level={minTotalFab}/>
                        </div>
                    </div>
                    <div className="col-5 mb-2 col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='assembly') ? 'rgb(32, 122, 97)' : 'rgb(171, 219, 206)' }}
                    onClick=
                    {
                        (e) => {
                            e.preventDefault();
                            if(page === 3) {
                                return;
                            }
                            setPage(3);
                        }
                    }>
                        <p style={{'fontSize': '15px'}}><b>Assembly & Test</b></p>
                        <div className="d-flex justify-content-between">
                            <p>status</p>
                            <ThreatColor level={minTotalAssembly}/>
                        </div>
                    </div>
                </div>
            </div>
            {page === 1 ? <Redirect to="/design"></Redirect> : 
            (page === 2) ? 
            <Redirect to="/fabrication"></Redirect> :
            (page === 3) ? 
            <Redirect to="assembly-and-test"></Redirect>:
            ''}
        </div>
    );
};

export default ProjectCard;