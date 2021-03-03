import './admin-page.css'
import {Redirect} from 'react-router-dom'
import {useState} from 'react'
let AdminPage = () => {
    const [toBuild, setToBuild] = useState(false);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{'height': '50vh', 'width': '100%'}}>
            <h1>Admin Page Coming In RAMP Phase 2</h1>
            <a onClick={() => {setToBuild(true)}}>
                <button id="admin-back-button" className="btn btn-large mt-5" >Back To App</button>
            </a>
            {toBuild ? <Redirect to='/design'></Redirect>: null}
        </div>

    )
}
export default AdminPage;