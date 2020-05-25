import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('order summary willupdate');
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Declicious</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
        );
    }

};

export default OrderSummary;