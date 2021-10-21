import React from 'react'
import './styles/cart_dropdown.css'
import { FiArrowRight } from 'react-icons/fi'

function CartDropdown() {
    return (
        <div className="cart-dropdown" >
            <div className="cart-dropdown-right" style={{padding: '0.1em 1em', width: '10%'}}>
                <div className="cart-dropdown-right-shape">
                    <FiArrowRight />
                </div>
                <div className="cart-dropdown-right-text">
                    Items
                </div>
                <div className="cart-dropdown-right-shape">
                    <FiArrowRight />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default CartDropdown
