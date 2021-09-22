import React from 'react'
import AddItem from './add_item'
import { useState } from 'react'

function Main() {

    const [addItemVisible, setAddItemVisible] = useState(false)

    const addItemShow = (value) => {
        setAddItemVisible(value)
    }

    return (
        <div>
            <h1>Main</h1>
            <button className="btn-add" onClick={() => addItemShow(true)}>Add Item</button>
            {addItemVisible && <AddItem visiblity={() => addItemShow()} />}
        </div>
    )
}

export default Main
