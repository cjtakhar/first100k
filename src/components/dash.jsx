import './styles/dash.css'
import Login from './login'

const Dash = () => {
    return (
        <div className="dash-container">
            <div className="dash-header">
                <h1>hello.</h1>
            </div>
            <div className="dash-content">
                <div className="login">
                    < Login />
                </div>
            </div>
        </div>
    )
}

export default Dash