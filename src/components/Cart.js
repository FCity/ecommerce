import React, { Component } from 'react'
import CartItem from './CartItem'
import PropTypes from 'prop-types'

class Cart extends Component {
    render() {
        if (this.props.cart.length === 0) return <p>Cart is empty</p>

        else return this.props.cart.map(cartItem => (
            <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                items={this.props.items}
                delItem={this.props.delItem}
            />
        ))
    }
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    delItem: PropTypes.func.isRequired
}

export default Cart