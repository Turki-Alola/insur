import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'


export default class progressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: this.props.currentStep
        }
    }

    render() {
        if (this.props.currentStep <= 3) {
            // console.log("progress", this.props.currentStep)
            
            return (
                <div style={{ padding: '10px' }}>
                    <p>Step {this.props.currentStep}</p>
                    <ProgressBar now={((this.props.currentStep / 4) * 100).toFixed(0)} label={((this.props.currentStep / 4) * 100).toFixed(0) + "%"} />
                </div>
            );
        } else {
            return null;
        }
    }
}