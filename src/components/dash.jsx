import './styles/dash.css'
import Login from './login'
import { Link } from 'react-router-dom'

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
            <div>
                <Link to="/home" className="peek-link">
                <h2 className="enter">just a peek.</h2>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Dash