import 'bootstrap/dist/css/bootstrap.min.css';
import Threat from './components/threat-description/threat-description'
import {useSelector} from 'react-redux'
import logo from './images/cRunLogo.png'
import './App.css'
import Routes from './routes'

function App() {
  let threats = useSelector(state => state.threatReducer)
  let mitigationList = useSelector(state => state.mitigationReducer)
  let mitigationNames = [[mitigationList[0].name,mitigationList[1].name,mitigationList[2].name],[mitigationList[1].name, mitigationList[3].name], [mitigationList[2].name, mitigationList[3].name],[mitigationList[0].name,mitigationList[1].name],[mitigationList[1].name, mitigationList[3].name],[mitigationList[0].name,mitigationList[1].name],[mitigationList[1].name, mitigationList[3].name]]
  let mitigationLevels = 
  [
      [mitigationList[0].levels, mitigationList[1].levels, mitigationList[2].levels],
      [mitigationList[1].levels, mitigationList[3].levels],
      [mitigationList[2].levels, mitigationList[3].levels],
      [mitigationList[0].levels, mitigationList[1].levels],
      [mitigationList[1].levels, mitigationList[3].levels],
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
      <Routes />
      {threats.map((threat,index) => {
        return <Threat id='invisible' threatName={threat.name} key={threat.name}  numOfMitigations={threat.mitigationCount} mitigationNames={mitigationNames[index]} levels_={threat.initialLevels} mitigationLevels={mitigationLevels[index]}/>
      })}
      <div className="d-flex justify-content-center flex-wrap px-3">
        (C) 2021 <a id="colvin-run-website-link" target="_blank" href="https://colvinrun.net/" className="px-2" style={{'color': 'rgb(32, 122, 97)'}}> Colvin Run Networks, Inc.</a>Notional data for demonstration purposes only.      
      </div>
    </div>
  );
}

export default App;
