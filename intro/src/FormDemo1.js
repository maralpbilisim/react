import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state={username:"",city:""}
    onChangeHandler=(event)=>{
    //this.setState({userName:event.target.value})
    let name=event.target.name;
    let value=event.target.value;
    this.setState({[name]:value})
    }
    onSubmitHandler=(event)=>{
      event.preventDefault();
     alert(this.state.username)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>City</h3>
            <input name="username"onChange={this.onChangeHandler} type="text"></input>
            <h3>{this.state.city}</h3>
            
            <h3>User Name</h3>
            <input name="city" onChange={this.onChangeHandler} type="text"></input>
            <h3>{this.state.username}</h3>
            <input type="submit" value="kaydet"></input>
        </form>
      </div>
    )
  }
}
