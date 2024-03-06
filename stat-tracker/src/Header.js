import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <h1>
                <Link to={'/'}> 
                <h1 className="padding-top">Stats Tracker</h1>
                </Link>
            </h1>

        <nav className="container">
            <Link to={'/'}>
                <h5 className="nav-item">Home</h5>
            </Link>
            <Link to={'/new-player'}>
                <h5>New Player</h5>            
            </Link>
            <Link to={'/stats-form'} >
                <h5 className="nav-item">New Stats</h5>
            </Link>
        </nav>
        </>

    )
}

export default Header