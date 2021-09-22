import React from 'react'
import './styles/styles.css'

function AddItem() {
    return (
        <div className="add-item-wrapper" style={{ width: '100%', height: '100vh', background: '#00000033', position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center' }}>
            <div className="add-item-modal" style={{ background: '#fff', alignSelf: 'center' }}>
                <form>
                    <input type="text" placeholder="item-name" />
                    <input type="text" placeholder="discription" />
                    <input type="number" placeholder="price" step=".01" />
                    <select name="Catagory">
                        <option value="fruit">Fruit</option>
                        <option>Fruit</option>
                        <option>Fruit</option>
                    </select>
                    <input type="file" />
                    <input type="number" placeholder="amount" />
                </form>
            </div>
        </div>
    )
}

export default AddItem
