import React from "react";
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import '../Navbar/Navbar.css'
// import { logoutUser } from "../../actions/authActions";

//console.log("log", logoutUser)


function NavTabs(props) {

    console.log("props", props)

    return (

        <nav className="black toolbar">
            <div className="nav-wrapper toolbar__navigation">
                <div>
                </div>
                <a href="/" className="brand-logo toolbar__logo">Wanderlust</a>
                <ul className="right hide-on-med-and-down">
                    <li className="nav-item">
                        <a
                            href="/reviewform"
                            onClick={() => props.handlePageChange("Review")}
                            className={props.currentPage === "Review"
                                ? "nav-link active"
                                : "nav-link"}>
                            Review
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="/login"
                            onClick={() => props.handlePageChange("Login")}
                            className={props.currentPage === "Login"
                                ? "nav-link active"
                                : "nav-link"}>
                            Login / Signup

                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="/signup" onClick={() => props.handlePageChange("Signup")}
                            className={props.currentPage === "Signup" ? "nav-link active" : "nav-link"} >
                            Signup
                </a>
                    </li> */}
                    <li className="nav-item">
                        <a
                            href="/map"
                            onClick=
                            {() => props.handlePageChange("Map")}
                            className=
                            {props.currentPage === "Map" ? "nav-link active" : "nav-link"}>Map</a>
                    </li>
                    <li className="nav-item" onClick={props.logout}>
                        <a

                            href="/"
                            className=
                            {props.currentPage === "Map" ? "nav-link active" : "nav-link"}>LogOut</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavTabs;
