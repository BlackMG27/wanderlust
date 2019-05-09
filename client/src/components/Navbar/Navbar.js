import React from "react";

import Logo from "../../img/logonav.png"

import "../Navbar/Navbar.css"

// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'; import
// '../Navbar/Navbar.css' import { logoutUser } from
// "../../actions/authActions"; console.log("log", logoutUser) function
// NavTabs(props) {
class NavTabs extends React.Component {
    burgerClick = () => {
        console.log(document.getElementById('slide-out'))
    }

    // console.log("props", props)

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
                        <a
                            href="/reviewform"
                            onClick={() => this.props.handlePageChange("Review")}
                            className={this.props.currentPage === "Review"
                                ? "nav-link active"
                                : "nav-link"}>
                            Review
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="/login"
                            onClick={() => this.props.handlePageChange("Login")}
                            className={this.props.currentPage === "Login"
                                ? "nav-link active"
                                : "nav-link"}>
                            Login / Profile

                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="/map"
                            onClick=
                            {() => this.props.handlePageChange("Map")}
                            className=
                            {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>Map</a>
                    </li>
                    <li className="nav-item" onClick={this.props.logout}>
                        <a
                            href="/"
                            className=
                            {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>LogOut</a>
                    </li>

                </ul>

                <div className="nav-wrapper toolbar__navigation">
                    <div></div>
                    <a href="/" className="brand-logo toolbar__logo "><img className="logo__smaller" src={Logo} /></a>
                    <ul className="right hide-on-med-and-down">
                        <li className="nav-item">
                            <a
                                href="/reviewform"
                                onClick={() => this.props.handlePageChange("Review")}
                                className={this.props.currentPage === "Review"
                                    ? "nav-link active"
                                    : "nav-link"}>
                                Review
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/login"
                                onClick={() => this.props.handlePageChange("Login")}
                                className={this.props.currentPage === "Login"
                                    ? "nav-link active"
                                    : "nav-link"}>
                                Login / Profile

                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/map"
                                onClick=
                                {() => this.props.handlePageChange("Map")}
                                className=
                                {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>Map</a>
                        </li>
                        <li className="nav-item" onClick={this.props.logout}>
                            <a
                                href="/"
                                className=
                                {this.props.currentPage === "Map" ? "nav-link active" : "nav-link"}>LogOut</a>
                        </li>
                    </ul>
                </div>

            </nav>

        );

    }
};

export default NavTabs;
