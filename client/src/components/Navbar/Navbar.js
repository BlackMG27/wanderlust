import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../../img/logonav.png"
import "../Navbar/Navbar.css";

class NavTabs extends React.Component {
    burgerClick = () => {
        console.log(document.getElementById('slide-out'))
    }

    render() {
        return (

            <nav className="black toolbar">

                <a
                    href="#sidenav"
                    onClick={() => this.burgerClick()}
                    data-target="slide-out"
                    className="sidenav-trigger show-on-large custom">
                    <i className="material-icons">menu</i>
                </a>

                <ul className="sidenav" id="slide-out">
                    <li className="nav-item">
                        <Link
                            to="/map"
                            onClick=
                            {() => this.props.handlePageChange("Map")}
                            className=
                            {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>Map</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/login"}
                            onClick={() => this.props.handlePageChange("Login")}
                            className={this.props.currentPage === "Login"
                            ? "nav-link active"
                            : "nav-link"}>
                            Login / Profile

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/reviewform"}
                            onClick={() => this.props.handlePageChange("Review")}
                            className={this.props.currentPage === "Review"
                            ? "nav-link active"
                            : "nav-link"}>
                            Review
                        </Link>
                    </li>
                    <li className="nav-item" onClick={this.props.logout}>
                        <Link
                            to="/"
                            className=
                            {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>LogOut</Link>
                    </li>

                </ul>

                <div className="nav-wrapper toolbar__navigation">
                    <div></div>
                    <Link to={'/'} className="brand-logo toolbar__logo "><img className="logo__smaller" src={Logo} alt="Wanderlust Menu Logo"/></Link>
                    <ul className="right hide-on-med-and-down">
                        <li className="nav-item">
                            <Link
                                onClick=
                                {() => this.props.handlePageChange("Map")}
                                to={'/map'}
                                className=
                                {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={"/login"}
                                onClick={() => this.props.handlePageChange("Login")}
                                className={this.props.currentPage === "Login"
                                ? "nav-link active"
                                : "nav-link"}>
                                Login / Profile

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={"/reviewform"}
                                onClick={() => this.props.handlePageChange("Review")}
                                className={this.props.currentPage === "Review"
                                ? "nav-link active"
                                : "nav-link"}>
                                Review
                            </Link>
                        </li>
                        <li className="nav-item" onClick={this.props.logout}>
                            <Link
                                to={"/"}
                                className=
                                {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>LogOut</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavTabs;