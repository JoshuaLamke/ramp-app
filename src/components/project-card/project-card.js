import './project-card.css'
import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
let ProjectCard = (props) => {
    const [page, setPage] = useState(0);
    const [pageType, setPageType] = useState(props.pageType);

    return (
        <div className="container-fluid">
            <div className="container project-card-container mt-5 py-2">
                <div className="row d-flex flex-column pl-3">
                    <h1>Falcon</h1>
                    <p>Cortex M0 design for embedded controllers and intelligent sensors</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='build') ? 'rgb(141, 141, 228)' : 'rgb(235, 229, 229)' }}
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
                        <p><b>Design</b></p>
                        <p>status</p>
                    </div>
                    <div className="col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='fabrication') ? 'rgb(141, 141, 228)' : 'rgb(235, 229, 229)' }}
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
                        <p><b>Fabrication</b></p>
                        <p>status</p>
                    </div>
                    <div className="col-lg-2 d-flex flex-column project-subcard py-2 mx-5" style={{background: (pageType==='assembly') ? 'rgb(141, 141, 228)' : 'rgb(235, 229, 229)' }}
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
                        <p><b>Assembly & Test</b></p>
                        <p>status</p>
                    </div>
                </div>
            </div>
            {page === 1 ? <Redirect to="/"></Redirect> : 
            (page === 2) ? 
            <Redirect to="/fabrication"></Redirect> :
            (page === 3) ? 
            <Redirect to="assembly-and-test"></Redirect>:
            ''}
        </div>
    );
};

export default ProjectCard;