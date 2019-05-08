import React, {Component} from 'react';
import API from "../utils/API";
import Moment from 'react-moment';
import {Rating} from 'semantic-ui-react';

class Review extends Component {
    state = {
        id: "",
        country: "",
        countryCode: "",
        dateEnd: "",
        dateStart: "",
        displayName: "",
        img: "",
        program: "",
        review: "",
        isArchived: false
    }

    cardStyle = {
        padding: "2rem"
    }

    componentDidMount = () => {
        this.getIDFromURL();

    }

    getIDFromURL = () => {
        console.log(window.location.pathname);
        const goal = window
            .location
            .pathname
            .split("/");
        const idFromURL = goal[goal.length - 1];
        // console.log(idFromURL) this.setState({ id: idFromURL })
        API
            .showReview(idFromURL)
            .then((res) => {
                console.log("res", res)
                this.setState({
                    id: res.data._id,
                    country: res.data.country,
                    countryCode: res.data.countryCode,
                    dateEnd: res.data.dateEnd,
                    dateStart: res.data.dateStart,
                    displayName: res.data.displayName,
                    img: res.data.img,
                    program: res.data.program,
                    review: res.data.review,
                    rating: res.data.rating,
                    isArchived: res.data.isArchived
                })
            })

    }

    render() {
        console.log("state", this.state.id)
        return (
            <div className="container">
                <div className="card ">
                    <div className="row">
                        <div className="col s12 m4"></div>
                        <div className="col s12 m4 center-align">

                            <img
                                className="center-align review__img"
                                src={this.state.img
                                ? this.state.img
                                : `https://ui-avatars.com/api/?name=${this.state.displayName}`}
                                style={this.imgStyle}
                                alt={this.state.displayName}/>
                            <h2 className="review__title">{this.state.displayName}</h2>
                        </div>
                        <div className="col s12 m4"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m2"></div>
                        <div className="col s12 m8 center-align">
                            <ul>
                                <li className="review__category">Program Name: {this.state.program}
                                </li>
                                <li className="review__category">Rating:
                                    <Rating maxRating={5} disabled="true" rating={this.state.rating}/></li>
                                <li className="review__category">Dates Traveled:{" "}
                                    <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateStart}</Moment>
                                    -
                                    <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateEnd}</Moment>
                                </li>
                                <li className="review__category">Country: {this.state.country}</li>
                            </ul >
                        </div>
                        <div className="col s12 m2"></div>
                    </div>
                    <div className="row review">
                        <div className="col s12">
                            {this.state.review}
                        </div>

                    </div>
                    <div className="row">
                        <a className="review__button" href={"/reviewlist/" + this.state.countryCode}>Back to Country</a>
                    </div>

                </div >
            </div >
        )

    }
}

export default Review