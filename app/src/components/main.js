import React from 'react'
import AddItem from './add_item'
import { useState } from 'react'

function Main() {

    const [addItemVisible, setAddItemVisible] = useState(false)

    return (
        <div>
            <h1>Main</h1>
            <button className="btn-add" onClick={() => setAddItemVisible(true)}>Add Item</button>
            {addItemVisible && <AddItem visiblity={() => setAddItemVisible(false)} />}
        </div>
    )
}

export default Main
