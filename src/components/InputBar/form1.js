import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Col from 'react-bootstrap/Col';
import './form.css';

export default class form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: this.props.display }
    }

    // display = () => {
    //     console.log(this.state.display);
    //     this.setState({
    //         display: !this.state.display
    //     })
    // }
    // this.render();
    //    if( this.state.display === false){
    //        this.setState({
    //            display: true
    //        })
    //    } else{
    //        this.setState({
    //            display: false
    //        })
    //    }
    // }
    render() {
        return (
            <React.Fragment>

                    {/* <button onClick={this.props.onClick}>show</button> */}
                    <div className='form' style={{ opacity: this.props.display ? "1" : "0" }}>
                        <Form >
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>National ID / Iqama</Form.Label>
                                    <Form.Control type="input" placeholder=""></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Policy Start Date</Form.Label>
                                    <Form.Control type="date" placeholder=""></Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>National ID / Iqama Expiry Date </Form.Label>
                                    <Form.Control type="month-arabic" placeholder=""></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder=""></Form.Control>
                                </Form.Group>

                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>National ID / Iqama</Form.Label>
                                    <Form.Control type="input" placeholder=""></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Policy Start Date</Form.Label>
                                    <Form.Control type="date" placeholder=""></Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>National ID / Iqama Expiry Date </Form.Label>
                                    <Form.Control type="month" placeholder=""></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder=""></Form.Control>
                                </Form.Group>

                            </Form.Row>
                            <Button style={{float: "left"}}>Previous</Button>
                                <Button style={{float: "right"}}>Next</Button>
                        </Form>
                    </div>



            </React.Fragment>
        )
    }
}
