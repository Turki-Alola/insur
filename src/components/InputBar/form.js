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
            <div className=''>

                {/* <button onClick={this.props.onClick}>show</button> */}
                <div className='form' style={{ opacity: this.props.display ?  "1" : "0" }}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
