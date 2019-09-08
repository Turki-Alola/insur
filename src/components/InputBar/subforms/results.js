import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Scrollbars } from 'react-custom-scrollbars';
import Media from 'react-bootstrap/Media';
import Table from 'react-bootstrap/Table';


import Logo from '../logo.ico'
import './results.css'
import Listing from './listing.js'
import '../form.css';

export default class Step1 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.displayResults) {
            document.getElementById('masterForm').style.width = "95%";
            document.getElementById('masterForm').style.left = "3%";
            return (
                <div className="listing" >
                    <Scrollbars
                        autoHeight
                        autoHeightMax={500}
                        universal
                    >
                       <Listing/> 
                       <Listing/> 
                       <Listing/> 
                       <Listing/> 
                       <Listing/> 
                       <Listing/> 
                       <Listing/> 
                       <Listing/> 
                    </Scrollbars>
                    {/* <ul className="list-unstyled">
                        <Media as="div">
                            <img
                                width={64}
                                height={64}
                                className="align-self-start mr-3"
                                src={Logo}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Price</h5>
                                <p>
                                    Company
                                </p>
                            </Media.Body>
                        </Media>
                    </ul> */}
                </div>

            )
        } else {
            return null;
        }
    }
}