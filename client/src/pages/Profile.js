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
        formImg: ""
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
            console.log(res);
            window.location.reload();
        })

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

    handleEdit(reviewId, program) {
        console.log('review id', reviewId);
        this.setState({
            formReviewId: reviewId,
            showForm: !this.state.showForm,
            formReviewProgram: program,
            formReview: "",
            formDisplayName: "",
            formImg: ""
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    };

    formDisplay = () => {

        return (
            <div>
                <h6> Edit your review for <a target="_blank" rel="noopener noreferrer" href={`/review/${this.state.formReviewId}`}>{this.state.formReviewProgram}</a></h6>
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.formDisplayName}
                        id="formDisplayName"
                        type="text" />
                    <label htmlFor="text">Name</label>
                </div>
                <div className="input-field col s12">

                    <input onChange={this.onChange}
                        value={this.state.formImg}
                        id="formImg"
                        type="text" />
                    <label htmlFor="text">Image URL</label>
                </div>

                <div className="input-field col s12">
                    <textarea onChange={this.onChange}
                        value={this.state.formReview}
                        id="formReview"
                        type="text"
                        className="materialize-textarea"></textarea>
                    {/* <label htmlFor="text">Write a Review of your Trip (1-4 Paragraphs)</label> */}
                    <span className="helper-text" >Write a Review of your Trip (1-4 Paragraphs)</span>

                </div>
                <button style={{
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginRight: ".5rem"
                }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3 center-block"
                    onClick={this.updateReview}> Submit</button>
            </div>
        )
    }


    updateReview = (e) => {
        // console.log('GO do axios call and smack the route!!', this.state.formReviewId)
        console.log(e)
        e.preventDefault()
        const query = {
            // _id: this.state.formReviewId,
            // review: this.state.formReview,
            // img: this.state.formImg,
            // displayName: this.state.formDisplayName
        }

        // validation
        // const { formReviewId, formReview, formImg, formDisplayName } = this.state;
        // formReview = formReview.trim();
        // formImg = formImg.trim();
        // formDisplayName = formDisplayName.trim();

        const submitReview = this.state.formReview
        const submitImg = this.state.formImg.trim()
        const submitDisplayName = this.state.formDisplayName.trim()

        console.log("review:", submitReview)

        if (this.state.formReviewId !== "") {
            query._id = this.state.formReviewId
        }
        if (submitReview !== null && submitReview !== undefined && submitReview !== "") {
            query.review = submitReview
        }
        if (submitImg !== "") {
            query.img = submitImg
        }
        if (submitDisplayName !== "") {
            query.displayName = submitDisplayName
        }

        API.editReview(query).then((res) => {
            console.log("res", res.data);

        }).then(API.getProfile(this.props.auth.user.id).then((res) => {
            console.log("res", res)
            this.setState({
                email: res.data.email,
                username: res.data.username,
                review: res.data.review.filter(element => !element.isArchived),
                showForm: false
            })
        }))
    }

    render() {

        const { user } = this.props.auth;
        console.log("id", user.id)
        return (
            <div className="container" >
                <div key="1" className="card cyan lighten-5" style={this.cardStyle}>
                    <div className="row">
                        <h6>Email:</h6> <h5>{this.state.email}</h5>
                    </div>
                    <div className="row">
                        <h6>User Name:</h6> <h5>{this.state.username}</h5>
                    </div>
                </div>


                {/* If there is no data to be shown in the results section, give a message. Otherwise show cards for each book.  */}
                {!this.state.review.length ? (<div className="card cyan lighten-5" style={this.cardStyle}><h5 className="text-center">No Reviews to Display</h5></div>) : (
                    this.state.review.map((currentReview, id) => {

                        return (
                            <div className="card cyan lighten-5" key={currentReview._id} style={this.cardStyle}>
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
                                    }} className="btn btn-large waves-effect waves-light hoverable blue accent-3 center-block"
                                        onClick={() => this.handleDelete(currentReview._id)}
                                    >Delete</button>
                                    <button
                                        style={{
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3 center-block"
                                        onClick={() => this.handleEdit(currentReview._id, currentReview.program)}>EDIT</button>
                                    {this.state.showForm && this.formReviewId === currentReview._id ? this.formDisplay() : ''}
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