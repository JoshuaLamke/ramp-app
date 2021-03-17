import {useDispatch} from 'react-redux'
import {initializeThreats} from '../../actions/threatActions'
import {initializeMitigations} from '../../actions/mitigationActions'
import {initializeAlerts} from '../../actions/alertActions'
import './resetButton.css'
let ResetButton = ({}) => {
    let dispatch = useDispatch();
    return (
        <button className="btn" id="reset-button" onClick={() => {dispatch(initializeThreats());dispatch(initializeMitigations());dispatch(initializeAlerts());}}>
            Reset
        </button>
    )
}
export default ResetButton;