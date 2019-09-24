import React, { Component } from 'react';
import './header.css'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Vision from '../Assets/2030.png'
import ReactTooltip from 'react-tooltip'
// import { MDBIcon, MDBContainer } from 'mdbreact';
//import Nav from 'react-bootstrap/Navbar'
//import Badge from 'react-bootstrap/Badge'
//import { MDBBtn } from "mdbreact";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdown: false
        };
    }
    toggle() {
        console.log("dropdown: ", this.state.dropdown)
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

   


    render() {
        return (
            <div >
                <ul className="">
                    <li ><ButtonDropdown isOpen={this.state.dropdown} toggle={this.toggle} >
                        <DropdownToggle caret  color="outline-info" className="btn-circle">
                            Mohammed
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Design TBD</DropdownItem>
                            <DropdownItem onClick = {this.props.registration}>Register </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Logout</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown></li>

                    <li><Button color="outline-success" id="btn-circle" data-tip="Polices in good standings" value = "goodStanding" onClick= {this.props.onClick}>
                         3

                        <ReactTooltip place="bottom" type="light" effect="solid" />
                    </Button></li>

                    <li><Button color="outline-warning" id="btn-circle" data-tip="Policies near expiry" value = "nearExpiry" onClick= {this.props.onClick}>
                        2 

                        <ReactTooltip place="bottom" type="light" effect="solid" />

                    </Button></li>
                    <li><Button color="outline-danger" id="btn-circle" data-tip="Expired Policies" value = "expired" onClick= {this.props.onClick}>
                        4

                        <ReactTooltip place="bottom" type="light" effect="solid" />

                    </Button>
                    </li>

                </ul>
                <img src={Vision} style={{ position: "absolute", right: "5%", top: "15px" }} width="100" height="50" />

            </div>


        );
    }

}