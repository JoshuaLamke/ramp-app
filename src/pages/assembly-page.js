import './design-fab-assembly-page.css'
import ProjectCard from '../components/project-card/project-card'
import Threat from '../components/threat-description/threat-description'
import {useSelector} from 'react-redux'
import logo from '../images/cRunLogo.png'
let AssemblyPage = () => {
    let threats = useSelector(state => state.threatReducer)
    let arr = []
    for(let i = 5; i < 7; i++) {
        arr.push(threats[i])
    }
    let mitigationList = useSelector(state => state.mitigationReducer)
    let mitigationNames = [[mitigationList[0].name,mitigationList[1].name],[mitigationList[1].name, mitigationList[3].name]]
    let mitigationLevels = 
    [
        [mitigationList[0].levels, mitigationList[1].levels],
        [mitigationList[1].levels, mitigationList[3].levels]
    ]
    return (
        <div>
            <div className="d-flex justify-content-end pr-5 mt-3 align-items-center">
                <a href="/admin" id="admin-link-container">
                    <div className="d-flex justify-content-center align-items-center pt-1 px-1" id="admin-link" style={{'borderBottom': '3px solid rgb(32, 122, 97)'}}>
                        <h4 className="pr-2" style={{'color': 'black','fontSize': '40px'}}><i>Admin Page:</i></h4>
                        <img src={logo} alt="colvin run logo" style={{"width": "45px", "height": "45px"}}/>
                    </div>
                </a>
            </div>
            <ProjectCard pageType="assembly"/>
            <div className="container-fluid pt-4">
                <div className="container d-flex">
                    <div className="pb-2">
                        <h5>Real Time Score For Vulnurabilities / Threats</h5>
                    </div>
                    <div style={{'position': 'relative', 'width': '100%'}} id="mitigations-header">
                        <h5 style={{'position': 'absolute', 'right': '50px'}}>Mitgations</h5>
                    </div>
                </div>
                {arr.map((threat,index) => {
                    return <Threat threatName={threat.name} key={threat.name} numOfMitigations={threat.mitigationCount} mitigationNames={mitigationNames[index]} levels_={threat.initialLevels} mitigationLevels={mitigationLevels[index]}/>
                })}                                                                                                                                                                                                                                                                                           
            </div>
        </div>
    )
}

export default AssemblyPage