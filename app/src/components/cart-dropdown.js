import React from 'react'
import './styles/cart_dropdown.css'
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineShopping } from 'react-icons/ai'
import {useState} from 'react'

function CartDropdown() {

    return (
        <div className="cart-dropdown" >
            <div className="cart-dropdown-left" style={{padding: '1em'}}>
                    <AiOutlineShopping />
            </div>
            <div className="cart-dropdown-right" style={{padding: '1em 1em'}}>
                items
            </div>
        </div>
    )
}

export default CartDropdown
