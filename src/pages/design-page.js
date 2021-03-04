import './design-fab-assembly-page.css'
import ProjectCard from '../components/project-card/project-card'
import Threat from '../components/threat-description/threat-description'
import {useSelector} from 'react-redux'
let DesignPage = () => {
    let threats = useSelector(state => state.threatReducer)
    let arr = []
    for(let i = 0; i < 3; i++) {
        arr.push(threats[i])
    }
    let mitigationList = useSelector(state => state.mitigationReducer)
    let mitigationNames = [[mitigationList[0].name,mitigationList[1].name,mitigationList[2].name],[mitigationList[1].name, mitigationList[3].name], [mitigationList[2].name, mitigationList[3].name]]
    let mitigationLevels = 
    [
        [mitigationList[0].levels, mitigationList[1].levels, mitigationList[2].levels],
        [mitigationList[1].levels, mitigationList[3].levels],
        [mitigationList[2].levels, mitigationList[3].levels]
    ]
    return (
            <div>
                <ProjectCard pageType="build" />
                <div className="container-fluid pt-4">
                    <div className="container d-flex">
                        <div className="pb-2">
                            <h5>Real Time Score For Vulnerabilities / Threats</h5>
                        </div>
                        <div style={{'position': 'relative', 'width': '100%'}} id="mitigations-header">
                            <h5 style={{'position': 'absolute', 'right': '50px'}}>Countermeasures</h5>
                        </div>
                    </div>
                    {arr.map((threat,index) => {
                        return <Threat id='' threatName={threat.name} key={threat.name}  numOfMitigations={threat.mitigationCount} mitigationNames={mitigationNames[index]} levels_={threat.initialLevels} mitigationLevels={mitigationLevels[index]}/>
                    })}                                                                                                                                                                                                                                                                                           
                </div>
            </div>
    )
}

export default DesignPage