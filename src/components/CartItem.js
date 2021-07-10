import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CartItem extends Component {
    render() {
        const item = this.props.items.find(item => item.id === this.props.cartItem.id)
        const { id, quantity } = this.props.cartItem
        const { name, image, price } = item
        return (
            <div className="cart-item">
                <img
                    src={image}
                    alt="No Img"
                />
                <h3>{ name }</h3>
                <p>${ price }</p>
                <p>Quantity: { quantity }</p>
                <p>Subtotal: ${ price * quantity }</p>
                <button
                    className="btn btn-item btn-item-del"
                    onClick={this.props.delItem.bind(this, id)}>Remove</button>
            </div>
        )
    }
}

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    delItem: PropTypes.func.isRequired
}

export default CartItem