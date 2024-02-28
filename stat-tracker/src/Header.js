import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <h1>
                <Link to={'/'}> 
                <h1>Stats Tracker</h1>
                </Link>
            </h1>

        <nav>
            <Link to={'/'}>
                <p>Home</p>
            </Link>
            <Link to={'/stats-form'} >
                <p>New Stats</p>
            </Link>
        </nav>
        </>

    )
}

export default Header