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
            display: this.props.display,
            checkbox1: false,
            checkbox2: false,
            checkbox3: false
        }

    }
    setCheckbox1 = (event) => {
        this.setState({
            checkbox1: !this.state.checkbox1
        })
        this.props.handleCheckboxChange(event)
    }
    setCheckbox2 = (event) => {
        this.setState({
            checkbox2: !this.state.checkbox2
        })
        this.props.handleCheckboxChange(event)
    }
    setCheckbox3 = (event) => {
        this.setState({
            checkbox3: !this.state.checkbox3
        })
        this.props.handleCheckboxChange(event)
    }

    render() {
        if (this.props.currentStep === 1) {
            // document.getElementById('masterForm').style.width = "45%";
            // document.getElementById('masterForm').style.left = "50%";
            let i = 0;
            return (
                <div className='subform' >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>National ID / Iqama</Form.Label>
                            <Form.Control type="input" placeholder="" name="id" step = "step1" onChange={this.props.handleChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Policy Start date</Form.Label>
                            <Form.Control type="date" placeholder="" name="policyStartDate" step = "step1" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>ID / Iqama expiry date</Form.Label>
                            <Form.Control type="month" placeholder="" name="idExpiryDate" step = "step1" onChange={this.props.handleChange}></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>special</Form.Label>
                            <Form.Control as="select" name="special" onChange={this.props.handleSpecialChange} value = {this.props.specialProps.special}>
                                <option >No</option>
                                <option >Yes</option>
                            </Form.Control>
                        </Form.Group>

                    </Form.Row>
                    {this.props.specialProps.special === "Yes" ?
                        <div key="inline-checkbox" className="mb-3" label="pick" >
                            <Form.Check 
                                inline
                                label="1"
                                type="checkbox"
                                value="1"
                                onChange={this.setCheckbox1}
                                name="verySpecial"
                                checked={this.state.checkbox1 ? true : false}
                            />
                            <Form.Check
                                inline
                                label="2"
                                type="checkbox"
                                value="2"
                                onChange={this.setCheckbox2}
                                name="verySpecial"
                                checked = {this.state.checkbox2 ? true: false}
                            />
                            <Form.Check
                                inline
                                checked = {this.state.checkbox3 ? true: false}
                                value="3"
                                label="3"
                                type="checkbox"
                                id={`inline-checkbox-3`}
                                onChange={this.setCheckbox3}
                                name="verySpecial" value="3"
                            />
                        </div>
                        : null}
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
                    </Form.Row>

                </div>

            );
        } else {
            return null;
        }
    }
}