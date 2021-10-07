import React from 'react'
import './styles/styles.css'

function AddItem(props) {
    console.log(props)



    return (
        <div onClick={() => props.visiblity()} className="add-item-wrapper" style={{ width: '100%', height: '100vh', background: "#ffffffbb", position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center' }}>
            <div onClick={e => e.stopPropagation()} className="add-item-modal" style={{ background: '#fff', alignSelf: 'center', borderRadius: '7px' }}>
                <form>
                    <button onClick={() => props.visiblity(false)} style={{ width: '18px', padding: '0', height: '18px', borderRadius: '50%', border: 'none', alignSelf: 'flex-end', cursor: 'pointer' }} className="btn-close">&times;</button>
                    <input type="text" placeholder="item-name" />
                    <input type="text" placeholder="discription" />
                    <input type="number" placeholder="price" step=".01" />
                    <select name="Catagory">
                        <option disabled selected hidden>Catagory</option>
                        <option>Fruit</option>
                        <option>Fruit</option>
                    </select>
                    <input type="file" />
                    <input type="number" placeholder="amount" />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    )
}

export default AddItem
