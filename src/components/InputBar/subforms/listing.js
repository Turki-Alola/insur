import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import Logo from '../logo.ico'
import './results.css'
import '../form.css';

export default class Listing extends React.Component{


    render(){
        return(
        <Accordion defaultActiveKey="1" variant = "list-group-flush" >
                            <Card bg="transparent"  >                           
                                <Card.Header>
                                <div className="listing">
                                    <div>
                                    <img src={Logo} alt="" className="logo" />
                                    </div>
                                    <div className="collapsibleLink" style= {{ left: "-5px", top: "30px", position: "relative" }} >
                                    <Accordion.Toggle as={Button}  variant="link" eventKey="0">
                                        More info
                                    </Accordion.Toggle>
                                    </div>
                                    <div>                                   
                                        <span className="companyName"> CompanyCompanyCompany</span>
                                    </div>
                                    <div className = "price container"> 
                                        <span className="price">12331.00 SR</span>
                                        <div>
                                        </div>
                                    </div>
                                </div>

                            </Card.Header>
                                <Accordion.Collapse eventKey="0" as={Button}>
                                    <Card.Body className = "description">
                                    <p>akjdnkdns</p>
                                    <p>akjdnkdns</p>
                                    <p>akjdnkdns</p>
                                    <p>akjdnkdns</p>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        </Accordion>
        );
    }
}