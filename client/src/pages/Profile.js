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
        username: "",
        showForm: false,
        formReviewId: '',
        formReview: "",
        formReviewProgram: "",
        formDisplayName: "",
        formImg: "",
        error: "",
        formSubmitted: false
    }

    cardStyle = {
        padding: "2rem"
    }

    imgStyle = {
        height: "200px",
        width: "200px",
        borderRadius: "50%"
    }

    handleDelete = (id) => {
        API.archiveReview(id).then(res => {
            // console.log(res)
        }).then(API.getProfile(this.props.auth.user.id).then((res) => {
            console.log("res", res)
            this.setState({
                email: res.data.email,
                username: res.data.username,
                review: res.data.review.filter(element => !element.isArchived)
            })
        }))

    }

    componentDidMount() {
        API.getProfile(this.props.auth.user.id).then((res) => {
            console.log("res", res)
            this.setState({
                email: res.data.email,
                username: res.data.username,
                review: res.data.review.filter(element => !element.isArchived)
            })
        })
    }

    handleEdit(reviewId, program, content, name, img) {
        console.log('review id', reviewId);
        this.setState({
            formReviewId: reviewId,
            showForm: !this.state.showForm,
            formReviewProgram: program,
            formReview: content,
            formDisplayName: name,
            formImg: img
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    };

    formDisplay = () => {

        return (
            <div className="row">
                <br />
                <h6> Edit your review for <a target="_blank" rel="noopener noreferrer" href={`/review/${this.state.formReviewId}`}>{this.state.formReviewProgram}</a></h6>
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.formDisplayName}
                        id="formDisplayName"
                        type="text" />
                    {this.state.formSubmitted && !this.state.formReview ? (<span className="helper-text red-text" >Displayed User Name **</span>)
                        : (<span className="helper-text" >Displayed User Name</span>)}

                </div>
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.formImg.includes("https://ui-avatars.com") ? (this.setState({ formImg: "" }), this.state.formImg) : this.state.formImg}
                        id="formImg"
                        type="text" />
                    <span className="helper-text">Review Image URL</span>
                </div>

                <div className="input-field col s12">
                    <textarea onChange={this.onChange}
                        value={this.state.formReview}
                        id="formReview"
                        type="text"
                        className="materialize-textarea"></textarea>
                    {this.state.formSubmitted && !this.state.formReview ? (<span className="helper-text red-text" >Write a Review of your Trip (1-4 Paragraphs) ** </span>)
                        : (<span className="helper-text" >Write a Review of your Trip (1-4 Paragraphs)</span>)}

                </div>
                <button style={{
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginRight: ".5rem"
                }}
                    type="submit"
                    className="review__button"
                    onClick={this.updateReview}>SUBMIT</button>

                <p className="red-text">{this.state.error}</p>
            </div>
        )
    }


    updateReview = (e) => {
        e.preventDefault()
        this.setState({ formSubmitted: true })

        const query = {

        }

        let submitReview = this.state.formReview
        let submitImg = this.state.formImg.trim()
        let submitDisplayName = this.state.formDisplayName.trim()


        if (this.state.formReviewId !== "") {
            query._id = this.state.formReviewId
        }
        if (submitReview !== null && submitReview !== undefined && submitReview !== "") {
            query.review = submitReview
        }
        if (submitDisplayName !== "") {
            query.displayName = submitDisplayName
        }

        if (submitImg === "") {
            submitImg = `https://ui-avatars.com/api/?name=${submitDisplayName}&size=350&background=d37e34&color=384269`
        }

        query.img = submitImg

        if (query.img && query.displayName && query.review) {

            API.editReview(query).then((res) => {

            }).then(API.getProfile(this.props.auth.user.id).then((res) => {
                this.setState({
                    email: res.data.email,
                    username: res.data.username,
                    review: res.data.review.filter(element => !element.isArchived),
                    showForm: false
                })
            }))
        } else {
            this.setState({
                error: "Make sure the fields marked with ** are not blank"
            })
        }

    }

    render() {

        const { user } = this.props.auth;
        console.log("id", user.id)
        return (
            <div className="container" >
                <div key="1" className="card card_mt" style={this.cardStyle}>
                    <div className="row">
                        <h6>Email:</h6> <h5>{this.state.email}</h5>
                    </div>
                    <div className="row">
                        <h6>User Name:</h6> <h5>{this.state.username}</h5>
                    </div>
                </div>


                {/* If there is no data to be shown in the results section, give a message. Otherwise show cards for each book.  */}
                {!this.state.review.length ? (<div className="card " style={this.cardStyle}><h5 className="text-center">No Reviews to Display</h5></div>) : (
                    this.state.review.map((currentReview, id) => {

                        return (
                            <div className="card " key={currentReview._id} style={this.cardStyle}>
                                <div className="row">
                                    <div className="col s12 m4"></div>
                                    <div className="col s12 m4 center-align">

                                        <img className="center-align" src={currentReview.img ? currentReview.img : `https://ui-avatars.com/api/?name=${currentReview.displayName}`} style={this.imgStyle} alt="trip" />
                                        <h5>{currentReview.displayName}</h5>
                                    </div>
                                    <div className="col s12 m4"></div>
                                </div>
                                <div className="row">
                                    <div className="col s12 m4"></div>
                                    <div className="col s12 m4 center-align">
                                        <ul>
                                            <li>Program Name: {currentReview.program} </li>
                                            <li>Organizer: {currentReview.tripOrg} </li>
                                            <li>Rating:
                                    <Rating maxRating={5} disabled={true} rating={currentReview.rating} /></li>
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
                                    <button style={{
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        marginRight: ".5rem"
                                    }} className="review__button"
                                        onClick={() => this.handleDelete(currentReview._id)}
                                    >DELETE</button>
                                    <button
                                        style={{
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        className="review__button"
                                        onClick={() => this.handleEdit(currentReview._id, currentReview.program, currentReview.review, currentReview.displayName, currentReview.img)}>EDIT</button>
                                    {this.state.showForm && this.state.formReviewId === currentReview._id ? this.formDisplay() : ''}
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