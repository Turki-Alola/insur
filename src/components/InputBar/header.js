import React, { Component } from 'react';
import './header.css'
import { Button } from 'reactstrap';
//import Logo from './logo.ico'
import ReactTooltip from 'react-tooltip'
// import { MDBIcon, MDBContainer } from 'mdbreact';
//import Nav from 'react-bootstrap/Navbar'
//import Badge from 'react-bootstrap/Badge'
//import { MDBBtn } from "mdbreact";

export default class Header extends Component {

    render() {
        return (
            <div >
                <ul className="menu">
                    <li><Button color="outline-info" className="btn-circle">Muhammad</Button></li>
                    
                    <li><Button color="outline-success" id="btn-circle"  data-tip="Polices in good standings">
                        <a> 3 </a>

                        <ReactTooltip place="bottom" type="light" effect="solid" />
                    </Button></li>

                    <li><Button color="outline-warning" id="btn-circle" data-tip="Policies near expiry" >
                    <a > 2 </a>

                    <ReactTooltip place="bottom" type="light" effect="solid" />

                    </Button></li>
                    <li><Button color="outline-danger" id="btn-circle"  data-tip="Expired Policies">
                        <a>4 </a>

                        <ReactTooltip place="bottom" type="light" effect="solid" />

                    </Button>
                    </li>
                    
                </ul>
                {/* <img src={Logo} style={{ position: "absolute", right: "30px", top: "15px" }} /> */}
            
            </div>
            

        );
    }

}