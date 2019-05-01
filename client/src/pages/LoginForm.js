import React, { Component } from 'react';


class LoginForm extends Component {

    render() {
        return (
            <main>
                <center >
                    <div className="section" ></div>

                    <h5>Please login into your account</h5>
                    <div className="section"></div>

                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row" >

                            <form className="col s12" method="post">
                                <div className='row'>
                                    <div className='col s12'>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='email' name='email' id='email' />
                                        <label className='email'>Enter your email</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='password' name='password' id='password' />
                                        <label className='password'>Enter your password</label>
                                    </div>
                                    <label >
                                        <a className='black-text' href='#!'><b>Forgot Password?</b></a>
                                    </label>
                                </div>

                                <br />
                                <center>
                                    <div className='row'>
                                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect black'>Login</button>
                                    </div>
                                </center>
                            </form>
                            <a href="/signup" name='btn_create-account' className="col s12 btn btn-large waves-effect black">Create account</a>
                        </div>
                    </div>
                </center>

                <div className="section"></div>
                <div className="section"></div>
            </main>
        )

    }
}

export default LoginForm