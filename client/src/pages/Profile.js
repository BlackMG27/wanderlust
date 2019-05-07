import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import API from "../utils/API";
import { Rating } from 'semantic-ui-react';
import Moment from 'react-moment';



class Profile extends Component {
    state = {
        email: "",
        review: [],
        username: ""
    }

    cardStyle = {
        padding: "2rem"
    }

    imgStyle = {
        height: "200px",
        width: "200px",
        borderRadius: "50%"
    }

    componentDidMount() {
        // console.log(this.props.auth.user.id)
        API.getProfile(this.props.auth.user.id).then((res) => {
            console.log("res", res)
            this.setState({
                email: res.data.email,
                username: res.data.username,
                review: res.data.review
            })
        })
    }



    render() {

        const { user } = this.props.auth;
        console.log("id", user.id)
        return (
            <div className="container" >
                <div className="card cyan lighter-5" style={this.cardStyle}>
                    <div className="row">
                        Email: {this.state.email}
                    </div>
                    <div className="row">
                        User Name: {this.state.username}
                    </div>
                </div>

                {/* If there is no data to be shown in the results section, give a message. Otherwise show cards for each book.  */}
                {!this.state.review.length ? (<div className="card cyan lighter-5" style={this.cardStyle}><h5 className="text-center">No Reviews to Display</h5></div>) : (
                    this.state.review.map((currentReview, id) => {
                        return (
                            <div className="card cyan lighter-5" style={this.cardStyle}>
                                <div className="row">
                                    <div className="col s12 m4"></div>
                                    <div className="col s12 m4 center-align">

                                        <img className="center-align" src={currentReview.img ? currentReview.img : `https://ui-avatars.com/api/?name=${currentReview.displayName}`} style={this.imgStyle} alt="photo" />
                                        <h5>{currentReview.displayName}</h5>
                                    </div>
                                    <div className="col s12 m4"></div>
                                </div>
                                <div className="row">
                                    <div className="col s12 m4"></div>
                                    <div className="col s12 m4 center-align">
                                        <ul>
                                            <li>Program Name: {currentReview.program} </li>
                                            <li>Rating:
                                    <Rating maxRating={5} disabled="true" rating={currentReview.rating} /></li>
                                            <li>Dates Traveled:{" "}
                                                <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{currentReview.dateStart}</Moment> - <Moment parse="YYYY/MM/DD hh:mm" format="MM/DD/YY">{currentReview.dateEnd}</Moment></li>
                                            <li>Country: {currentReview.country}</li>
                                        </ul >
                                    </div>
                                    <div className="col s12 m4"></div>
                                </div>
                                <div className="row">
                                    {currentReview.review}
                                </div>
                                <div className="row">
                                    <a style={{
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }} className="btn btn-large waves-effect waves-light hoverable blue accent-3 center-block" href={"/reviewlist/" + currentReview.countryCode}>Delete</a>
                                </div>
                            </div>
                        )
                    }
                    ))}
            </div>
        )
    }


}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);