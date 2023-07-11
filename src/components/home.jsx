import './styles/home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
            </div>
            <div className="home-content">
                <div className="content-box">
                    <h2>Budget</h2>
                    <p>Budget Info</p>
                </div>
                <div className="content-box">
                <h2>Bills</h2>
                    <p>Bills Info</p>
                </div>
                <div className="content-box">
                <h2>Build</h2>
                    <p>Build Info</p>
                </div>
            </div>
        </div>
    )
}

export default Home