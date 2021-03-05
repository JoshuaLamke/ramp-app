import './project-card.css'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import logo from '../../images/cRunLogo.png'
import ThreatColor from '../threat-color/threat-color'
import ResetButton from '../reset-button/resetButton'
import {Modal,Button} from 'react-bootstrap'

let ProjectCard = (props) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let hh = today.getHours()
    let min = today.getMinutes()
    let ss = today.getSeconds()
    today = mm + '/' + dd + '/' + yyyy + ' at ' + hh + ':' + min + ':' + ss ;
    const [toAdmin, setToAdmin] = useState(false);
    const [page, setPage] = useState(0);
    const [alerted, setAlerted] = useState(false);
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
            <div className="container project-card-container mt-5 py-2" id="project-card-container">
                <div className="d-flex justify-content-between flex-md-row flex-column align-items-start-md align-items-center">
                    <div className="row d-flex flex-column pl-3 mr-3 align-items-center-lg">
                        <h1>Falcon</h1>
                        <p>Cortex M0 design for embedded controllers and intelligent sensors</p>
                    </div>
                    <div className="d-flex flex-row mb-3" id="buttons-container" style={{'height': '50px'}}>
                        <button className="btn mr-3 d-flex justify-content-center align-items-center" id="admin-link" style={{'background': 'rgb(41, 163, 129)'}} onClick={() => {
                                console.log('in here')
                                setToAdmin(true);
                            }}>
                            Admin Page <img src={logo} style={{'height': '35px','width': '35px'}}/>
                        </button>
                        <ResetButton />
                    </div>
                </div>
                <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center pb-2" id="threat-total">
                        <h3>Threat Total:</h3>
                        <ThreatColor level={minTotal} size={{width: '50%', height: '100%'}}/>
                    </div>
                    <div className="col-9 col-sm-6 col-md-5 mb-2 col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='build') ? 'rgb(32, 122, 97)' : 'rgb(171, 219, 206)' ,'color':(pageType==='build') ? 'navy' : 'rgb(0,0,0)','transform': (pageType==='build') ?'scale(1.0)': ''}}
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
                        <div className="d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                                <p className="pr-1">Score</p>
                                <ThreatColor level={minTotalDesign}/>
                            </div>
                            <div className="d-flex justify-content-between" id="alerted-text" onMouseEnter={() => {setAlerted(true);}} onClick={() => {setAlerted(true);}}>
                                <p className="pr-1" style={{'color': 'orange'}}>Alerts</p>
                                <ThreatColor level={3} color='red'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-6 col-md-5 mb-2 col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='fabrication') ? 'rgb(32, 122, 97)' : 'rgb(171, 219, 206)' ,'color':(pageType==='fabrication') ? 'navy' : 'rgb(0,0,0)','transform': (pageType==='fabrication') ?'scale(1.0)': '' }}
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
                        <div className="d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                                <p className="pr-1">Score</p>
                                <ThreatColor level={minTotalFab}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="pr-1">Alerts</p>
                                <ThreatColor level={0} color='green'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-6 col-md-5 mb-2 col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='assembly') ? 'rgb(32, 122, 97)' : 'rgb(171, 219, 206)' ,'color':(pageType==='assembly') ? 'navy' : 'rgb(0,0,0)', 'transform': (pageType==='assembly') ?'scale(1.0)': ''}}
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
                        <div className="d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                                <p className="pr-1">Score</p>
                                <ThreatColor level={minTotalAssembly}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="pr-1">Alerts</p>
                                <ThreatColor level={0} color='green'/>
                            </div>
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
            {toAdmin ? <Redirect to="/admin"></Redirect> : null}
            <Modal  show={alerted} onHide={() => {setAlerted(false)}} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title style={{'fontFamily': 'Courier Prime'}}>
                        Real Time Monitoring Alerts
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p style={{'fontFamily': 'Courier Prime'}}>3 Alerts as of <b>{today}</b></p>​
                    <div className="w-100 d-flex flex-column">
                        <p style={{'fontFamily': 'Courier Prime, monospace'}}>&#128712; Marginal PICA Model Value.</p>
                        <p style={{'fontFamily': 'Courier Prime, monospace'}}>&#9888; Artifact Insertion Detected!</p>
                        <p style={{'fontFamily': 'Courier Prime, monospace'}}>&#9888; Extraneous 3rd Party IP Check!</p>​
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button className="close-button-modal" onClick={() => {setAlerted(false)}}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProjectCard;