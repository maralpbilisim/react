import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'

 class IncreaseByTwo extends Component {
  render() {
    return (
        <button on onClick={e=>{
            this.props.dispatch(increaseByTwoCounter())
        }}>2 arttır</button>
    )
  }
}
function mapDispatchToProps(dispatch){
    return{actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwo)