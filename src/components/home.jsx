import Chart from './chart'
import Budget from './budget'
import './styles/home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="pie-container">
                <Chart />
            </div>
            <div>
               < Budget />
            </div>
        </div>
    )
}

export default Home