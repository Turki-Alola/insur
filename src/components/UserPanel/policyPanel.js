import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button} from 'reactstrap';
import ReactTooltip from 'react-tooltip'

import Listing from './policyListing.js'
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
        { name: "Company1", date: "21/3/2020" },
        { name: "Company2", date: "1/3/2020" },
        { name: "Company6", date: "4/6/2020" }
    ];
    nearExpiry = [
        { name: "Company2", date: "20/10/2019" },
        { name: "Company4", date: "18/9/2019" },
    ]
    expired = [
        { name: "Company2", date: "17/3/2019" },
        { name: "Company4", date: "1/8/2019" },
        { name: "Company1", date: "10/9/2019" },
        { name: "Company6", date: "22/8/2019" },
        { name: "Company2", date: "17/3/2019" },
        { name: "Company4", date: "1/8/2019" },
        { name: "Company1", date: "10/9/2019" },
        { name: "Company6", date: "22/8/2019" },
    ]



    get getIndicator() {
        switch (this.props.panel) {
            case "goodStanding":
                return (
                    <div>
                        <Button color="success" id="btn-circle" data-tip="Polices in good standings" >
                            {this.state.policies[this.props.panel].length}
                            <ReactTooltip place="top" type="light" effect="solid" />
                        </Button>
                        {/* <span>  Polices in Good Standings </span> */}
                    </div>
                );
            case "nearExpiry":
                return (
                    <div>
                        <Button color="warning" id="btn-circle" data-tip="Polices near expiry" >
                            {this.state.policies[this.props.panel].length}
                            <ReactTooltip place="top" type="light" effect="solid" />
                        </Button>
                        {/* <span>  Nearly Expired Policies  </span> */}
                    </div>
                );
            case "expired":
                return (
                    <div>
                        <Button color="danger" id="btn-circle" data-tip="Expired Policies"  >
                            {this.state.policies[this.props.panel].length}
                            <ReactTooltip place="top" type="light" effect="solid" />
                        </Button>
                        {/* <span>  Expired Polices  </span> */}
                    </div>
                );
        }
    }

    get getListing() {
        let listings = [];
        let count = this.state.policies[this.props.panel].length;
        this.state.policies[this.props.panel].forEach((item, key) => {
            // console.log('item: ', item, key);
            listings.push(<Listing name={item[0]} date={item[1]} key={key} />)
        })
        // console.log(listings)
        return listings;
    }
    get getListing2() {
        let listings = [];
        let count = this.state.policies[this.props.panel].length;
        this.state.policies[this.props.panel].forEach((item, key) => {
            console.log('item: ', item, key);
            // listings.push(<Listing name= {item[0]} date = {item[1]}key = {key}/>)
            listings.push(<Listing name={item['name']} date={item['date']} key = {key} />)
        })
        // console.log(listings)
        return listings;
    }

    render() {
        if (this.props.display === 'panel') {
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
                            {this.getListing2}
                        </Scrollbars>
                    </div>
                </div>
            );
        } else { return null; }
    }
}
