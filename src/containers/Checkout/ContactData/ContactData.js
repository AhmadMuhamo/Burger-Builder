import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import css from './ContactData.css';
import axios from '../../../axios-orders';

export default class ContactData extends Component {
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
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Ahmad Ibrahim',
                address: {
                    street: 'Test Street',
                    zipCode: '12312',
                    country: 'Egypt'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'Express'
        };

        axios.post('orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(error => this.setState({ loading: false }));
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="street" placeholder="Street Name" />
                <input type="text" name="postal_code" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={css.ContactData}>
                <h4>Enter Contact Data</h4>
                {form}
            </div>
        );
    }
}