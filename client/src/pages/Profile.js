import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import API from "../utils/API";



class Profile extends Component {
    state = {
        email: "",
        review: [],
        username: ""
    }

    cardStyle = {
        padding: "2rem"
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
                    <div className="row">
                        {/* Review: {this.state.email} */}
                    </div>
                </div>
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