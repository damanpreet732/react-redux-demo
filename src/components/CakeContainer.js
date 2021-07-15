import React from 'react'

import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cakes---{props.numOfCakes}</h1>
            <button onClick={props.buyCake}> Buy Cake </button>
        </div>
    )
}

// adds store state to incoming props 
const mapStatetoProps = (state,ownProps) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

// add dispactch action creaters to props 
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}

// connect function allows us to do all the stuff like accessing state and dispatch function
// basically connect redux --- react 
export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer)
