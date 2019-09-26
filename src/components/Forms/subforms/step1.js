import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
        }
        console.log(this.props.specialProps)

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

    setCheckbox4 = (event) => {
        this.setState({
            checkbox4: !this.state.checkbox4
        })
        this.props.handleCheckboxChange(event)
    }

    setCheckbox5 = (event) => {
        this.setState({
            checkbox5: !this.state.checkbox5
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
                            <Form.Control type="number" placeholder="" name="id" step="step1" onChange={this.props.handleSpecialChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Policy Start date</Form.Label>
                            <Form.Control type="date" placeholder="" name="policyStartDate" step="step1" onChange={this.props.handleSpecialChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername" >
                            <Form.Label>ID / Iqama expiry date</Form.Label>
                            <Form.Control type="month" placeholder="" name="idExpiryDate" step="step1" onChange={this.props.handleSpecialChange}></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Traffic Violations?</Form.Label>
                            <Form.Control as="select" name="trafficViolations" onChange={this.props.handleSpecialChange} value={this.props.specialProps.trafficViolations}>
                                <option >No</option>
                                <option >Yes</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    {this.props.specialProps.trafficViolations === "Yes" ?
                        <div key="inline-checkbox" className="mb-3" label="pick" step="step1" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", textAlign: "left" }} >
                            <Container>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            inline
                                            label="Speeding"
                                            type="checkbox"
                                            value="Speeding"
                                            onChange={this.setCheckbox1}
                                            name="verySpecial"
                                            checked={this.state.checkbox1 ? true : false}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Check
                                            inline
                                            label="Parking Violation"
                                            type="checkbox"
                                            value="Parking Violation"
                                            onChange={this.setCheckbox2}
                                            name="verySpecial"
                                            checked={this.state.checkbox2 ? true : false}
                                        />
                                    </Col>
                                    <Col>                            <Form.Check
                                        inline
                                        checked={this.state.checkbox3 ? true : false}
                                        value="Drifting"
                                        label="Drifting"
                                        type="checkbox"
                                        id={`inline-checkbox-3`}
                                        onChange={this.setCheckbox3}
                                        name="verySpecial" value="Drifting"
                                    />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={7}>
                                        <Form.Check
                                            inline
                                            checked={this.state.checkbox4 ? true : false}
                                            value="Driving in the Opposite Direction"
                                            label="Driving in the Opposite Direction"
                                            type="checkbox"
                                            id={`inline-checkbox-4`}
                                            onChange={this.setCheckbox4}
                                            name="verySpecial" value="Driving in the Opposite Direction"
                                        />
                                    </Col>
                                    <Col>                           <Form.Check
                                        inline
                                        checked={this.state.checkbox5 ? true : false}
                                        value="Running Red Light"
                                        label="Running Red Light"
                                        type="checkbox"
                                        id={`inline-checkbox-5`}
                                        onChange={this.setCheckbox5}
                                        name="verySpecial" value="Running Red Light"
                                    />
                                    </Col>

                                </Row>
                            </Container>
                        </div>
                        : null}
                    <Form.Row>
                        <Form.Group as={Col} step="step1">
                            <Form.Label step="step1">Education</Form.Label>
                            <Form.Control as="select" name="education" step="step1" onChange={this.props.handleSpecialChange}
                                defaultValue={this.props.specialProps.education || "placeholder"}>
                                <option value="placeholder"
                                    disabled >Choose...</option>
                                <option value="None" >None</option>
                                <option value="High School" >High School</option>
                                <option value="Diploma" >Diploma</option>
                                <option value="Bachelor" >Bachelor</option>
                                <option value="Master" >Master</option>
                                <option value="PhD" >PhD</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} step="step1">
                            <Form.Label step="step1">Occupation</Form.Label>
                            <Form.Control as="select" name="occupation" step="step1" onChange={this.props.handleSpecialChange}
                                defaultValue={this.props.specialProps.occupation || "placeholder"}>
                                <option value="placeholder"
                                    disabled >Choose...</option>
                                <option value="Government Sector" >Government Sector</option>
                                <option value="Private Sector" >Private Sector</option>
                                <option value="Private Business" >Private Business</option>
                                <option value="Student" >Student</option>
                                <option value="Retired" >Retired</option>
                                <option value="Unemployed" >Unemployed</option>
                                <option value="Works for Individuals" >Works for Individuals</option>

                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control as="select" name="married" onChange={this.props.handleSpecialChange} value={this.props.specialProps.married}>
                                <option >No</option>
                                <option >Yes</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Number of Children below 16</Form.Label>
                            <Form.Control type="number" name = "numberOfChildren"onChange={this.props.handleSpecialChange} disabled = {this.props.specialProps.married ==="Yes" ? false: true}>
                            </Form.Control>
                        </Form.Group>

                    </Form.Row>
                   

                </div>

            );
        } else {
            return null;
        }
    }
}