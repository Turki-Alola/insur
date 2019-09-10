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
                <div className='' style={{ height: "auto" }}>
                    <Scrollbars
                        autoHeight
                        autoHeightMax={500}
                        universal
                    >
                        <Table responsive size="sm" hover h>
                            <tbody>
                                <tr style = {{columnWidth: "10px"}}>
                                    <td colSpan="0">
                                        <Media as="div" >
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-1"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 1
                            </td>
                                    <td style={{ color: "white", textAlign: "right", textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000", fontSize: "large" }}>
                                        3884.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 2
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        8990.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Media as="div">
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src={Logo}
                                                alt="Generic placeholder"
                                            />
                                        </Media>
                                    </td>
                                    <td style={{ textAlign: "left" }}>
                                        Insurance Company Number 3
                            </td>
                                    <td style={{ color: "white", textAlign: "right" }}>
                                        10422.00 SR
                            </td>
                                </tr>
                            </tbody>
                        </Table>
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