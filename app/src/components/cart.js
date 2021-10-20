import React from 'react'
import { useState } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import CartDropdown from './cart-dropdown'
import './styles/cart.css'

function Cart() {

    const [color, setColor] = useState('#e9dea2')

    const hover = (value) => {
        setColor(value)
    }

    console.log(color)
    return (
        <div className="cart-main">

            <div className="cart-wrapper" onMouseEnter={() => hover('#840032')} onMouseLeave={() => hover('#e9dea2')}>
                <FiShoppingCart className="cart" style={{color: color}} />
                <div className="cart-items-num">0</div>
            </div>
                <CartDropdown />
        </div>
    )
}

export default Cart
