import React, { Component } from 'react';

class SignupForm extends Component {

    render() {
        return (
            <main>
                <center>
                    {/* <img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" /> */}
                    <div className="section"></div>

                    <h5>Sign up and Create an Account to Wanderlast</h5>
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
                                        <input className='validate' type='text' name='username' id='username' />
                                        <label className='username'>Enter your Username</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='password' name='password' id='password' />
                                        <label className='password'>Enter your password</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='email' name='email' id='email' />
                                        <label className='email'>Enter your email</label>
                                    </div>
                                </div>


                                <br />
                                <center>
                                    <div className='row'>
                                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect black'>Create Account</button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                </center>

                <div className="section"></div>
                <div className="section"></div>
            </main>
        )

    }
}

export default SignupForm