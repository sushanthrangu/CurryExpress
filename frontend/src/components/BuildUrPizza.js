import React, { Component } from 'react';
import axios from 'axios';
import Cart from './Cart';

class BuildYourPizza extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: [], // Array to store fetched ingredients
            total: 0, // Total price of selected ingredients
            selectedIngredients: [], // Array to store selected ingredients
        };
    }

    // Function to handle checkbox state change for ingredients selection
    handleIngredientSelection = (index) => {
        const updatedIngredients = this.state.selectedIngredients.map((item, idx) =>
            idx === index ? !item : item
        );

        this.setState({ selectedIngredients: updatedIngredients });

        // Calculate total price based on selected ingredients
        const totalPrice = updatedIngredients.reduce((sum, isSelected, idx) => {
            if (isSelected) {
                return sum + this.state.ingredients[idx].price;
            }
            return sum;
        }, 0);

        this.setState({ total: totalPrice });

        // Send selected ingredient to server for further processing
        const selectedIngredient = this.state.ingredients[index];
        axios.post("http://localhost:5000/build", selectedIngredient)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    componentDidMount() {
        // Fetch available ingredients from server upon component mount
        axios.get('http://localhost:5000/getingredients')
            .then((res) => {
                this.setState({
                    ingredients: res.data,
                    // Initialize selected ingredients state with false values for all ingredients
                    selectedIngredients: Array(res.data.length).fill(false),
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        // Generate table rows for each ingredient
        const ingredientRows = this.state.ingredients.map((ingredient, index) => (
            <tr key={index}>
                <td><img src={ingredient.Image} alt="Ingredient" style={{ height: '30px', width: '30px' }} /></td>
                <td>{ingredient.tname}&nbsp; &nbsp;${ingredient.price}.00</td>
                <td><input type='checkbox' checked={this.state.selectedIngredients[index]} onChange={() => this.handleIngredientSelection(index)} />&nbsp;Add</td>
            </tr>
        ));

        return (
            <div style={{ margin: '100px', textAlign: "center", border: '1px solid yellow', backgroundColor : 'lightcyan' }}>
                <br />
                <p >Order your Pizza now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below</p>
                <div className='row' style={{ margin: '100px' }}>
                    <table className="table table-bordered" style={{ marginLeft: '200px', width: '50px', marginRight: '200px', backgroundColor : 'white' }}>
                        <tbody>
                            {ingredientRows}
                        </tbody>
                    </table>
                    <h6 style={{ textAlign: 'left' }}>Total Cart: {this.state.total}</h6>
                    <div>
                        <br />
                        <button type="button" className="btn btn-success" onClick={() => {
                            this.props.history.push("/Cart")
                        }}>Build Your Pizza</button>
                    </div>
                    &nbsp;
                </div>
                {/* Hidden component to display cart */}
                <div style={{ display: 'none' }}>
                    <Cart total={this.state.total} />
                </div>
            </div>
        );
    }
}

export default BuildYourPizza;
