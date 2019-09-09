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
        if (this.props.currentStep === 1) {
            // document.getElementById('masterForm').style.width = "45%";
            // document.getElementById('masterForm').style.left = "50%";
            return (
                <div className='subform' >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>National ID / Iqama</Form.Label>
                            <Form.Control type="input" placeholder="" name="id" onChange={this.props.handleChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Policy Start date</Form.Label>
                            <Form.Control type="date" placeholder="" name="policyStartDate" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>ID / Iqama expiry date</Form.Label>
                            <Form.Control type="month" placeholder="" name="idExpiryDate" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                           
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>special</Form.Label>
                            <Form.Control as="select"  name="special" onChange={this.props.handleSpecialChange}>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            </Form.Control>
                        </Form.Group>
                        
                    </Form.Row>
                    {this.props.specialProps.special === "3" ? 
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>Step1 info</Form.Label>
                            <Form.Control type="input" placeholder="" name="id" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Step1 info</Form.Label>
                            <Form.Control type="date" placeholder="" name="date" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    : null}





                </div>

            );
        } else {
            return null;
        }
    }
}