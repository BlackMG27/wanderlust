import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to
        // dashboard
        if (this.props.auth.isAuthenticated) {
            this
                .props
                .history
                .push("/profile");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this
                .props
                .history
                .push("/"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
        this
            .props
            .loginUser(userData);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container card_mt z-depth-1 card form__view row">
                <div
                    style={{
                        marginTop: "4rem"
                    }}
                    className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect back__home">
                            <i className="material-icons left">keyboard_backspace</i>
                            Back to home
                        </Link>
                        <div
                            className="col s12"
                            style={{
                                paddingLeft: "11.250px"
                            }}>
                            <h4>
                                <b>Login</b>
                                &nbsp; below
                            </h4>
                            <p>
                                Don't have an account?
                                <Link to="/register">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email || errors.emailnotfound
                                    })} />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password || errors.passwordincorrect
                                    })} />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </div>
                            <div
                                className="col s12"
                                style={{
                                    paddingLeft: "11.250px"
                                }}>
                                <button type="submit" className="btn register__button">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { loginUser })(Login);