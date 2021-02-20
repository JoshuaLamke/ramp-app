import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
let Login = () => {
    const [redirect, setRedirect] = useState(false);
    return (
        <div className="container" style={{'marginTop': '200px'}}>
            <div className="row d-flex flex-row align-items-center justify-content-center">
                <h1>Welcome To RAMP! Please Login</h1>
                <div className="col-9">
                    <form onSubmit={(e) => {
                    e.preventDefault();
                        if(e.target[0].value === 'colv!nRun' && e.target[1].value === 'colv!nrunRules') {
                            setRedirect(true)
                        }
                        else{
                            alert('Please input correct login credentials');
                        }
                    }}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control btn btn-dark" />
                    </div>
                    </form>
                </div>
            </div>
            {redirect ? <Redirect to="/design"/>: ''}
        </div>
    )
}
export default Login