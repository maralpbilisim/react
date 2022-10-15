import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import alertify from "alertifyjs"

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }
    handleChange = (event) => {
        //this.setState({userName:event.target.value})
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + " email eklendi")
        alertify.success(this.state.password + " email eklendi")
        alertify.success(this.state.city + " email eklendi")
        alertify.success(this.state.description + " email eklendi")
    }

    render() {
        return (
            <div><Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" onChange={this.handleChange} name="email" id="email" placeholder='Enter email'></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="password">password</Label>
                    <Input type="password" onChange={this.handleChange} name="password" id="password" placeholder='Enter password'></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="description">description</Label>
                    <Input type="textarea" onChange={this.handleChange} name="description" id="description" placeholder='Enter description'></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="city">city</Label>
                    <Input type="select" onChange={this.handleChange} name="city" id="city" placeholder='Enter description'>
                        <option>Ankara</option>
                        <option>İstanbul</option>
                        <option>Adana</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Save</Button>
            </Form></div>
        )
    }
}
