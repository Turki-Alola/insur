import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import { Scrollbars } from 'react-custom-scrollbars';
// import Media from 'react-bootstrap/Media';
// import Table from 'react-bootstrap/Table';


// import Logo from '../logo.ico'
import './results.css'
import Listing from './listing'
import '../form.css';

export default class Step1 extends React.Component {
    

    render() {
        if (this.props.displayResults && this.props.currentStep === 4) {
            // document.getElementById('masterForm').style.width = "95%";
            // document.getElementById('masterForm').style.left = "3%";
            return (
                <div className=""  >
                    <Scrollbars
                        autoHeight
                        autoHeightMax={window.innerHeight * 0.65}
                        universal
                    >
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                        <Listing />
                    </Scrollbars>
                </div>

            )
        } else {
            return null;
        }
    }
}