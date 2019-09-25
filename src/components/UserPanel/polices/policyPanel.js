import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip'

import Listing from './policyListing.js'
import '../../Forms/form.css'
import './panelListing.css'

export default class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.sortDates();
        this.state = {
            theme: "",
            policies: {
                goodStanding: this.goodStanding,
                nearExpiry: this.nearExpiry,
                expired: this.expired
            }
        };
    }
    sortDates = () => {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        // console.log(day, month, year);
        const threshold = 8;
        this.data.forEach((item) => {
            let givenYear = parseInt(item["date"]["year"]);
            let givenMonth = parseInt(item["date"]["month"]);
            let givenDay = parseInt(item["date"]["day"]);
            let adjustedMonth = month + ((year - givenYear) * 12);
            console.log(givenDay, givenMonth, givenYear);
            // console.log("adj: ", adjustedMonth)
            console.log("formula: " + givenMonth + " - " + adjustedMonth + " = ", givenMonth - adjustedMonth);
            let result = this.comparedTo(givenYear, year);
            //compares up to 1 year difference, else adds to to expired list
            if (result >= -1) {
                // x -- y = x + y
                if ((givenMonth - adjustedMonth) > threshold) {
                    this.goodStanding.push(item);
                } else if (givenMonth - adjustedMonth > 0) {
                    this.nearExpiry.push(item);
                } else if (givenMonth - adjustedMonth === 0) {
                    // console.log("here", day  , givenDay )
                    givenDay > day ?
                        this.nearExpiry.push(item) : this.expired.push(item);
                } else {
                    this.expired.push(item);
                }
            } else {
                this.expired.push(item);
            }
        })

    }

    comparedTo = (first, second) => {
        return first - second;
    }



    goodStanding = [
    ];
    nearExpiry = [
    ];
    expired = [
    ];

    data = [
        {
            name: "Company2", date: {
                day: "25",
                month: "9",
                year: "2019"
            }
        },
        {
            name: "Company4", date: {
                day: "1",
                month: "8",
                year: "2019"
            }
        },
        {
            name: "Company1", date: {
                day: "10",
                month: "9",
                year: "2019"
            }
        },
        {
            name: "Company6", date: {
                day: "22",
                month: "4",
                year: "2019"
            }
        },
        {
            name: "Company2", date: {
                day: "17",
                month: "3",
                year: "2019"
            }
        },
        {
            name: "Company4", date: {
                day: "1",
                month: "6",
                year: "2019"
            }
        },
        {
            name: "Company1", date: {
                day: "10",
                month: "12",
                year: "2019"
            }
        },
        {
            name: "Company6", date: {
                day: "22",
                month: "10",
                year: "2019"
            }
        },
        {
            name: "Company2", date: {
                day: "20",
                month: "7",
                year: "2019"
            }
        },
        {
            name: "Company4", date: {
                day: "18",
                month: "9",
                year: "2019"
            }
        },
        {
            name: "Company1", date: {
                day: "21",
                month: "3",
                year: "2020"
            }
        },
        {
            name: "Company2", date: {
                day: "1",
                month: "3",
                year: "2020"
            }
        },
        {
            name: "Company6", date: {
                day: "4",
                month: "6",
                year: "2020"
            }
        }
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
        this.state.policies[this.props.panel].forEach((item, key) => {
            // console.log('item: ', item, key);
            // listings.push(<Listing name= {item[0]} date = {item[1]}key = {key}/>)
            listings.push(<Listing name={item['name']} date={item['date']} key={key} />)
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
