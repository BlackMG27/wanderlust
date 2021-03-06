import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import API from "../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Rating } from 'semantic-ui-react';

class ReviewForm extends Component {
    state = {
        formSubmitted: false,
        review: "",
        user: "",
        displayName: "",
        img: "",
        program: "",
        country: "",
        countryCode: "",
        dateStart: "",
        dateEnd: "",
        rating: 3,
        tripOrg: "",
        error: ""
    }

    onChange = e => {

        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

    onLogoutClick = e => {
        e.preventDefault();
        this
            .props
            .logoutUser();
    };

    handleChangeStartDate = date => {
        this.setState({ dateStart: date });
    }
    handleChangeEndDate = date => {
        this.setState({ dateEnd: date });
    }

    handleFormSubmit = (user) => {
        this.setState({ formSubmitted: true })
        if (this.state.displayName && this.state.program && this.state.tripOrg && this.state.country && this.state.dateStart && this.state.dateEnd && this.state.review) {
            API
                .grabCountryCode(this.state.country)
                .then((res) => {
                    const query = {
                        userId: user.id,
                        review: this.state.review,
                        displayName: this.state.displayName,
                        img: this.state.img,
                        program: this.state.program,
                        country: this.state.country,
                        countryCode: res.data,
                        dateStart: this.state.dateStart,
                        dateEnd: this.state.dateEnd,
                        rating: this.state.rating,
                        tripOrg: this.state.tripOrg
                    }
                    API
                        .createReview(query)
                        .then((res) => {
                            window.location.href = "./map"
                        })
                })
        } else {
            this.setState({ error: "Please fill out the fields marked with **" })
        }
    }

    //userCheck = user

    render() {
        const { user } = this.props.auth;
        return (
            <div className="container z-depth-1 card form__view row card_mt">
                <div className="input-field col s12">
                    <input
                        onChange={this.onChange}
                        value={this.state.displayName}
                        id="displayName"
                        type="text" /> {this.state.formSubmitted && !this.state.displayName
                            ? (
                                <label className="red-text" htmlFor="text" >Name **</label>
                            )
                            : (
                                <span htmlFor="text">Name</span>
                            )}

                </div>
                <div className="input-field col s12">

                    <input onChange={this.onChange} value={this.state.img} id="img" type="text" />
                    <span htmlFor="text">Image URL</span>
                </div>
                <div className="input-field col s12">
                    <input
                        onChange={this.onChange}
                        value={this.state.program}
                        id="program"
                        type="text" /> {this.state.formSubmitted && !this.state.program
                            ? (
                                <label htmlFor="text" className="red-text">Program Name **</label>
                            )
                            : (
                                <span htmlFor="text">Program Name</span>
                            )}
                </div>
                <div className="input-field col s12">
                    <input
                        onChange={this.onChange}
                        value={this.state.tripOrg}
                        id="tripOrg"
                        type="text" /> {this.state.formSubmitted && !this.state.tripOrg
                            ? (

                                <label htmlFor="text" className="red-text">Trip Organizer **</label>

                            )
                            : (
                                <span htmlFor="text">Trip Organizer</span>
                            )}
                </div>
                <div className="input-field col s12">
                    <input
                        onChange={this.onChange}
                        value={this.state.country}
                        id="country"
                        type="text" /> {this.state.formSubmitted && !this.state.country
                            ? (
                                <label htmlFor="text" className="red-text">Primary Country Visited **
                                </label>
                            )
                            : (
                                <span htmlFor="text">Primary Country Visited</span>
                            )}
                </div>
                <div className="input-field col s12">
                    <DatePicker
                        selected={this.state.dateStart}
                        value={this.state.dateStart}
                        onChange={this.handleChangeStartDate}
                        id="dateStart"
                        type="date" /> {this.state.formSubmitted && !this.state.dateStart
                            ? (
                                <span className="helper-text red-text">Start Date **</span>

                            )
                            : (
                                <span className="helper-text">Start Date
                            </span>
                            )}
                </div>
                <div className="input-field col s12">
                    <DatePicker
                        selected={this.state.dateEnd}
                        value={this.state.dateEnd}
                        onChange={this.handleChangeEndDate}
                        id="dateEnd"
                        type="date" /> {this.state.formSubmitted && !this.state.dateEnd
                            ? (
                                <span className="helper-text red-text">End Date **</span>

                            )
                            : (
                                <span className="helper-text">End Date
                            </span>
                            )}
                </div>
                <div className="input-field col s12">

                    <Rating defaultRating={3} maxRating={5} onRate={this.handleRate} /> {/* <pre>{JSON.stringify()}</pre> */}
                    <span className="helper-text" id="rating">How would you rate your experience?
                    </span>
                </div>
                <div className="input-field col s12">
                    <textarea
                        onChange={this.onChange}
                        value={this.state.review}
                        id="review"
                        type="text"
                        className="materialize-textarea"></textarea>
                    {this.state.formSubmitted && !this.state.review
                        ? (
                            <label htmlFor="text" className="red-text">Your review (1-4 Paragraphs) **</label>
                        )
                        : (
                            <span htmlFor="text">Your review (1-4 Paragraphs)</span>
                        )}
                </div>
                <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    type="submit"
                    onClick={() => this.handleFormSubmit(user)}
                    className="btn review__button">Submit</button> <p className="red-text">{this.state.error}</p>
                {/* </form> */}
            </div >
        )

    }
}
ReviewForm.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, { logoutUser })(ReviewForm);