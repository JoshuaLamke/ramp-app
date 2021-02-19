import ProjectCard from '../components/project-card/project-card'
import Threat from '../components/threat-description/threat-description'
let FabricationPage = () => {
    return (
        <div>
            <ProjectCard pageType="fabrication"/>
            <div className="container-fluid pt-4">
                <div className="container d-flex">
                    <div className="pb-2">
                        <h5>Real Time Score For Vulnurabilities / Threats</h5>
                    </div>
                    <div style={{'position': 'relative', 'width': '100%'}} id="mitigations-header">
                        <h5 style={{'position': 'absolute', 'right': '50px'}}>Mitgations</h5>
                    </div>
                </div>
                <Threat threatName="Artifact Insertion(Software)" numOfMitigations="2" mitigationNames={['Access & duration (Design database log) using TSS internal metrics​','Access & duration using Machine Learning Insider Threat Detection​']} levels={[2.60,2.50,2.40,2.30,2.20]} mitigationLevels={{'Access & duration (Design database log) using TSS internal metrics​': [1.00,1.50,2.50,2.75,3.00],
                                                                                                                                                                                                                                                                                                           'Access & duration using Machine Learning Insider Threat Detection​': [1.00,1.25,1.50,1.75,2.00]       
                                                                                                                                                                                                                                                                                                           }}/>
                <Threat threatName="Compromise(Design data and transit to Fab)" numOfMitigations="2" mitigationNames={['Access & duration (Design database log) using TSS internal metrics​','Access & duration using Machine Learning Insider Threat Detection​']} levels={[1.50,2.67,1.39,2.30,2.25]} mitigationLevels={{'Access & duration (Design database log) using TSS internal metrics​': [2.50,2.51,1.50,1.75,3.00],
                                                                                                                                                                                                                                                                                                                         'Access & duration using Machine Learning Insider Threat Detection​': [1.09,1.10,1.50,2.30,2.89]       
                                                                                                                                                                                                                                                                                                           }}/>
            </div>
        </div>
    )
}

export default FabricationPage