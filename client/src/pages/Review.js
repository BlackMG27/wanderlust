import React, { Component } from 'react';
import API from "../utils/API";
import Moment from 'react-moment';

class Review extends Component {
    state = {
        id: "",
        country: "",
        dateEnd: "",
        dateStart: "",
        displayName: "",
        img: "",
        program: "",
        review: ""
    }

    componentDidMount = () => {
        this.getIDFromURL();

    }


    getIDFromURL = () => {
        console.log(window.location.pathname);
        const goal = window.location.pathname.split("/");
        const idFromURL = goal[goal.length - 1];
        // console.log(idFromURL)
        // this.setState({ id: idFromURL })
        API.showReview(idFromURL).then((res) => {
            console.log("res", res)
            this.setState({
                id: res.data._id,
                country: res.data.country,
                dateEnd: res.data.dateEnd,
                dateStart: res.data.dateStart,
                displayName: res.data.displayName,
                img: res.data.img,
                program: res.data.program,
                review: res.data.review,
                rating: res.data.rating
            })
        })

    }

    render() {
        console.log("state", this.state.id)
        return (
            <div className="container" >
                <div className="card cyan lighter-5">
                    <h5>This is the review</h5>
                    <ul>
                        <li>Country: {this.state.country}</li>
                        <li>Rating: {this.state.rating} </li>
                        <li>Dates Traveled:
                        <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateStart}</Moment> - <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateEnd}</Moment></li>
                        <li>Program Name: {this.state.program} </li>
                        <li>Review: {this.state.review}</li>
                    </ul >



                </div >
            </div >
        )

    }
}

export default Review