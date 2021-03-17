import {useState } from 'react';
import './alert-page.css'
import AlertComponent from '../../components/alert-component/alert-component'
import {Redirect} from 'react-router-dom'
import {initializeAlerts} from '../../actions/alertActions'
import {useSelector, useDispatch} from 'react-redux'
let AlertsPage = () => {
    const [back, setBack] = useState(false);
    let alerts = useSelector(state => state.alertsReducer)
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="mt-3 mb-5" style={{'color':'rgb(32, 122, 97)'}}>Alerts History</h1>
            <div className="container-fluid">
                {alerts.map((alert,index) => <AlertComponent title={alert.title} date={alert.date} isThreat={alert.isThreat} key={index}/>)}
            </div>
            <button className="btn btn-success mt-3" id="alerts-back-button" style={{'background': 'rgb(41,163,129)'}} onClick={() => {setBack(true);}}>
                Back
            </button>
            {back ? <Redirect to="/design"/> : null}
        </div>
    )
}
export default AlertsPage