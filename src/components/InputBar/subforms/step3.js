import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import '../form.css';

export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: this.props.display
        }
    }

    render() {
        if (this.props.currentStep === 3) {
            document.getElementById('masterForm').style.width = "45%";
            document.getElementById('masterForm').style.left = "50%";
            // document.getElementById('masterForm').style.transition= "650ms";
            return (
                <div className='subform' >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Step3 info</Form.Label>
                            <Form.Control type="input" placeholder="" name="id" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Step3 info</Form.Label>
                            <Form.Control type="date" placeholder="" name="date" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>Step3 info</Form.Label>
                            <Form.Control type="input" placeholder="" name="id" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Step3 info</Form.Label>
                            <Form.Control type="date" placeholder="" name="date" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>Step3 info</Form.Label>
                            <Form.Control type="input" placeholder="" name="id" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>

                    </Form.Row>

                    <Form.Group controlId="formBasicChecbox" style={{ position: "absolute" }}>
                        <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                    </Form.Group>



                </div>

            );
        } else {
            return null;
        }
    }
}