import React from 'react'
import './styles/cart_dropdown.css'

function CartDropdown() {
    return (
        <div className="cart-dropdown" onMouseOver={(e) => {e.stopPropagation()}} onMouseUp={(e) => {e.stopPropagation()}} onMouseEnter={(e) => {e.stopPropagation()}} onMouseUpCapture={(e) => {e.stopPropagation()}} onMouseOut={(e) => {e.stopPropagation()}}>
            CartDropdown
        </div>
    )
}

export default CartDropdown
