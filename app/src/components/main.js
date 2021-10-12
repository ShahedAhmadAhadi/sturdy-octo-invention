import React from 'react'
import AddItem from './add_item'
import { useState } from 'react'
import OutsideAlerter from './close_dropdown'
import store from '../redux/store'
import {  counterSlice, decrement } from '../redux/counter/couter-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { increment, counter } from './../redux/counter/couter-reducer'
import {textReducer} from './../redux/text/text-reducer'

function Main(props) {
    const count = useSelector(counter)
    const [addItemVisible, setAddItemVisible] = useState(false)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    // console.log(counterSlice.actions.increment())
    // props.setCounter(1)
    // console.log(count())

    const value = (e) => {
        setText(e.target.value())
    }

    return (
        <div>
            <h1>Main</h1>
            <button className="btn-add" onClick={() => setAddItemVisible(true)}>Add Item</button>
            {addItemVisible && <AddItem visiblity={() => setAddItemVisible(false)} />}
            {/* <div>{props.counter}</div> */}
            <button onClick={() => dispatch(increment())}>{count}</button>
            <button onClick={() => dispatch(decrement())}>{count}</button>
            {/* <OutsideAlerter /> */}
            <div>
                <input type="text" value={()=> value()} />
                <button on>send</button>
                <span></span>
            </div>
        </div>
    )
}

export default Main
