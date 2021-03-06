import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';

import '../form.css';

export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: this.props.display
        }
    }

    render() {
        if (this.props.currentStep === 2) {
            // document.getElementById('masterForm').style.width = "45%";
            // document.getElementById('masterForm').style.left = "50%";
            return (
                <div className='subform' >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Step2 info</Form.Label>
                            <Form.Control type="input" placeholder="" name="step2-id" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Step2 info</Form.Label>
                            <Form.Control type="date" placeholder="" name="step2-date" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>Step2 info</Form.Label>
                            <Form.Control type="input" placeholder="" name="step2-ooid" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Policy Start Date</Form.Label>
                            <Form.Control type="date" placeholder="" name="step2--date" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>Step2 info22</Form.Label>
                            <Form.Control type="input" placeholder="" name="id2" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Step2 info</Form.Label>
                            <Form.Control type="date" placeholder="" name="date2" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>Step2 info</Form.Label>
                            <Form.Control type="input" placeholder="" name="id" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Step2 info</Form.Label>
                            <Form.Control type="date" placeholder="" name="date" step = "step2" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>



                </div>

            );
        } else {
            return null;
        }
    }
}