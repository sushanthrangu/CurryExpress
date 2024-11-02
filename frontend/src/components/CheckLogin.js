import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'; // Import withRouter for accessing history object
import { Button, Divider } from 'semantic-ui-react'; // Assuming you're using Semantic UI React components

class CheckLogin extends Component {
    constructor(props) {
        super(props);

        // Initialize state with the login status retrieved from localStorage
        this.state = {
            checkLogin: localStorage.getItem("loggedIn") // Assuming "loggedIn" key is set in localStorage upon login
        };

        // Bind the logout function to this component instance
        this.logout = this.logout.bind(this);
    }

    // Function to handle logout
    logout() {
        axios.get("http://localhost:5000/logout")
            .then((res) => {
                // Redirect to Homes page after logout
                this.props.history.push("/Homes");
            })
            .catch((err) => {
                console.log(err);
            });

        // Clear the localStorage upon logout
        localStorage.clear();
    }

    render() {
        // Check if user is logged in
        if (this.state.checkLogin) {
            // Render logout button if user is logged in
            return (
                <Button className="btn btn-primary btn-xs" onClick={this.logout}>Logout</Button>
            );
        } else {
            // Render nothing if user is not logged in
            return null;
        }
    }
}

export default withRouter(CheckLogin); // Export CheckLogin component with withRouter to access history object
