import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <h1>
                <Link to={'/'}> 
                <h1 className="padding-top">Stats Tracker</h1>
                </Link>
            </h1>

        <nav>
            <Link to={'/'}>
                <h4 className="nav-item">Home</h4>
            </Link>
            <Link to={'/stats-form'} >
                <h4 className="nav-item">New Stats</h4>
            </Link>
        </nav>
        </>

    )
}

export default Header