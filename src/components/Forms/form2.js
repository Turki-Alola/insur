import React from 'react';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import Toggle from 'react-toggle'
// import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/Spinner'
// import Col from 'react-bootstrap/Col';
import './form.css';
import "react-toggle/style.css"
import Step1 from './subforms/step1';
import Step2 from './subforms/step2';
import Step3 from './subforms/step3';
import Results from './subforms/results';
import ProgressBar from './subforms/progress';




export default class form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: this.props.currentStep,
            display: this.props.display,
            submitted: false,
            displayResults: false,
            insurType: false,
            change: true,
            form: {
                checkboxes: {
                    trafficTickets: []
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
        // console.log(this.state)
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        //sub-state work around

        this.state.form[name] = value;
        // console.log("name: ", name);
        // console.log("value: ", value);
        // console.log("event: ", event.target.value);
        // console.log("change: ",this.state.change)
        console.log(this.state)
    }
    handleSpecialChange = (event) => {
        const { name, value } = event.target;
        //sub-state work around
        this.setState({
            change: !this.state.change
        })
        this.state.form[name] = value;
        console.log("name: ", name);
        console.log("value: ", value);
        console.log(this.state);
        // console.log("event: ", event.target.value);
        // console.log("change: ", this.state.change)
    }
    handleCheckboxChange = (event) => {
        const value = event.target.value;
        let list = this.state.form.checkboxes.trafficTickets;


        if (list.includes(value)) {
            list.splice(list.indexOf(value), 1)
        } else {
            list.push(value);
        }
        console.log("Value: ", value);
        console.log("List: ", list);
        console.log("State: ", this.state)


    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const { currentStep, display, id, date, submitted } = this.state
        console.log(this.state)
        this.setState({
            submitted: !this.state.submitted
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
        // console.log(currentStep);
        // console.log(this.state);

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
    handleToggleChange = () => {
        this.setState({
            insurType: !this.state.insurType
        })
    }

    render() {
        if (this.props.display == 'form') {
            return (
                <div>
                    <form onSubmit={this.handleSubmit} className="form" id="masterForm" style={{
                        width: this.state.currentStep === 4 ? "95%" : "45%",
                        left: this.state.currentStep === 4 ? "3%" : "50%"
                    }}>
                        {this.state.currentStep < 4 ?
                            <label
                                style={{ position: "absolute", left: "5%" }}
                            >
                                <Toggle
                                    defaultChecked={this.state.insurType}
                                    onChange={this.handleToggleChange}
                                    icons={false}
                                    style={{}}

                                />
                                <span style={{ paddingLeft: "10px" }}>{this.state.insurType ? "Premium" : "Third Party"}</span>
                            </label>

                            : null}
                        <ProgressBar
                            currentStep={this.state.currentStep}
                        />
                        <Step1
                            handleChange={this.handleChange}
                            handleSpecialChange={this.handleSpecialChange}
                            handleCheckboxChange={this.handleCheckboxChange}
                            display={this.state.display}
                            currentStep={this.state.currentStep}
                            specialProps={this.state.form}
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
                            displayResults={this.state.displayResults}
                            currentStep={this.state.currentStep}
                        />

                        {this.getPrev}
                        {this.getNext}
                    </form>
                </div>
            )
        } else {
            return null;
        }
    }
}
