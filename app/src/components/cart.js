import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import './styles/cart.css'

function Cart() {
    return (
        <div className="cart-wrapper">
            <FiShoppingCart className="cart" />
        </div>
    )
}

export default Cart
