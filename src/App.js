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
        name: "Floral Spring Dress",
        image: 'https://cdn.shopify.com/s/files/1/0204/7208/products/186A7529_16edcadb-3066-4254-aef4-62710730834b.jpg?v=1577813259',
        desc: "A beautiful floral spring dress to let you shine",
        price: 29.99,
        stock: 20
      },
      {
        id: 2,
        name: "Summer Pumps",
        image: 'https://ae01.alicdn.com/kf/Hd449d167bced4dbab08f83670709c2faM/Women-s-Summer-pumps-High-Heels-Fashion-Increased-Stiletto-High-Heel-Super-High-Heel-Sexy-women.jpg_640x640q70.jpg',
        desc: "You'll make your friends so jealous with these",
        price: 49.99,
        stock: 100
      },
      {
        id: 3,
        name: "Winter Coat",
        image: 'https://contestimg.wish.com/api/webimage/5958c0a8fcb61c6e5830b34d-large.jpg?cache_buster=2eebfb7667e6a298b24ea5ae256d724c',
        desc: "Stay warm and stylish with this thick-enough but light-enough winter coat",
        price: 39.99,
        stock: 30
      },
      {
        id: 4,
        name: "Wonder Woman Outfit",
        image: 'https://i.ebayimg.com/images/g/NfoAAOSwxOleX~uy/s-l640.jpg',
        desc: "Showcase that you're a strong woman like Wonder Woman",
        price: 27.59,
        stock: 90
      },
      {
        id: 5,
        name: 'Darna Outfit',
        image: 'https://i.pinimg.com/originals/36/9c/8c/369c8c4c85c51f467b88d35f6dc879ca.jpg',
        desc: "Be strong and sexy -- be woman -- like Darna",
        price: 17.59,
        stock: 10
      },
      {
        id: 6,
        name: "Captain Marvel Outfit",
        image: 'https://i5.walmartimages.com/asr/81df1c6f-ba4b-46e2-8b8b-ccb212288991_1.799274a0b3593c3cc2c383e184c0e318.jpeg',
        desc: "A new breed of strong woman -- Captain Marvel",
        price: 24.49,
        stock: 20
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