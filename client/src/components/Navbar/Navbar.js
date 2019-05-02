import React from "react";
// import DrawerToggleButton from '../sideNav/DrawerToggleButton';
// import '../Navbar/Navbar.css'

function NavTabs(props) {

    return (

        // <header className="black toolbar">
        //     <nav className="toolbar__navigation">
        //         <div />
        //         <div className="toolbar__logo">
        //             <a href="/">Wanderlust</a>
        //         </div>
        //         <div className="spacer" />
        //         <div className="toolbar_navigation-items">
        //             <ul>
        //                 <li className="nav-item">
        //                     <a href="/review" onClick={() => props.handlePageChange("Review")}
        //                         className={props.currentPage === "Review" ? "nav-link active" : "nav-link"} >
        //                         Review Form
        //         </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a href="/login" onClick={() => props.handlePageChange("Login")}
        //                         className={props.currentPage === "Login" ? "nav-link active" : "nav-link"} >
        //                         Login / Signup

        //          </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </header>



        <nav className="black toolbar">
            <div className="nav-wrapper toolbar__navigation">
                <div>
                    {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
                </div>
                <a href="/" className="brand-logo toolbar__logo">Wanderlust</a>
                <ul className="right hide-on-med-and-down">
                    <li className="nav-item">
                        <a
                            href="/review"
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
                    <li>
                        <a
                            href="/map"
                            onClick=
                            { () => props.handlePageChange("Map") }
                            className=
                            { props.currentPage === "Map" ? "nav-link active" : "nav-link" }>Map</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavTabs;
