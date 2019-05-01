import React, { Component } from 'react';

class SignupForm extends Component {

    render() {
        return (
            <main>
                <center>
                    {/* <img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" /> */}
                    <div class="section"></div>

                    <h5>Sign up and Create an Account to Wanderlast</h5>
                    <div class="section"></div>

                    <div class="container">
                        <div class="z-depth-1 grey lighten-4 row" >

                            <form class="col s12" method="post">
                                <div class='row'>
                                    <div class='col s12'>
                                    </div>
                                </div>

                                <div class='row'>
                                    <div class='input-field col s12'>
                                        <input class='validate' type='text' name='username' id='username' />
                                        <label for='username'>Enter your Username</label>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='input-field col s12'>
                                        <input class='validate' type='password' name='password' id='password' />
                                        <label for='password'>Enter your password</label>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='input-field col s12'>
                                        <input class='validate' type='email' name='email' id='email' />
                                        <label for='email'>Enter your email</label>
                                    </div>
                                </div>


                                <br />
                                <center>
                                    <div class='row'>
                                        <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect red'>Create Account</button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                </center>

                <div class="section"></div>
                <div class="section"></div>
            </main>
        )

    }
}

export default SignupForm