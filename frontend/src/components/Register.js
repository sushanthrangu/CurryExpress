import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mob: '',
            password: '',
            email: ''
        };

        // Binding functions to the component instance
        this.changename = this.changename.bind(this);
        this.changeemail = this.changeemail.bind(this);
        this.changemob = this.changemob.bind(this);
        this.changepassword = this.changepassword.bind(this);
        this.changeSubmit = this.changeSubmit.bind(this);
    }

    // Function to update state with username input
    changename(event) {
        this.setState({
            name: event.target.value
        });
    }

    // Function to update state with email input
    changeemail(event) {
        this.setState({
            email: event.target.value
        });
    }

    // Function to update state with mobile number input
    changemob(event) {
        this.setState({
            mob: event.target.value
        });
    }

    // Function to update state with password input
    changepassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    // Function to handle form submission
    changeSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Sending registration data to the server
        axios.post('http://localhost:5000/register', {
            mob: this.state.mob,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log(res);
            alert("You have successfully registered " + this.state.name);
            this.props.history.push("/Login"); // Redirect to login page after successful registration
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div style={{ margin: '130px' }}>
                <div style={{ width: '55%', margin: 'auto' }}>
                    <br />
                    <h2 align='center'>
                        Hey Foodie, Register Here
                    </h2>
                    <br />
                    <form onSubmit={this.changeSubmit}>
                        {/* Form fields for username, email, mobile number, and password */}
                        {/* Each input field is controlled by the component's state */}
                        <div className='form-group row'>
                            <label htmlFor="name" className="col-sm-2 col-form-label">Username</label>
                            <div className='col-sm-9'>
                                <input type="text" className="form-control" id="name" placeholder="Enter Username" value={this.state.name} onChange={this.changename} required />
                            </div>
                        </div>
                        <br />
                        <div className='form-group row'>
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className='col-sm-9'>
                                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" value={this.state.email} onChange={this.changeemail} required />
                            </div>
                        </div>
                        <br />
                        <div className='form-group row'>
                            <label htmlFor="mobile" className="col-sm-2 col-form-label">Mobile</label>
                            <div className='col-sm-9'>
                                <input type="text" className="form-control" id="mobile" placeholder="Enter Mobile Number" value={this.state.mob} onChange={this.changemob} required />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                            <div className='col-sm-9'>
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.changepassword} required />
                            </div>
                        </div>
                        <br />
                        <center>
                            <button type="submit" className="btn btn-primary btn-xs">Register</button>
                        </center>
                    </form>
                    <div>
                        {/* Link to the login page for existing users */}
                        Existing User? <Link to='/Login'>Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);
