import React from 'react'
import AddItem from './add_item'
import { useState } from 'react'
import OutsideAlerter from './close_dropdown'
import store from '../redux/store'
import {  counterSlice, decrement } from '../redux/counter/couter-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { increment, counter } from './../redux/counter/couter-reducer'
import {textstate} from './../redux/text/text-reducer'
import { setTextState } from './../redux/text/text-reducer'
import {connect} from 'react-redux'

function Main(props) {
    const count = useSelector(counter)
    const [addItemVisible, setAddItemVisible] = useState(false)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const textState = useSelector(textstate)
    // console.log(counterSlice.actions.increment())
    // props.setCounter(1)
    // console.log(count())

    return (
        <div>
            <h1>Main</h1>
            <button className="btn-add" onClick={() => setAddItemVisible(true)}>Add Item</button>
            {addItemVisible && <AddItem visiblity={() => setAddItemVisible(false)} />}
            {/* <div>{props.counter}</div> */}
            {/* <button onClick={() => dispatch(increment())}>{count}</button>
            <button onClick={() => dispatch(decrement())}>{count}</button>
            {/* <OutsideAlerter /> */}
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => {dispatch(setTextState("TEXT", text)); setText('')}}>send</button>
                <button onClick={() => {dispatch(setTextState("NEW_TEXT", text)); setText('')}}>new send</button>
                <span>{textState}</span>
            </div> */}
        </div>.LDKjf
    )
}


  export default Main;

// export default Main
