import React, { Component } from 'react';
import API from "../utils/API";
import Moment from 'react-moment';
import { Rating } from 'semantic-ui-react';

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

    imgStyle = {
        height: "200px",
        width: "200px",
        borderRadius: "50%"
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
                <div className="card cyan lighter-5" style={this.cardStyle}>
                    {this.state.isArchived ? (<h4 className="center-align"> This review was archived </h4>) :
                        (<div>
                            <div className="row">
                                <div className="col s12 m4"></div>
                                <div className="col s12 m4 center-align">
                                    <img
                                        className="center-align"
                                        src={this.state.img
                                            ? this.state.img
                                            : `https://ui-avatars.com/api/?name=${this.state.displayName}`}
                                        style={this.imgStyle}
                                        alt="photo" />
                                    <h5>{this.state.displayName}</h5>
                                </div>
                                <div className="col s12 m4"></div>
                            </div>
                            <div className="row">
                                <div className="col s12 m4"></div>
                                <div className="col s12 m4 center-align">
                                    <ul>
                                        <li>Program Name: {this.state.program}
                                        </li>
                                        <li>Rating:
                                    <Rating maxRating={5} disabled="true" rating={this.state.rating} /></li>
                                        <li>Dates Traveled:{" "}
                                            <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateStart}</Moment>
                                            -
                                    <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{this.state.dateEnd}</Moment>
                                        </li>
                                        <li>Country: {this.state.country}</li>
                                    </ul >
                                </div>
                                <div className="col s12 m4"></div>
                            </div>
                            <div className="row">
                                {this.state.review}
                            </div>
                            <div className="row">
                                <a
                                    style={{
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3 center-block"
                                    href={"/reviewlist/" + this.state.countryCode}>Back to Country</a>
                            </div>
                        </div>
                        )}
                </div >
            </div >
        )

    }
}

export default Review