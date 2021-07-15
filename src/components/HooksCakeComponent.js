import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'

function HooksCakeComponent() {

    //useSelector is hook for mapStatetoProps function 
    const numOfCakes = useSelector((state,ownProps) => state.cake.numOfCakes)

    // useDispatch is hook for mapDispatchtoProps function 
    const dispatch = useDispatch()

    const [number, setNumber] = useState()

    return (
        <div>
            <h1> Want to buy Larger Quantitty : </h1>
            <h1>Number of Cakes---{numOfCakes}</h1>
            <label>Enter Quantitty : </label>
            <input type="text" onChange={e => setNumber(e.target.value)} />&nbsp;
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
        </div>
    )
}

export default HooksCakeComponent
