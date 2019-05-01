import React from "react";

function NavTabs(props) {
    return (
        // <nav>
        //     <div className="nav-wrapper">
        //         {/* <a href="#" className="brand-logo">Logo</a> */}
        //         <ul id="nav-mobile" className="right hide-on-med-and-down">
        //             <li><a href="sass.html">Sass</a></li>
        //             <li><a href="badges.html">Components</a></li>
        //             <li><a href="collapsible.html">JavaScript</a></li>
        //         </ul>
        //     </div>
        // </nav>

        <nav>
            <div className="nav-wrapper responsive-text">

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className="nav-item">
                        <a href="/review" onClick={() => props.handlePageChange("Review")}
                            className={props.currentPage === "Review" ? "nav-link active" : "nav-link"} >
                            Review
                </a>
                    </li>
                    <li className="nav-item">
                        <a href="/login" onClick={() => props.handlePageChange("Login")}
                            className={props.currentPage === "Login" ? "nav-link active" : "nav-link"} >
                            Login

                </a>
                    </li>
                    <li className="nav-item">
                        <a href="/signup" onClick={() => props.handlePageChange("Signup")}
                            className={props.currentPage === "Signup" ? "nav-link active" : "nav-link"} >
                            Signup
                </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;
