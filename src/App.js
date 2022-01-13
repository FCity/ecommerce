import React, { Component } from 'react'
import Gallery from './components/Gallery'
import Cart from './components/Cart'
import $ from 'jquery'
import jq from './jq'
import './App.css'

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Black Vase',
        image: 'https://cb2.scene7.com/is/image/CB2/VictoriaBlackVaseSHS21/$web_pdp_main_carousel_sm$/201006142100/victoria-black-vase.jpg',
        desc: 'A black vase',
        price: 29.99,
        stock: 20
      },
      {
        id: 2,
        name: 'Coffee Maker',
        image: 'https://i5.walmartimages.com/asr/16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg',
        desc: '5-cup coffee maker',
        price: 9.99,
        stock: 50
      },
      {
        id: 3,
        name: 'Rug',
        image: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/21040593289229m?$529$&wid=529&hei=529',
        desc: 'A very nice rug',
        price: 599.99,
        stock: 10
      },
      {
        id: 4,
        name: 'Silverware Set',
        image: 'https://m.media-amazon.com/images/I/71YP1-EuaPL._AC_SX466_.jpg',
        desc: "50-piece silverware set",
        price: 27.59,
        stock: 25
      },
      {
        id: 5,
        name: 'Brown-Black Chair',
        image: 'https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s',
        desc: 'A sturdy chair',
        price: 29.99,
        stock: 15
      },
      {
        id: 6,
        name: 'Dark Brown Extendable Table',
        image: 'https://www.ikea.com/us/en/images/products/ekedalen-extendable-table-dark-brown__0736963_pe740827_s5.jpg',
        desc: 'An extendable table',
        price: 199.99,
        stock: 7
      }
    ],
    cart: []
  }

  addItem = (id, quantity) => {
    if (this.state.cart.some(item => item.id === id)) {
      this.setState({
        cart: this.state.cart.map(item => {
          if (item.id === id) item.quantity = quantity
          return item
        })
      })
    } else {
      const cartItem = { id, quantity }
      this.setState({ cart: [...this.state.cart, cartItem] })
    }

    const item = this.state.items.find(item => item.id === id)

    $('#alert').html(`<p>${item.name} added to cart</p><div id="close">x</div>`).fadeIn('slow', 'swing')
    setTimeout(() => {
      $('#alert').fadeOut('slow', 'swing')
    }, 3000)
  }

  delItem = id => {
    this.setState({ cart: this.state.cart.filter(item => item.id !== id)} )

    const item = this.state.items.find(item => item.id === id)

    $('#alert').html(`<p>${item.name} removed from cart</p><div id="close">x</div>`).fadeIn('slow', 'swing')
    setTimeout(() => {
      $('#alert').fadeOut('slow', 'swing')
    }, 3000)
  }

  emptyCart = () => {
    this.setState({ cart: [] })

    if (this.state.cart.length > 0) {
      $('#alert').html(`<p>Cart emptied</p><div id="close">x</div>`).fadeIn('slow', 'swing')
      setTimeout(() => {
        $('#alert').fadeOut('slow', 'swing')
      }, 3000)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="alert"></div>
        <header>
          <h1 className="brand">React eCommerce</h1>
        </header>
        <nav>
          <button className="btn btn-cart" id="btn-cart-show">
            <i className="fa fa-shopping-cart"></i>
          </button>
        </nav>
        <div id="gallery">
          <Gallery
            items={this.state.items}
            addItem={this.addItem}
          />
        </div>
        <div id="cart">
          { this.state.cart.length > 0 &&
          <button
            className="btn btn-item"
            id="btn-item-empty"
            onClick={this.emptyCart}>Empty Cart</button>
          }
          <button className="btn btn-cart" id="btn-cart-hide">X</button>
          <Cart
            cart={this.state.cart}
            items={this.state.items}
            delItem={this.delItem}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default App