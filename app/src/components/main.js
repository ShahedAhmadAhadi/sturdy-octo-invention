import React from 'react'
import AddItem from './add_item'
import { useState } from 'react'
import OutsideAlerter from './close_dropdown'
import store from '../redux/store'
import { counterSlice } from '../redux/counter/couter-reducer'
import { useDispatch } from 'react-redux'
import { increment } from '@firebase/firestore'

function Main(props) {

    const [addItemVisible, setAddItemVisible] = useState(false)
    const dispatch = useDispatch()
    // console.log(counterSlice.actions.increment())
    // props.setCounter(1)

    return (
        <div>
            <h1>Main</h1>
            <button className="btn-add" onClick={() => setAddItemVisible(true)}>Add Item</button>
            {addItemVisible && <AddItem visiblity={() => setAddItemVisible(false)} />}
            {/* <div>{props.counter}</div> */}
            <button onClick={() => dispatch(increment())}>add</button>
            {/* <OutsideAlerter /> */}
        </div>
    )
}

export default Main
