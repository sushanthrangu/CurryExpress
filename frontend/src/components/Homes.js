import React from 'react';
import IngredientsLogo from '../images/ingredients.png';
import ChefLogo from '../images/chef.png';
import TimeLogo from '../images/timer.png';
import axios from 'axios';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Button to either log out or redirect to login page based on login status
        let btn;
        if (localStorage.getItem("loggedIn") === "1") {
            // Render logout button if user is logged in
            btn = (
                <button
                    style={{ float: 'right' }}
                    type="button"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Shopping Cart"
                    onClick={() => {
                        // Logout functionality
                        axios.get("http://localhost:5000/logout")
                            .then((res) => {
                                this.props.history.push("/Homes");
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                        localStorage.clear();
                    }}
                >
                    Logout
                </button>
            );
        } else {
            // Render login button if user is not logged in
            btn = (
                <button
                    style={{ float: 'right' }}
                    type="button"
                    className="btn btn-outline-primary"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Shopping Cart"
                    onClick={() => {
                        // Redirect to login page
                        this.props.history.push("./Login");
                    }}
                >
                    Login
                </button>
            );
        }

        return (
            <div>
                <br />
                {btn} {/* Render the button */}
                <br />
                <div className='Home'>
                    {/* First section - Freshness First */}
                    <div className='container'>
                        <div className="image">
                            <img src={IngredientsLogo} width='200' height='200' alt="Ingredients" />
                        </div>
                        <div className='content'>
                            <br />
                            <h2>Freshness First</h2>
                            <p>
                                We are uncompromising when it comes to freshness. We don't hesitate to discard a day-old lettuce leaf straight from the farm or cook a young carrot. Our approach is all about cutting, chopping, and steaming while ingredients are at their peak freshness. This dedication to freshness is what drives us in the kitchen and makes our dishes stand out.
                                <br />
                            </p>
                        </div>
                    </div>
                    {/* Second section - Culinary Mastery */}
                    <div className='container'>
                        <div className='content'>
                            <br />
                            <h2>Culinary Mastery</h2>
                            <p>
                                They elevate sauces to symphonies and coax salads into elegant dances. With skill, knowledge, and passion – alongside a few stirring spoons and other tools – they conjure goodness so exceptional, it's almost bewildered. But fear not, we know exactly what to do with it: deliver it straight to you.
                                <br />
                            </p>
                        </div>
                        <div className="image">
                            <img src={ChefLogo} width='200' height='200' alt="Chef" />
                        </div>
                    </div>
                    {/* Third section - 45 min Delivery */}
                    <div className='container'>
                        <div className="image">
                            <img src={TimeLogo} width='200' height='200' alt="Timer" />
                        </div>
                        <div className='content'>
                            <br />
                            <h2>45 min Delivery</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
