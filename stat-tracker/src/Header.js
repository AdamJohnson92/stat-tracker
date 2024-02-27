import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <h1>
                <Link to={'/'}> 
                <h1>Stats Tracker</h1>
                </Link>
               
            </h1>
        </>

    )
}

export default Header