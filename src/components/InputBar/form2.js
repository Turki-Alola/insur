import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Toggle from 'react-toggle'
// import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/Spinner'
// import Col from 'react-bootstrap/Col';
import './form.css';
import "react-toggle/style.css"
import Step1 from './subforms/step1.js';
import Step2 from './subforms/step2.js';
import Step3 from './subforms/step3.js';
import Results from './subforms/results.js';
import ProgressBar from './progress.js';




export default class form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            display: this.props.display,
            id: '',
            date: '',
            submitted: false,
            displayResults: false,
            insurType: "Third Party"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        // console.log("name: ", name);
        // console.log("value: ", value);
        // console.log("event: ", event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { currentStep, display, id, date, submitted } = this.state
        console.log(this.state)
        this.setState({
            submitted: !submitted
        })
        setTimeout(() => {
            this.setState({
                displayResults: true,
                currentStep: this.state.currentStep += 1
            })
        }, 0);

    }
    next = () => {
        let currentStep = this.state.currentStep;
        if (currentStep >= 2) {
            this.setState({
                currentStep: 3
            });
        } else {
            this.setState({
                currentStep: currentStep + 1
            });
        }
    }

    prev = () => {
        let currentStep = this.state.currentStep;
        if (currentStep <= 4 && this.state.displayResults) {
            this.setState({
                displayResults: false,
                submitted: false
            })
        }
        if (currentStep <= 1) {
            this.setState({
                currentStep: 1
            });
        } else {
            this.setState({
                currentStep: currentStep - 1
            });
        }
    }

    get getNext() {
        let currentStep = this.state.currentStep;
        let submitted = this.state.submitted;
        console.log(currentStep);
        console.log(this.state);

        if (submitted === true && currentStep === 3) {
            // this.setState({
            //     submitted: !submitted
            // })
            return (
                <Button variant="primary" style={{ right: "5%", bottom: "3%", position: "absolute" }} size="lg" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Finalizing...
                </Button>

            );
        } else if (currentStep < 3) {
            return (
                <Button style={{ right: "5%", bottom: "3%", position: "absolute" }} onClick={this.next} size="lg" >Next</Button>
            );
        } else if (currentStep === 3) {
            return (
                <Button style={{ right: "5%", bottom: "3%", position: "absolute" }} onClick={this.handleSubmit} size="lg">Submit</Button>
            );
        } else if (currentStep > 3) {
            return null;
        }
    }

    get getPrev() {
        let currentStep = this.state.currentStep;
        // if (this.state.displayResults){
        //     this.setState({
        //         displayResults: false,
        //         submitted: false
        //     })
        // }
        if (currentStep > 1) {
            return (
                <Button style={{ left: "5%", bottom: "3%", position: "absolute" }} onClick={this.prev} size="lg">Previous</Button>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form" style={{ opacity: this.props.display ? "1" : "0" }} id="masterForm">
                    {this.state.currentStep < 4 ?

                        <label
                            style={{ position: "absolute", left: "5%" }}
                        >
                            <Toggle
                                defaultChecked={this.state.baconIsReady}
                                onChange={this.handleBaconChange}
                                icons={false}

                            />
                            <span style={{ paddingLeft: "5px", top: "50%" }}>{this.state.insurType}</span>
                        </label>
                        : null}
                    <ProgressBar
                        currentStep={this.state.currentStep}
                    />
                    <Step1
                        handleChange={this.handleChange}
                        display={this.state.display}
                        currentStep={this.state.currentStep}
                    />
                    <Step2
                        handleChange={this.handleChange}
                        display={this.state.display}
                        currentStep={this.state.currentStep}
                    />
                    <Step3
                        handleChange={this.handleChange}
                        display={this.state.display}
                        currentStep={this.state.currentStep}
                    />
                    <Results
                        handleChange={this.handleChange}
                        display={this.state.display}
                        displayResults={this.state.displayResults}
                    />

                    {this.getPrev}
                    {this.getNext}
                </form>
            </div>
        )
    }
}
