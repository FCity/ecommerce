import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    state = { quantity: 1 }

    onChange = e => this.setState({ quantity: e.target.value })

    onSubmit = e => {
        const { item, addItem } = this.props
        const { quantity } = this.state

        e.preventDefault()
        addItem(item.id, item.name, quantity)
        this.setState({ quantity: 1 })
    }

    render() {
        const { name, image, desc, price, stock } = this.props.item

        return (
            <div className="item">
                <img
                    src={image}
                    alt="No Img"
                />
                <div className="item-body">
                    <div className="item-title">
                        <h2>{ name }</h2>
                        <p>${ price }</p>
                    </div>
                    
                    <div className="item-info">
                        <p>{ desc }</p>
                        <div>In stock: { stock }
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        className="quantity"
                                        name="quantity"
                                        min="1"
                                        max={stock}
                                        value={this.state.quantity}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-item btn-item-add"
                                        value="Add to Cart"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired
}

export default Item