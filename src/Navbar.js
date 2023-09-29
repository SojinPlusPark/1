import "./Navbar.css"
import logo_temp from "./images/logo_temp.png"

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="./images/logo_temp.png" alt="logo_zerowastegourmet" />
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="Basic">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu" id="navbarBasic" >
                <a className="navbar-item">
                    Favorite
                </a>

                <a className="navbar-item">
                    My Kitchen
                </a>

                <a className="navbar-item">
                    Weekly Plan
                </a>

                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button">
                            Sign up
                        </a>
                        <a className="button">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;


// is-fixed-top
