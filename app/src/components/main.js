import React from 'react'
import AddItem from './add_item'
import { useState } from 'react'

function Main() {

    const [addItemVisible, setAddItemVisible] = useState(false)

    const addItemShow = () => {
        setAddItemVisible(true)
    }

    return (
        <div>
            <h1>Main</h1>
            <button className="btn-add" onClick={() => addItemShow()}>Add Item</button>
            {addItemVisible && <AddItem />}
        </div>
    )
}

export default Main
