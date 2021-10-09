import React from 'react'
import AddItem from './add_item'
import { useState } from 'react'
import OutsideAlerter from './close_dropdown'
import store from '../redux/store'
import { setCounter } from '../redux/counter/couter-reducer'
import { connect } from 'react-redux'

function Main(props) {

    const [addItemVisible, setAddItemVisible] = useState(false)
    console.log(store.getState())
    // props.setCounter(1)

    return (
        <div>
            <h1>Main</h1>
            <button className="btn-add" onClick={() => setAddItemVisible(true)}>Add Item</button>
            {addItemVisible && <AddItem visiblity={() => setAddItemVisible(false)} />}
            {/* <div>{props.counter}</div> */}
            <button onClick={props.setCounter(1)}>add</button>
            {/* <OutsideAlerter /> */}
        </div>
    )
}

const mapStateToProps = ({state}) => ({
    currentUser: state
  })

const mapDispatchToProps = dispatch => ({
    setCounter: counter => dispatch(setCounter(counter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
