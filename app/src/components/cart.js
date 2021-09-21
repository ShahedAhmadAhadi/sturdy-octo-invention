import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import './styles/cart.css'

function Cart() {
    return (
        <div className="cart-wrapper">
            <FiShoppingCart className="cart" />
            <div className="cart-items-num">2</div>
            <div className="cart">
                
            </div>
        </div>
    )
}

export default Cart
