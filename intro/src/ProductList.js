import React, { Component } from 'react'

export default class ProductList extends Component {
    constructor(props){
        super(props);
        state:{}
    }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}--{this.props.currentCategory}</h3>
      </div>
    )
  }
}
