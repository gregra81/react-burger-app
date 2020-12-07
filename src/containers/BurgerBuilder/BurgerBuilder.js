import { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const BURGER_BASE_PRICE = 4;
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: BURGER_BASE_PRICE,
        purchasable: false
    }

    updatePurchaseState = (ingredients) => {
        const reducer = (purchasable, ingredient) => {
            return ingredient[1] > 0 || purchasable;
        }

        const isPurchasable = Object.entries(ingredients).reduce(reducer, false);

        this.setState({
            purchasable: isPurchasable
        })
    }

    addIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = prevCount + 1;
        const priceAddition = INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice + priceAddition
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };

        if (prevCount <= 0) {
            return;
        }
        updatedIngredients[type] = prevCount - 1;
        const priceSubstraction = INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice - priceSubstraction
        });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        return (
            <>
                <Modal />
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </>
        )
    }

}

export default BurgerBuilder;