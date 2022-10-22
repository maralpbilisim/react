import React, { Component } from 'react'
import ClassB from './classB'

export default class classA extends Component {
  render() {
    return (
      <div>
        <p>{this.props.list.join(",")}</p>
        <br></br>
        <hr/>
        <ClassB date={Date()}/>
      </div>
    )
  }
}
