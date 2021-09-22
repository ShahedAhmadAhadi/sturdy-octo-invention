import React from 'react'

function AddItem() {
    return (
        <div className="add-item-wrapper">
            <div className="add-item-modal">
                <form>
                    <input type="text" placeholder="item-name" />
                    <input type="number" placeholder="price" step=".00" />
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
