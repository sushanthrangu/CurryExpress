import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect, withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        // Initialize state variables
        this.state = {
            Name: '',
            Password: ''
        };
        // Bind event handler methods
        this.changename = this.changename.bind(this);
        this.changepwd = this.changepwd.bind(this);
        this.changeSubmit = this.changeSubmit.bind(this);
    }

    // Event handler method to update 'Name' state
    changename(event) {
        this.setState({
            Name: event.target.value
        });
    }

    // Event handler method to update 'Password' state
    changepwd(event) {
        this.setState({
            Password: event.target.value
        });
    }

    // Event handler method for form submission
    changeSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Send POST request to login endpoint
        axios.post('http://localhost:5000/login', {
            Password: this.state.Password,
            Name: this.state.Name,
        })
        .then((res) => {
            // If login successful, redirect to OrderPizza page
            if (res.data.data === 1) {
                this.props.history.push("/OrderPizza");
            } else {
                // If login failed, show alert and stay on Login page
                alert("Invalid Username or password");
                this.props.history.push("/Login");
            }
            console.log(res);
        })
        .catch((err) => {
            // If there's an error, show alert and stay on Login page
            console.log("in error");
            console.log(err);
            alert("Invalid Username or password");
            this.props.history.push("/Login");
        });
        localStorage.setItem('loggedIn', 1); // Set loggedIn flag in localStorage
    }
   
    render() {
        return (
            <div style={{ marginLeft: '130px', marginRight: '130px' }}>
                <div style={{ width: '55%', margin: 'auto' }}>
                    <br />
                    <h2 align='center'>Login Form</h2>
                    <br />
                    {/* Login form */}
                    <form onSubmit={this.changeSubmit}>
                        <div className='form-group row'>
                            <label htmlFor="name" className="col-sm-2 col-form-label">Username</label>
                            <div className='col-sm-9'>
                                <input type="text" className="form-control" name='Name' id="Name" placeholder="Enter Username" value={this.state.name} onChange={this.changename} required />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                            <div className='col-sm-9'>
                                <input type="password" className="form-control" name='Password' id="Password" placeholder="Enter Password" value={this.state.password} onChange={this.changepwd} required />
                            </div>
                        </div>
                        <br />
                        <center>
                            {/* Login button */}
                            <button type="submit" className="btn btn-primary btn-xs">Login</button>
                        </center>
                    </form>
                    <div>
                        {/* Link to Registration page */}
                        For New User <Link to='/Register'>Registration</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
