import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'

class DecreaseCounter extends Component {
  render() {
    return (
      <div><button on onClick={e=>{
        this.props.dispatch(decreaseCounter())
    }}>1 azalt</button></div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return{actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter)