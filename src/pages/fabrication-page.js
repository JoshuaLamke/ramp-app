import './design-fab-assembly-page.css'
import ProjectCard from '../components/project-card/project-card'
import Threat from '../components/threat-description/threat-description'
import {useSelector} from 'react-redux'
let FabricationPage = () => {
    let threats = useSelector(state => state.threatReducer)
    threats = threats.filter(threat => threat.type == 'fabrication')
    let sticky = true;
    let width = window.screen.width;
    if(width < 992){
        sticky = false;
    }
    let className = "container-fluid";
    if(sticky) {
        className = "container-fluid sticky-top";
    }
    return (
            <div>
                <div className={className}>
                    <ProjectCard pageType="fabrication"/>
                </div>
            <div className="container-fluid pt-4">
                <div className="container d-flex">
                    <div className="pb-2">
                        <h5 className="fs-10">Real Time Score For Vulnerabilities / Threats</h5>
                    </div>
                    <div style={{'position': 'relative', 'width': '100%'}} id="mitigations-header">
                        <h5 className="fs-10 word-break" style={{'position': 'absolute', 'right': '50px'}}>Countermeasures</h5>
                    </div>
                </div>
                {threats.map((threat) => {
                        return <Threat id='' threatName={threat.name} key={threat.id} numOfMitigations={threat.mitigations.length} levels_={threat.initialLevels}/>
                    })}                                                                                                                                                                                                                                                                                                  
            </div>
        </div>
    )
}

export default FabricationPage