import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/pizza_ordering_platform.png';
import { Button } from 'semantic-ui-react';
import BuildUrPizza from './BuildUrPizza';
import Cartt from './Cartt';

export default function Navbar() {
    const history = useHistory();

    // Function to handle click event on shopping cart button
    const handleClick = () => history.push('/Cart');

    // Function to handle mouse over event on logo
    const handleMouseOver = () => {
        // Perform action when mouse is over logo (if needed)
    }

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'lightblue' }}>
                {/* Logo and brand */}
                <a className="navbar-brand" href="./Homes">
                    <img src={logo} style={{ width: 60, height: 50, marginTop: -5 }} alt="Logo" onMouseOver={handleMouseOver} />
                    Order Your Pizza
                </a>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* Order Pizza link */}
                        <li className="nav-item">
                            <a className="nav-link" href="./OrderPizza">Order Pizza</a>
                        </li>
                        {/* Build Your Pizza link */}
                        <li className="nav-item">
                            <a className="nav-link" href="./BuildUrPizza">Build Your Pizza</a>
                        </li>
                    </ul>
                </div>

                {/* Shopping cart button */}
                <div class="a">
                    <Button
                        type="button"
                        color="green"
                        onClick={handleClick}
                        onMouseOver={handleMouseOver}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        Shopping Cart
                    </Button>
                </div>
            </nav>
        </div>
    );
}
