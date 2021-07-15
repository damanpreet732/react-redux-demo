import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyIceCream from '../redux/iceCream/iceCreamAction'

function IceCreamContainer() {
    
    //useSelector is hook for mapStatetoProps function 
    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
    
    // useDispatch is hook for mapDispatchtoProps function 
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>Number of IceCreams---{numOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainer
