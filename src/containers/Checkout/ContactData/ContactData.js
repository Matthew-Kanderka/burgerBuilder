import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Matt',
                address: {
                    street: '123 road'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false})
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            });
    }

    render () {

        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name"></input>
                <input className={styles.Input} type="email" name="email" placeholder="Your email"></input>
                <input className={styles.Input} type="text" name="street" placeholder="Street"></input>
                <input className={styles.Input} type="text" name="postal" placeholder="Postal Code"></input>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;