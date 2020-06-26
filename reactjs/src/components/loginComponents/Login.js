import React from "react";
import "./css/login.css";
import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  componentWillMount() {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const data = { email: this.state.email, password: this.state.password };
    const login = () => {
      axios
        .post("http://localhost:8000/login", data)
        .then((response) => {
          console.log(data);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div className="container login-container">
        <div className="row justify-content-center">
          <div className=" col-md-5">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">Hello there!</h4>
                </div>
                <div className="user">
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="email"
                      id="exampleInputEmail"
                      placeholder="Enter Email Address..."
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="password"
                      id="exampleInputPassword"
                      placeholder="Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                      <div className="form-check">
                        <input
                          className="form-check-input custom-control-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label
                          className="form-check-label custom-control-label"
                          htmlFor="formCheck-1"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-block text-white btn-user"
                    type="submit"
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <a className="small">Forgot Password?</a>
                </div>
                <div className="text-center">
                  <a className="small">Create an Account!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
