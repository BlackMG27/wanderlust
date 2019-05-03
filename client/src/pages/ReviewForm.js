import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import API from "../utils/API";

class ReviewForm extends Component {
    state = {
        review: "",
        user: ""
    }

    onChange = e => {

        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state.review)
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    handleFormSubmit = (user) => {
        console.log(user.id, this.state.review)
        const query = {
            userId: user.id,
            review: this.state.review
        }
        API.createReview(query).then((res) => {
            console.log("res", res)
            console.log("saved?")
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
                < h5 > This is the review form to create review</h5>
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.review}
                        id="review"
                        type="email" />
                    <label htmlFor="text">Review</label>
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

                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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