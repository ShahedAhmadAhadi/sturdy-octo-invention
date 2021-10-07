import React from 'react'
import { useState } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import './styles/cart.css'

function Cart() {

    const [color, setColor] = useState('#e9dea2')

    const hover = (value) => {
        setColor(value)
    }

    console.log(color)
    return (
        <div className="cart-wrapper" onMouseEnter={() => hover('#840032')} onMouseLeave={() => hover('#e9dea2')}>
            <FiShoppingCart className="cart" style={{color: color}} />
            <div className="cart-items-num">0</div>
            <div className="cart">

            </div>
        </div>
    )
}

export default Cart
