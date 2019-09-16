import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button,  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Listing from './panelListing.js'
import '../Forms/form.css'
import './panelListing.css'

export default class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "",
            policies: {
                goodStanding: this.goodStanding,
                nearExpiry: this.nearExpiry,
                expired: this.expired
            }
        }
        console.log('state: ', this.state)
    }
    goodStanding = [
        ["Company1", "21/3/2020"],
        ["Company4", "2/6/2020"],
        ["Company6", "12/9/2021" ]
    ];
    nearExpiry = [
        ["Company2", "20/10/2019"],
        ["Company4", "18/9/2019"]
    ]
    expired = [
        ["Company2", "17/3/2019"],
        ["Company4", "1/8/2019"],
        ["Company1", "10/9/2019"],
        ["Company6", "22/8/2019"],
        ["Company2", "17/3/2019"],
        ["Company4", "1/8/2019"],
        ["Company1", "10/9/2019"],
        ["Company6", "22/8/2019"]
    ]

    get getIndicator() {
        switch (this.props.panel) {
            case "goodStanding":
                return (
                    <div>
                    <Button color="success" id="btn-circle" data-tip="Polices in good standings" >
                        {this.state.policies[this.props.panel].length}
                    </Button>
                    {/* <span>  Polices in Good Standings </span> */}
                    </div>
                );
            case "nearExpiry":
                return (
                    <div>
                    <Button color="warning" id="btn-circle" data-tip="Polices near expiry" >
                        {this.state.policies[this.props.panel].length}
                    </Button>
                    {/* <span>  Nearly Expired Policies  </span> */}
                    </div>
                );
            case "expired":
                return (
                    <div>
                    <Button color="danger" id="btn-circle" data-tip="Polices in good standings" >
                        {this.state.policies[this.props.panel].length}
                    </Button>
                        {/* <span>  Expired Polices  </span> */}
                    </div>
                );
        }
    }

    get getListing() {
        let listings =[];
        let count = this.state.policies[this.props.panel].length;
        this.state.policies[this.props.panel].forEach((item, key) =>{
            // console.log('item: ', item, key);
            listings.push(<Listing name= {item[0]} date = {item[1]}key = {key}/>)
        })
        // console.log(listings)
        return listings;
    }

    render() {
        if (this.props.display) {
            return (
                <div className="form" id="masterForm" >
                    <div id="shapeContainer">
                        {this.getIndicator}
                    </div>
                    <div className="listing" >
                        <Scrollbars
                            autoHeight
                            autoHeightMax={window.innerHeight * 0.65}
                            universal
                        >
                            {this.getListing}
                        </Scrollbars>
                    </div>
                </div>
            );
        } else { return null; }
    }
}
