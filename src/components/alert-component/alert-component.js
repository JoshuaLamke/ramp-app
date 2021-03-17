import { useEffect, useState } from 'react'
import './alert-component.css'
let AlertComponent = ({title, date, isThreat}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div>
            <div className="d-flex justify-content-between" id="audit-component-container">
                <div className="d-flex flex-column ">
                    {isThreat ? <div className="ml-2">&#9888; Vulnurability/Threat Detected!</div>: <div className="ml-2">&#128712; Alert</div>}
                    <div><h4 className="ml-2">{title}</h4></div>
                    <div><h5 className="ml-2">At {date}</h5></div>
                </div>
                <div>
                    <button className="d-flex h-100 btn align-items-end" onClick={() => {setExpanded(!expanded);}}>
                        {expanded ? <p>Details &#9650;</p> : <p>Details &#9660;</p>}
                    </button>
                </div>
            </div>
            {expanded ? 
            <div id="more-info-alert-container">
                More information on the threat.
            </div> : null}
        </div>
        
    )
}
export default AlertComponent