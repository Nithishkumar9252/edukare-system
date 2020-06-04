import React from 'react';
import './css/login.css'

class Login extends React.Component{

  state={
    isToggled:true,
  }

  render(){
    console.log(this.state.isToggled)
    return (
      <div className="container">
          <div className="row justify-content-center">
              <div className=" col-md-5">
                  <div className="card shadow-lg o-hidden border-0 my-5">


                                  <div className="p-5">
                                      <div className="text-center">
                                          <h4 className="text-dark mb-4">Hello there!</h4>
                                      </div>
                                      <form className="user">
                                          <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email"/></div>
                                          <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password"/></div>
                                          <div className="form-group">
                                              <div className="custom-control custom-checkbox small">
                                                  <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1"/><label className="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                              </div>
                                          </div><button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>

                                      </form>
                                      <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
                                      <div className="text-center"><a className="small" href="register.html">Create an Account!</a></div>
                                  </div>
                              </div>
                          </div>
                      </div>
        </div>
    );
  }
}
export default Login;
