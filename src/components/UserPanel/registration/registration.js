import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import '../../Forms/form.css'



export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: true,
            fields: {
                email: "",
                phone: "",
                password: ""
            }
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.renderOnDemand();
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.state.fields[name] = value;
        // this.setState({
        //     fields{
        //     [name] : value
        //     }
        // });
        console.log("reg: ", this.state);
    }

    renderOnDemand = () =>{
        this.setState({
            render : !this.state.render
        });
        console.log("submit: ", this.state);
    }

    render() {
        if (this.props.display === "registration") {
            return (
                <div className="form" style={{textAlign: "left"}}>
                    <Form onSubmit ={this.handleSubmit}>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  type="" placeholder="Enter your email" name= "email" onChange = {this.handleChange} defaultValue = "123@mail.com"/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter your phone number" name= "phone" onChange = {this.handleChange}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your Password" name = "password" onChange = {this.handleChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Check type="checkbox" label="I agree to the terms of service" />
                        </Form.Group>
                        <Button  type="submit">
                            Submit
  </Button>
                    </Form>
                <p>{this.state.fields.email}</p>
                <p>{this.state.fields.phone}</p>
                <p>{this.state.fields.password}</p>
                </div>
            );
        } else {
            return null;
        }
    }

}