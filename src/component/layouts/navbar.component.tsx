import { Link } from "react-router-dom"

function NavbarComponent() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-5">
            <div className="navbar-brand">
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default NavbarComponent
