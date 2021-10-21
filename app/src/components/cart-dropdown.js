import React from 'react'
import './styles/cart_dropdown.css'
import { FiArrowRight } from 'react-icons/fi'
import {useState} from 'react'

function CartDropdown() {
    
    const [color, setColor] = useState('#fff')

    const hover = (value) => {
        setColor(value)
    }

    return (
        <div className="cart-dropdown" >
            <div className="cart-dropdown-left" style={{padding: '0.1em 1em', width: '10%'}}>
                <div className="cart-dropdown-left-shape">
                    <FiArrowRight />
                </div>
                <div className="cart-dropdown-left-text" style={{color: '#fff'}}>
                    Items
                </div>
                <div className="cart-dropdown-left-shape">
                    <FiArrowRight />
                </div>
            </div>
            <div className="cart-dropdown-right">
                
            </div>
        </div>
    )
}

export default CartDropdown
