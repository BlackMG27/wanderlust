import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import API from "../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Rating } from 'semantic-ui-react'


class ReviewForm extends Component {
    state = {
        review: "",
        user: "",
        displayName: "",
        img: "",
        program: "",
        country: "",
        countryCode: "",
        dateStart: "",
        dateEnd: "",
        rating: ""
    }


    onChange = e => {

        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state.review)
    };

    handleRate = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })


    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    handleChangeStart = date => {
        this.setState({
            dateStart: date
        });
    }
    handleChangeEnd = date => {
        this.setState({
            dateEnd: date
        });
    }


    handleFormSubmit = (user) => {
        //thanks!

        console.log(user.id, this.state.review)

        API.grabCountryCode(this.state.country)
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
                    rating: this.state.rating
                }
                API.createReview(query).then((res) => {
                    console.log("res", res)
                    window.location.href = "./map"
                })

            })

    }

    //userCheck = user



    render() {
        const { user } = this.props.auth;
        // console.log("user", user)
        //.setState({ user: user })
        return (
            <div className="container z-depth-1 cyan lighten-5 row" >
                {/* <form> */}
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.displayName}
                        id="displayName"
                        type="text" />
                    <label htmlFor="text">Name</label>
                </div>

                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.img}
                        id="img"
                        type="text" />
                    <label htmlFor="text">Image URL</label>
                </div>
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.program}
                        id="program"
                        type="text" />
                    <label htmlFor="text">Name of Program</label>
                </div>
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.country}
                        id="country"
                        type="text" />
                    <label htmlFor="text">What Country Did You Study In? </label>
                </div>

                <div className="input-field col s12">

                    <DatePicker
                        selected={this.state.dateStart}
                        value={this.state.dateStart}
                        onChange={this.handleChangeStart}
                        id="dateStart"
                        type="date"
                    />
                    <span className="helper-text" >Start Date</span>
                </div>
                <div className="input-field col s12">

                    <DatePicker
                        selected={this.state.dateEnd}
                        value={this.state.dateEnd}
                        onChange={this.handleChangeEnd}
                        id="dateEnd"
                        type="date"
                    />
                    <span className="helper-text" >End Date</span>
                </div>

                <div className="input-field col s12">

                    <span className="helper-text" >How would you rate your experience? </span>
                    <Rating maxRating={5} onRate={this.handleRate} />
                    <pre>{JSON.stringify()}</pre>


                </div>

                <div className="input-field col s12">

                    <textarea onChange={this.onChange}
                        value={this.state.review}
                        id="review"
                        type="text"
                        className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Write a Review of your Trip (1-4 Paragraphs)</label>

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

                    className="btn btn-large waves-effect waves-light hoverable blue accent-3 center-block"
                >
                    Submit
                </button>
                {/* </form> */}
            </div >
        )

    }
}

ReviewForm.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(ReviewForm);








