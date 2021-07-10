import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

class Gallery extends Component {
    render() {
        return this.props.items.map(item => (
            <Item
                key={item.id}
                item={item}
                addItem={this.props.addItem}
            />
        ))
    }
}

Gallery.propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
}

export default Gallery