import React, { Component } from 'react';
import API from "../utils/API";

class Review extends Component {


    loadReview = () => {

    }

    render(props) {
        return (
            <div className="container" >
                <div class="card cyan lighter-5">
                    <h5>This is the review</h5>
                    <ul>
                        <li>Country: </li>
                        <li>Rating: </li>
                        <li>Dates Traveled: </li>
                        <li>Trip Organizer: </li>
                        <li>Review:</li>
                    </ul >



                </div >
            </div >
        )

    }
}

export default Review