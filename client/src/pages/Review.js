import React, {Component} from 'react';
import API from "../utils/API";
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
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
        const goal = window
            .location
            .pathname
            .split("/");
        const idFromURL = goal[goal.length - 1];
        API
            .showReview(idFromURL)
            .then((res) => {
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
                    isArchived: res.data.isArchived,
                    tripOrg: res.data.tripOrg
                })
            })

    }

    render() {
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
                                : `https://ui-avatars.com/api/?name=${this.state.displayName}&size=350&background=d37e34&color=384269`}
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
                                <li className="review__category">
                                    <span className="category">Program Name:</span>&nbsp; {this.state.program}
                                </li>
                                <li className="review__category">
                                    <span className="category">Trip Organizer:</span>&nbsp; {this.state.tripOrg}
                                </li>
                                <li className="review__category">
                                    <span className="category">Rating:
                                    </span>&nbsp;
                                    <Rating maxRating={5} disabled={true} rating={this.state.rating}/></li>
                                <li className="review__category">
                                    <span className="category">Dates Traveled:</span>&nbsp;{" "}
                                    <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateStart}</Moment>
                                    &nbsp;- &nbsp;
                                    <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateEnd}</Moment>
                                </li>
                                <li className="review__category">
                                    <span className="category">Country:</span>&nbsp; {this.state.country}</li>
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
                        <Link className="review__button" to={"/reviewlist/" + this.state.countryCode}>Back to Country</Link>
                    </div>

                </div >
            </div >
        )

    }
}

export default Review